Proj - Hotel Management System.

Attached with ER Diagram, Schema, DFD.
You can import sql data just like that.
for monogo db collections.
Create a db named hotel_mgmt and import the json files attached in monogoData.

You can rename all things. 

Ratings is given based on reviews of user.
Sentiment analysis is done using kaggle data set.
Link of the code used for training model - https://colab.research.google.com/drive/1ctDr4jE7cJ8VhrlwhtCNym8LcdL0iWgj?usp=sharing


Steps to setup project:<br>
&nbsp;&nbsp;     1. Clone the repo using command - git clone https://github.com/startope9/dbmslab.git <br>
&nbsp;&nbsp;     2. Install React, python, mysql workbench for sql, mongodb(along with compass) for nosql.<br>
&nbsp;&nbsp;     3. Import the database in workbench by using SqlData folder. <br>
&nbsp;&nbsp;     4. Create database named hotel_mgmt in mongoDB and 2 collections activeHotels and feedback, extract the data from files mongoData for each. <br>
&nbsp;&nbsp;     5. After cloning and setting up database: <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    i.   Open cmd, navigate to venv directory. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    ii.  Activate venv(virtual environment) . <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    iii. Install all the libraries using command - pip install -r requirements.txt <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    iv.  Enter the credentials to connect mysql. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    v.   Start server by running command - python server.py <br>
&nbsp;&nbsp;     6. Open another command prompt, navigate to client directory and start the react app using command - npm start. <br>
&nbsp;&nbsp;     7. Tadaa!! application starts, all details are in database!! <br>


 Introduction: <br>
    The hotel management system project represents a concerted effort to disrupt conventional
    approaches to booking accommodations and streamline the intricate processes involved in hotel
    management. With a keen focus on user experience enhancement, our primary aim is to rectify the
    inadequacies prevalent in contemporary booking platforms while concurrently optimizing the
    operational workflows for hotel proprietors. Through the strategic fusion of modern technological
    advancements and innovative methodologies, our overarching goal is to craft a user-friendly
    interface that not only simplifies the booking journey but also furnishes users with accurate
    ratings and insightful reviews. Additionally, we endeavor to fortify the transactional integrity of
    the system, ensuring that user payments are processed securely and efficiently. By embracing this
    holistic approach, we aspire to redefine the landscape of hotel management software, transcending
    the confines of traditional systems to deliver an unparalleled experience for both travelers and
    hotel administrators alike.
    <br>
    This project encompasses a multifaceted development endeavor, spanning the realms of backend
    and frontend architecture, database integration, semantic analysis, and payment processing. At its
    core, our aim is to orchestrate a seamless orchestration of these components to create a cohesive
    and intuitive platform that caters to the diverse needs of our global audience. From the intricacies
    of database storage and retrieval to the intricate algorithms powering semantic analysis, every
    aspect of the system is meticulously designed and implemented to ensure optimal performance
    and reliability. As we embark on this journey, we remain steadfast in our commitment to
    innovation and excellence, striving to forge a solution that not only meets but exceeds the
    expectations of travelers and hotel proprietors worldwide.
    <br>
Software Requirement specification: <br>
    The software requirement specification (SRS) document serves as a comprehensive guide to the
    functional requirements of the hotel management system. This document outlines the hardware,
    software, and system requirements necessary for the successful development and implementation
    of the system. It provides a detailed understanding of the system's scope, objectives, and
    constraints, serving as a blueprint for the development team and stakeholders.
    <br>
