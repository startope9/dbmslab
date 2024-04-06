from flask import Flask, request, session
from flask_cors import CORS
import mysql.connector
import pymongo
from datetime import datetime
from flask_session import Session
import time
import random

def generate_transaction_id():
    timestamp = int(time.time() * 1000)  # Current timestamp in milliseconds
    random_part = random.randint(1000, 9999)  # Random 4-digit number
    transaction_id = f"{timestamp}{random_part}"
    return transaction_id


app = Flask(__name__)
app.config['SECRET_KEY'] = 'cadena aleatoria'

SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
sess = Session()
sess.init_app(app)

CORS(app=app, supports_credentials=True)

@app.route('/')
def home():
    return 'Server started'


@app.route('/login', methods=['POST'])
def checkLogin():
    # in case of localhost -> host='localhost' user='root' password=mysqlpassword database=database_name... in this case name is 'hotel_mgmt'
    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)

    req = request.get_json()
    mycursor.execute('select name, password, accId from accholder where name = %s', (req['name'], ))
    result = mycursor.fetchone()

    mycursor.close()
    if not result:
        return '500'

    elif result[1] != req['password']:
        return '300'
    
    session['user'] = req['name']
    session['uid'] = result[2]
    
    return '200'


@app.route('/getHotels', methods=['POST'])
def checkCheckOut():

    req = request.get_json()

    checkIn = datetime.strptime(req['In'], '%a %b %d %Y').strftime('%Y-%m-%d')
    checkOut = datetime.strptime(req['To'], '%a %b %d %Y').strftime('%Y-%m-%d')

    session['in'] = checkIn
    session['out'] = checkOut

    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)
    mycursor.execute('select * from hotels where city=%s', (req['location'], ))
    hotels = mycursor.fetchall()

    mycursor.close()
    if len(hotels):
        return hotels

    return '500'


@app.route('/emptyRooms', methods=['POST'])
def check4Empty():

    reqId = request.get_json()['idx']

    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)

    mycursor.execute('select * from room_info where hId=%s', (reqId,))
    res = mycursor.fetchall()
    mycursor.close()

    checkIn = str(session.get('in'))
    checkout = str(session.get('out'))

    checkIn = datetime.strptime(checkIn, '%Y-%m-%d')
    checkout = datetime.strptime(checkout, '%Y-%m-%d')

    ndays = (checkout-checkIn).days

    ans = [0,0,0]
    cost = [0,0,0]

    enter = session.get('in')
    enter = datetime.strptime(session.get('in'), "%Y-%m-%d")


    for i in res:
        if i[4] is not None:
            leave = i[4]
            if leave <= enter.date():
                ans[i[2]-1]+=1
                cost[i[2]-1] = i[3]
        else:
            ans[i[2]-1]+=1  
            cost[i[2]-1] = i[3]

    return [ans, cost, ndays]



@app.route('/booked', methods=['POST'])
def allocate():
    from time import gmtime, strftime
    req = request.get_json()

    checkIn = str(session.get('in'))
    checkout = str(session.get('out'))
    hId = req['hid']
    rooms = [int(i) for i in req['rooms']]
    uid = session.get('uid')

    pType = 'online'
    amount = req['amount']
    pTime = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    transaction_id = generate_transaction_id()

    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)   

    while True:
        mycursor.execute('select * from transactionDet where transactionid=%s', (transaction_id, ))
        if not mycursor.fetchone():
            break
        transaction_id = generate_transaction_id()

    
    import random
    mycursor.execute('insert into guest (aid, checkin, checkout) values (%s, %s, %s)', (uid, checkIn, checkout, ))
    mysqldb.commit()
    new_gid = mycursor.lastrowid
    if random.random() < 0.15:
        mycursor.execute('insert into transactionDet (transactionid, type, status, amount, guestid, time) values (%s, %s, %s, %s, %s, %s)', (transaction_id, pType, 'failure', amount,new_gid, pTime, ))
        mysqldb.commit()
        return ['500', transaction_id]
    mycursor.execute('insert into transactionDet (transactionid, type, status, amount, guestid, time) values (%s, %s, %s, %s, %s, %s)', (transaction_id, pType, 'success', amount,new_gid, pTime, ))
    mysqldb.commit()
    
    arr = []

    #-------mysql
    for i in range(len(rooms)):

        while rooms[i]:
            # mycursor.execute('select * from room_info where hId=%s and nBeds=%s and checkout<=%s', (hId, i+1, checkIn, ))
            mycursor.execute(f'select * from room_info where hId={hId} and nBeds={i+1} and (checkout is null or checkout<={checkIn})')
            f = mycursor.fetchone()

            arr.append([f[1], i+1]) #rooms, nBeds

            mycursor.execute('insert into guest (aid, checkin, checkout) values (%s, %s, %s)', (uid, checkIn, checkout, ))
            mysqldb.commit()
            mycursor.execute('update room_info set checkout=%s, filledId=%s where roomNo=%s', (checkout, uid, f[1], ))  
            mysqldb.commit()

            rooms[i]-=1

    #(uid, hotel, amount, arr, checkin, checkout)
    #---------noSQL
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")  #connection url string for mysql; the connection here used is for connecting to localhost.
    myndb = myclient['hotel_mgmt']
    coll = myndb['activeHotels']

    _inval = {'user':uid, 'hotel':hId, 'rooms':arr, 'checkin':checkIn, 'checkout':checkout, 'cancel':'0'}

    x=coll.insert_one(_inval)
    arr.append(transaction_id)
    return arr