&nbsp;&nbsp;     2.1 Hardware Requirements <br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Processor: 11th Gen Intel(R) Core (TM) i5-11300H @ 3.10GHz 2.61 GHz.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● RAM:8.00GB.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Storage: 256 GB.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Network: doesn’t work in presence of rvce router’s firewall.<br>
&nbsp;&nbsp;     2.2 Software Requirements<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Operating System: Compatible with any OS.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Frameworks: Python, python mysql-connector, pymongo, python-flask.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Database Server: MySQL, MongoDB.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● Browser: Works well in all browsers.<br>
&nbsp;&nbsp;     2.3 Functional Requirements<br>
   &nbsp;&nbsp; &nbsp;&nbsp;      ● 1.User Authentication:<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ The system should allow users to log in with valid credentials.<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Different user roles (admin, staff, guest) should have appropriate access levels.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● 2.Reservation Management:<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Users should be able to create, modify, and cancel reservations.<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Thesystem should display real-time room availability.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● 3.Guest Information:<br>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;       ○ Capture and store guest details, including name, contact information, and
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;       preferences.<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Enable quick retrieval of guest information for personalized services.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● 4.Check-in and Check-out:<br>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;   ○ Provide a streamlined process for guest check-in and check-out.<br>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;   ○ Generate and store electronic check-in/check-out records.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● 5.Review and Feedback Management:<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Allow guests to submit reviews and feedback through the system.<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Capture unstructured data such as comments, ratings, and suggestions.<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     ● 6.Analysis of Reviews:<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Implement algorithms for sentiment analysis on reviews to determine positive,
            negative, or neutral sentiments.<br>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;         ○ Store and organize review data for future analysis and reporting.<br>

Entity Relationship Diagram: <br>
    The Entity Relationship Diagram (ERD) serves as a visual representation of the relationships
    between various entities within the hotel management system. This diagram provides a conceptual
    overview of the system's data model, illustrating how different entities are related to each other
    and the attributes associated with each entity. The ERD helps to clarify the structure of the
    database schema, facilitating the design and implementation of the underlying data storage
    architecture. In this chapter, we present the ERD for the hotel management system, highlighting
    the entities, relationships, and cardinalities that govern the flow of data within the system. The
    below fig 3.1 shows the ERD of the hotel management system.<br>
    fig 3.1: ER Diagram of Hotel Management System (add er.png)

Detailed Design: <br>
    The Detailed Design chapter delves into the specific design aspects of the hotel management
    system, providing a comprehensive overview of the system's architecture, components, and
    functionalities. This chapter serves as a blueprint for the development team, outlining the detailed
    specifications and implementation details required to realize the system's requirements. In this
    section, we present the detailed design documentation, starting with the Data Flow Diagram
    (DFD) Level 0. The DFD Level 0 provides a high-level overview of the system's data flow and
    processes, illustrating the interactions between external entities and the core components of the
    system. This diagram serves as the foundation for further elaboration and refinement of the
    system's design in subsequent sections. The figures below show the DFD’s of the database system.<br>
    &nbsp;&nbsp; 4.1 DFDLevel 0<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     fig 4.1: DFD Level 0 (copy dfd level 0 image)<br>
    &nbsp;&nbsp; 4.2 DFDLevel 1<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     fig 4.2: DFD Level 1 (copy dfd level 1 image)<br>
    &nbsp;&nbsp; 4.3 DFDLevel 2<br>
    &nbsp;&nbsp; &nbsp;&nbsp;     fig 4.3: DFD Level 2 (copy dfd level 2 image)<br>
    (Hope you know snipping tool.)<br>