@app.route('/getUser', methods=['POST'])
def users():

    idx = session.get('uid')
        
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myndb = myclient['hotel_mgmt']
    coll = myndb['activeHotels']

    find = coll.find({'user':idx})

    arr = []
    hotels = []

    today_date = datetime.now().date()

    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)    

    coll = myndb['feedback']
    for i in find:
        out = datetime.strptime(i['checkout'], "%Y-%m-%d").date()
        if out>=today_date and i['cancel']!='1':
            mycursor.execute('select * from hotels where hotelId = %s', (i['hotel'], ))
            f = mycursor.fetchone()
            arr.append([f[1], i['rooms'], i['checkin'], i['checkout'], i['hotel']])
            x = coll.find({'uid':idx, 'hid':int(i['hotel'])})
            if f not in hotels and x.retrieved == 0:
                hotels.append(f)

    return [arr, hotels]


@app.route('/cancel', methods=['POST'])
def cancel():

    req = request.get_json()['cancelled']
    uid = session.get('uid')

    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myndb = myclient['hotel_mgmt']
    coll = myndb['activeHotels']

    myquery = {"hotel":req[4], "checkin":req[2], "checkout":req[3], "user":uid, "rooms":req[1]}
    newval = {"$set":{"cancel":"1"}}

    coll.update_one(myquery, newval)
    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)    


    for i in req[1]:
        mycursor.execute('update room_info set checkout=NULL, filledId=NULL where roomNo=%s', (i[0], ))
        mysqldb.commit()

    return '200'


# Function to preprocess text
# def preprocess_text(text):

def map_percentage_to_rating(positive_percentage):
    mapped_rating = positive_percentage*5
    return mapped_rating

    

@app.route("/review", methods=['POST'])
def reviewed():

    uid = session.get('uid')
    rhotel = request.get_json()['hotel']
    rev = request.get_json()['rev']

    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myndb = myclient['hotel_mgmt']
    coll = myndb['feedback']

    import joblib
    import spacy

    nlp = spacy.load("en_core_web_sm")
    doc = nlp(rev)
    # Lemmatize and remove stop words and punctuation
    tokens = [token.lemma_.lower() for token in doc if not token.is_stop and not token.is_punct]
    text= " ".join(tokens)

    LModel = joblib.load('trained_model.pkl')
    Lvect = joblib.load('tfidf.pkl')

    processed_text = [text]    
    X = Lvect.transform(processed_text)

    res = LModel.predict(X)

    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)    

    #6-->good, 7-->bad
    if int(res[0]) == 0: 
        rhotel[7]+=1
        ar = rhotel[6] / (rhotel[6]+rhotel[7])
        nr = map_percentage_to_rating(ar)
        mycursor.execute('update hotels set badrat=%s, rating=%s where hotelId=%s', (rhotel[7], nr, rhotel[0], ))
        mysqldb.commit()
    else: 
        rhotel[6]+=1
        ar = rhotel[6] / (rhotel[6]+rhotel[7])
        nr = map_percentage_to_rating(ar)
        mycursor.execute('update hotels set goodrat=%s, rating=%s where hotelId=%s', (rhotel[6], nr, rhotel[0], ))
        mysqldb.commit()


    x=coll.insert_one({'uid':uid, 'hid':rhotel[0], 'feedback':rev, 'remark':int(res[0])})

    return '200'



@app.route('/getreviews', methods=['POST'])
def getRev():

    hid = request.get_json()['hid']

    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myndb = myclient['hotel_mgmt']
    coll = myndb['feedback']

    arr = []

    x = coll.find({'hid':hid})
    mysqldb = mysql.connector.connect(
        host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True) 

    mycursor.execute('select name from hotels where hotelId=%s', (hid, ))
    name = mycursor.fetchone()

    for i in x:
        mycursor.execute('select name from accholder where accId=%s', (i['uid'], ))
        f = mycursor.fetchone()
        arr.append([f[0], i['feedback']])

    return [arr, name]


@app.route('/create', methods=['POST'])
def create():

    req = request.get_json()
    return '200'


@app.route('/out', methods=['POST'])
def logout():

    if session.get('uid') is not None:

        session.pop('uid')
        session.pop('user')
        if session.get('in'):
            session.pop('in')
        if session.get('out'):
            session.pop('out')

        return '200'

    return '500'


@app.route('/fordash', methods=['POST'])
def fordash():

    mysqldb = mysql.connector.connect(host='', user='', password='', database='hotel_mgmt')
    mycursor = mysqldb.cursor(buffered=True)  

    mycursor.execute('select name, city, state, country, rating from hotels')
    htls = mycursor.fetchall()

    return htls


# @app.route('/delete', methods=['POST'])
# def deleting():

#     uid = session.get('uid')

#     mysqldb = mysql.connector.connect(host='', user='', password='', database='hotel_mgmt')
#     mycursor = mysqldb.cursor(buffered=True)  

#     try:
#         mycursor.execute('delete from transactiondet where guestid=%s', (uid, ))
#         mysqldb.commit()

#         mycursor.execute('update room_info set checkout=null, filledId=null where filledId=%s', (uid, ))
#         mysqldb.commit()
    
#         mycursor.execute('delete from guest where aid=%s', (uid, ))
#         mysqldb.commit()

#         mycursor.execute('delete from accholder where accId=%s', (uid, ))
#         mysqldb.commit()

#     except Exception as e:
#         print(e)
#         return '500'

#     return '200'


if __name__ == '__main__':
    app.run(port=5000, debug=True)