Relational schema and Normalization: <br>
    The Relational Schema and Normalization chapter focuses on the logical design of the database
    schema for the hotel management system. This chapter provides a detailed description of the
    tables, attributes, and relationships that constitute the relational database model. Additionally, it
    discusses the process of normalization, which involves organizing the database structure to
    minimize redundancy and dependency, thereby improving data integrity and efficiency. By
    presenting the relational schema and normalization process, this chapter lays the groundwork for
    the implementation of the database schema, ensuring that it meets the requirements of the system
    while adhering to best practices in database design Schema diagram. 
    <br>
    fig 5.1: Schema Diagram (copy schema.png here) 
    <br>
    Normalization and description: <br>
        ● Table: accHolder<br>
            This table seems to be in BCNF already. The primary key (accid) uniquely identifies
            each record, and there are no transitive dependencies.<br>
        ● Table: hotels<br>
            This table seems to be in BCNF already. The primary key (hotelld) uniquely identifies
            each record, and there are no transitive dependencies.<br>
        ● Table: roomInfo<br>
            This table is not in BCNF. The determinant (hid) of the functional dependency (
            hid-> noOfBeds, cost) is not a candidate key for the table (the primary key is roomNo). To
            achieve BCNF, we can create a new table to separate the hotel information from the room
            information.<br>
                Newtable: hotelDetails<br>
                Columns: hotelld (foreign key referencing hotels.hotelld), noOfBeds, cost
                The roomInfo table would then only contain:<br>
                Columns: roomNo (primary key), hid (foreign key referencing hotels.hotelld)<br>
        ● Table: hotelGuest<br>
            This table is not in BCNF. The determinant (hotelid) of the functional dependency
            (hotelid-> name, city, state, country) is not a candidate key for the table (the primary
            key is gid). We can create a new table to separate the guest information from the hotel
            guest information.<br>
                Newtable: guestDetails<br>
                Columns: aid (primary key), name, city, state, country<br>
                The hotelGuest table would then only contain:<br>
                Columns: gid (primary key), hotelid (foreign key referencing hotels.hotelld), aid (foreign
                key referencing guestDetails.aid)<br>
        ● Table: transactionDet<br>
            This table seems to be in BCNF already. The primary key (transactionld) uniquely
            identifies each record, and there are no transitive dependencies.

NOSQL: <br>
    The NoSQL Integration chapter explores the incorporation of a NoSQL database alongside a SQL
    database within the hotel management system's architecture. This section provides a detailed
    examination of how NoSQL technology enhances the existing relational database model, offering
    flexibility and scalability for handling unstructured data efficiently. By integrating both database
    types, the system can capitalize on the strengths of each, optimizing performance and
    accommodating diverse data storage requirements. This chapter delves into the complete system
    architecture, outlining the integration approach, data flow, scalability considerations, and security
    measures to ensure seamless operation and robustness.
    <br>
    Integrating NOSQL database to SQL with complete system architecture <br>
    ● SystemArchitecture Overview:<br>
        ○ Frontend: Developed using React.js for dynamic user interfaces and enhanced user
        experience.<br>
        ○ Backend: Powered by Python Flask to handle server-side logic, API endpoints, and
        integration with databases.<br>
        ○ Databases: MySQL for structured data storage (e.g., user profiles, booking details)
        and MongoDB for unstructured data storage (e.g., user reviews, hotel details).<br>
    ● Integration Approach:<br>
        ○ Data Modeling: Design data models that cater to the strengths of each database
        type. For MySQL, use relational modeling for structured data, while for
        MongoDB, employ document-oriented modeling for flexible and scalable storage
        of unstructured data.<br>
        ○ Database Connectivity: Utilize MySQL-Connector to connect to MySQL Database
        server. For MongoDB, use appropriate drivers or libraries to interact with the
        database directly.<br>
        ○ Data Synchronization: Implement mechanisms to ensure consistency and
        synchronization between MySQL and MongoDB. This may involve real-time
        synchronization using triggers or scheduled batch processes to update data between
        the two databases.<br>
    ● QueryOptimization: <br>
        ○ Optimize queries based on the strengths and limitations of each database. Leverage
        MySQL's powerful querying capabilities for structured data retrieval, while
        utilizing MongoDB's indexing and aggregation framework for efficient querying of
        unstructured data. <br>
    ● DataFlow:<br>
        ○ Userinteractions with the frontend trigger requests to the backend API. <br>
        ○ Backend processes the requests, fetching data from MySQL and MongoDB as
        required.<br>
        ○ Datafrom both databases is merged and processed as needed to generate responses.<br>
        ○ Responses are sent back to the frontend for display to the user.<br>
    ● Security:<br>
        ○ Implement robust authentication and authorization mechanisms to control access to
        sensitive data in both MySQL and MongoDB.<br>
        ○ Encrypt data transmission between the frontend, backend, and databases using
        HTTPS and SSL/TLS protocols.<br>
        ○ Regularly audit and update security measures to protect against potential
        vulnerabilities.<br>

Conclusion & Future Enhancement <br>
    The integration of MySQL and MongoDB within the hotel management system architecture offers
    a powerful and flexible solution that addresses the diverse data storage needs of users and hotel
    proprietors. By leveraging the strengths of both relational and NoSQL databases, we have created
    a system that provides efficient storage and retrieval of structured and unstructured data,
    enhancing the overall user experience and streamlining hotel management processes. Through
    careful design and implementation, we have ensured seamless data flow, synchronization, and
    performance optimization, allowing the system to scale effectively and meet the demands of a
    growing user base. <br>

    Future Enhancements: 
<br>
        ● Advanced Analytics: Implement advanced analytics capabilities to provide insights into
        user behavior, booking trends, and hotel performance. This could involve the use of
        machine learning algorithms for predictive analytics and personalized recommendations. <br>
        ● Mobile Application: Develop a mobile application version of the hotel management
        system to cater to users who prefer booking accommodations on their smartphones or
        tablets. This would involve creating responsive design layouts and optimizing performance
        for mobile devices. <br>
        ● Integration with External APIs: Integrate with external APIs such as travel booking
        platforms, mapping services, and weather forecasts to provide additional value-added
        services to users, such as nearby attractions, transportation options, and real-time weather
        updates. <br>
        ● Enhanced Security Features: Strengthen security measures by implementing multi-factor
        authentication, encryption at rest, and continuous monitoring for suspicious activities.
        Regular security audits and updates should be conducted to mitigate potential
        vulnerabilities. <br>
        ● Feedback and Review System: Enhance the feedback and review system by incorporating
        sentiment analysis techniques to automatically analyze and categorize user reviews. This
        would provide more meaningful insights for both users and hotel owners and improve the
        overall quality of the review system. <br>
        ● Localization and Internationalization: Support multiple languages and currencies to
        accommodate users from different regions and facilitate global bookings. This would
        involve translating the user interface and providing localized content and pricing options. <br>

References <br>
 [1] Q. Guo, "Research on the Application of Artificial Intelligence Technology in Teaching
 Introduction to Hotel Management in the Context of Smart Hotel," 2021 7th Annual International
 Conference on Network and Information Systems for Computers (ICNISC), Guiyang, China,
 2021, pp. 155-157, doi: 10.1109/ICNISC54316.2021.00037. <br>
 [2] Y. Xu, "Design of CRM Hotel Management System Based on Machine Learning Algorithm,"
 2023 International Conference on Networking, Informatics and Computing (ICNETIC), Palermo,
 Italy, 2023, pp. 645-649, doi: 10.1109/ICNETIC59568.2023.00138. <br>
 [3] Y. Ning, "Research on Computer Information Hotel Front-End Storage Database Integrated
 Management System," 2023 International Conference on Computers, Information Processing and
 Advanced Education (CIPAE), Ottawa, ON, Canada, 2023, pp. 70-73, doi:
 10.1109/CIPAE60493.2023.00019.<br>
 [4] M. Walerych and W. Zabierowski, "Application supporting hotel management as an example
 of web technologies usage," Proceedings of International Conference on Modern Problem of
 Radio Engineering, Telecommunications and Computer Science, Lviv, UKraine, 2012, pp.
 327-328. <br>
 [5] Dong Zhang, Baozhuang Niu,Leveraging online reviews for hotel demand forecasting: A deep
 learning approach, Information Processing & Management, Volume 61, Issue 1, 2024, 103527,
 ISSN 0306-4573. <br>