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
    1. Clone the repo using command - git clone https://github.com/startope9/dbmslab.git
    2. Install React, python, mysql workbench for sql, mongodb(along with compass) for nosql.
    3. Import the database in workbench by using SqlData folder. 
    4. Create database named hotel_mgmt in mongoDB and 2 collections activeHotels and feedback, extract the data from files mongoData for each.
    5. After cloning and setting up database:
        i.   Open cmd, navigate to venv directory.
        ii.  Activate venv(virtual environment) .
        iii. Install all the libraries using command - pip install -r requirements.txt
        iv.  Enter the credentials to connect mysql. 
        v.   Start server by running command - python server.py
    6. Open another command prompt, navigate to client directory and start the react app using command - npm start.
    7. Tadaa!! application starts, all details are in database!!

Chapter 1
 Introduction

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
    This project encompasses a multifaceted development endeavor, spanning the realms of backend
    and frontend architecture, database integration, semantic analysis, and payment processing. At its
    core, our aim is to orchestrate a seamless orchestration of these components to create a cohesive
    and intuitive platform that caters to the diverse needs of our global audience. From the intricacies
    of database storage and retrieval to the intricate algorithms powering semantic analysis, every
    aspect of the system is meticulously designed and implemented to ensure optimal performance
    and reliability. As we embark on this journey, we remain steadfast in our commitment to
    innovation and excellence, striving to forge a solution that not only meets but exceeds the
    expectations of travelers and hotel proprietors worldwide.

Chapter 2
    Software Requirement specification
    The software requirement specification (SRS) document serves as a comprehensive guide to the
    functional requirements of the hotel management system. This document outlines the hardware,
    software, and system requirements necessary for the successful development and implementation
    of the system. It provides a detailed understanding of the system's scope, objectives, and
    constraints, serving as a blueprint for the development team and stakeholders.
    2.1 Hardware Requirements
        ● Processor: 11th Gen Intel(R) Core (TM) i5-11300H @ 3.10GHz 2.61 GHz.
        ● RAM:8.00GB.
        ● Storage: 256 GB.
        ● Network: doesn’t work in presence of rvce router’s firewall.
    2.2 Software Requirements
        ● Operating System: Compatible with any OS.
        ● Frameworks: Python, python mysql-connector, pymongo, python-flask.
        ● Database Server: MySQL, MongoDB.
        ● Browser: Works well in all browsers.
    2.3 Functional Requirements
        ● 1.User Authentication:
            ○ The system should allow users to log in with valid credentials.
            ○ Different user roles (admin, staff, guest) should have appropriate access levels.
        ● 2.Reservation Management:
            ○ Users should be able to create, modify, and cancel reservations.
            ○ Thesystem should display real-time room availability.
        ● 3.Guest Information:
            ○ Capture and store guest details, including name, contact information, and
            preferences.
            ○ Enable quick retrieval of guest information for personalized services.
        ● 4.Check-in and Check-out:
            ○ Provide a streamlined process for guest check-in and check-out.
            ○ Generate and store electronic check-in/check-out records.
        ● 5.Review and Feedback Management:
            ○ Allow guests to submit reviews and feedback through the system.
            ○ Capture unstructured data such as comments, ratings, and suggestions.
        ● 6.Analysis of Reviews:
            ○ Implement algorithms for sentiment analysis on reviews to determine positive,
            negative, or neutral sentiments.
            ○ Store and organize review data for future analysis and reporting.

Chapter 3
 Entity Relationship Diagram
    The Entity Relationship Diagram (ERD) serves as a visual representation of the relationships
    between various entities within the hotel management system. This diagram provides a conceptual
    overview of the system's data model, illustrating how different entities are related to each other
    and the attributes associated with each entity. The ERD helps to clarify the structure of the
    database schema, facilitating the design and implementation of the underlying data storage
    architecture. In this chapter, we present the ERD for the hotel management system, highlighting
    the entities, relationships, and cardinalities that govern the flow of data within the system. The
    below fig 3.1 shows the ERD of the hotel management system.
    fig 3.1: ER Diagram of Hotel Management System (add er.png)

Chapter 4
 Detailed Design
    The Detailed Design chapter delves into the specific design aspects of the hotel management
    system, providing a comprehensive overview of the system's architecture, components, and
    functionalities. This chapter serves as a blueprint for the development team, outlining the detailed
    specifications and implementation details required to realize the system's requirements. In this
    section, we present the detailed design documentation, starting with the Data Flow Diagram
    (DFD) Level 0. The DFD Level 0 provides a high-level overview of the system's data flow and
    processes, illustrating the interactions between external entities and the core components of the
    system. This diagram serves as the foundation for further elaboration and refinement of the
    system's design in subsequent sections. The figures below show the DFD’s of the database system.
    4.1 DFDLevel 0
        fig 4.1: DFD Level 0 (copy dfd level 0 image)
    4.2 DFDLevel 1
        fig 4.2: DFD Level 1 (copy dfd level 1 image)
    4.3 DFDLevel 2
        fig 4.3: DFD Level 2 (copy dfd level 2 image)
    (Hope you know snipping tool.)

Chapter 5
 Relational schema and Normalization
    The Relational Schema and Normalization chapter focuses on the logical design of the database
    schema for the hotel management system. This chapter provides a detailed description of the
    tables, attributes, and relationships that constitute the relational database model. Additionally, it
    discusses the process of normalization, which involves organizing the database structure to
    minimize redundancy and dependency, thereby improving data integrity and efficiency. By
    presenting the relational schema and normalization process, this chapter lays the groundwork for
    the implementation of the database schema, ensuring that it meets the requirements of the system
    while adhering to best practices in database design.

    Schema diagram,
    fig 5.1: Schema Diagram (copy schema.png here)

    Normalization and description
        ● Table: accHolder
            This table seems to be in BCNF already. The primary key (accid) uniquely identifies
            each record, and there are no transitive dependencies.
        ● Table: hotels
            This table seems to be in BCNF already. The primary key (hotelld) uniquely identifies
            each record, and there are no transitive dependencies.
        ● Table: roomInfo
            This table is not in BCNF. The determinant (hid) of the functional dependency (
            hid-> noOfBeds, cost) is not a candidate key for the table (the primary key is roomNo). To
            achieve BCNF, we can create a new table to separate the hotel information from the room
            information.
            Newtable: hotelDetails
            Columns: hotelld (foreign key referencing hotels.hotelld), noOfBeds, cost
            The roomInfo table would then only contain:
            Columns: roomNo (primary key), hid (foreign key referencing hotels.hotelld)
        ● Table: hotelGuest
            This table is not in BCNF. The determinant (hotelid) of the functional dependency
            (hotelid-> name, city, state, country) is not a candidate key for the table (the primary
            key is gid). We can create a new table to separate the guest information from the hotel
            guest information.
            Newtable: guestDetails
            Columns: aid (primary key), name, city, state, country
            The hotelGuest table would then only contain:
            Columns: gid (primary key), hotelid (foreign key referencing hotels.hotelld), aid (foreign
            key referencing guestDetails.aid)
        ● Table: transactionDet
            This table seems to be in BCNF already. The primary key (transactionld) uniquely
            identifies each record, and there are no transitive dependencies.

Chapter 6
 NOSQL
    The NoSQL Integration chapter explores the incorporation of a NoSQL database alongside a SQL
    database within the hotel management system's architecture. This section provides a detailed
    examination of how NoSQL technology enhances the existing relational database model, offering
    flexibility and scalability for handling unstructured data efficiently. By integrating both database
    types, the system can capitalize on the strengths of each, optimizing performance and
    accommodating diverse data storage requirements. This chapter delves into the complete system
    architecture, outlining the integration approach, data flow, scalability considerations, and security
    measures to ensure seamless operation and robustness.

    Integrating NOSQL database to SQL with complete system architecture
    ● SystemArchitecture Overview:
        ○ Frontend: Developed using React.js for dynamic user interfaces and enhanced user
        experience.
        ○ Backend: Powered by Python Flask to handle server-side logic, API endpoints, and
        integration with databases.
        ○ Databases: MySQL for structured data storage (e.g., user profiles, booking details)
        and MongoDB for unstructured data storage (e.g., user reviews, hotel details).
    ● Integration Approach:
        ○ Data Modeling: Design data models that cater to the strengths of each database
        type. For MySQL, use relational modeling for structured data, while for
        MongoDB, employ document-oriented modeling for flexible and scalable storage
        of unstructured data.
        ○ Database Connectivity: Utilize MySQL-Connector to connect to MySQL Database
        server. For MongoDB, use appropriate drivers or libraries to interact with the
        database directly.
        ○ Data Synchronization: Implement mechanisms to ensure consistency and
        synchronization between MySQL and MongoDB. This may involve real-time
        synchronization using triggers or scheduled batch processes to update data between
        the two databases.
    ● QueryOptimization:
        ○ Optimize queries based on the strengths and limitations of each database. Leverage
        MySQL's powerful querying capabilities for structured data retrieval, while
        utilizing MongoDB's indexing and aggregation framework for efficient querying of
        unstructured data.
    ● DataFlow:
        ○ Userinteractions with the frontend trigger requests to the backend API.
        ○ Backend processes the requests, fetching data from MySQL and MongoDB as
        required.
        ○ Datafrom both databases is merged and processed as needed to generate responses.
        ○ Responses are sent back to the frontend for display to the user.
    ● Security:
        ○ Implement robust authentication and authorization mechanisms to control access to
        sensitive data in both MySQL and MongoDB.
        ○ Encrypt data transmission between the frontend, backend, and databases using
        HTTPS and SSL/TLS protocols.
        ○ Regularly audit and update security measures to protect against potential
        vulnerabilities.

Chapter 7
 Conclusion & Future Enhancement
    The integration of MySQL and MongoDB within the hotel management system architecture offers
    a powerful and flexible solution that addresses the diverse data storage needs of users and hotel
    proprietors. By leveraging the strengths of both relational and NoSQL databases, we have created
    a system that provides efficient storage and retrieval of structured and unstructured data,
    enhancing the overall user experience and streamlining hotel management processes. Through
    careful design and implementation, we have ensured seamless data flow, synchronization, and
    performance optimization, allowing the system to scale effectively and meet the demands of a
    growing user base.

    Future Enhancements:
        ● Advanced Analytics: Implement advanced analytics capabilities to provide insights into
        user behavior, booking trends, and hotel performance. This could involve the use of
        machine learning algorithms for predictive analytics and personalized recommendations.
        ● Mobile Application: Develop a mobile application version of the hotel management
        system to cater to users who prefer booking accommodations on their smartphones or
        tablets. This would involve creating responsive design layouts and optimizing performance
        for mobile devices.
        ● Integration with External APIs: Integrate with external APIs such as travel booking
        platforms, mapping services, and weather forecasts to provide additional value-added
        services to users, such as nearby attractions, transportation options, and real-time weather
        updates.
        ● Enhanced Security Features: Strengthen security measures by implementing multi-factor
        authentication, encryption at rest, and continuous monitoring for suspicious activities.
        Regular security audits and updates should be conducted to mitigate potential
        vulnerabilities.
        ● Feedback and Review System: Enhance the feedback and review system by incorporating
        sentiment analysis techniques to automatically analyze and categorize user reviews. This
        would provide more meaningful insights for both users and hotel owners and improve the
        overall quality of the review system.
        ● Localization and Internationalization: Support multiple languages and currencies to
        accommodate users from different regions and facilitate global bookings. This would
        involve translating the user interface and providing localized content and pricing options.

References
 [1] Q. Guo, "Research on the Application of Artificial Intelligence Technology in Teaching
 Introduction to Hotel Management in the Context of Smart Hotel," 2021 7th Annual International
 Conference on Network and Information Systems for Computers (ICNISC), Guiyang, China,
 2021, pp. 155-157, doi: 10.1109/ICNISC54316.2021.00037. keywords:
 {Industries;Computers;Digital transformation;Education;Force;Market research;Artificial
 intelligence;smart hotel;artificial intelligence technology;“Introduction to Hotel
 Management”;teaching}
 [2] Y. Xu, "Design of CRM Hotel Management System Based on Machine Learning Algorithm,"
 2023 International Conference on Networking, Informatics and Computing (ICNETIC), Palermo,
 Italy, 2023, pp. 645-649, doi: 10.1109/ICNETIC59568.2023.00138. keywords:
 {Industries;Machine learning algorithms;Costs;Customer services;Customer
 satisfaction;Customer relationship management;Machine learning;Machine learning
 algorithm;CRM;Hotel management},
 [3] Y. Ning, "Research on Computer Information Hotel Front-End Storage Database Integrated
 Management System," 2023 International Conference on Computers, Information Processing and
 Advanced Education (CIPAE), Ottawa, ON, Canada, 2023, pp. 70-73, doi:
 10.1109/CIPAE60493.2023.00019. keywords:
 {Protocols;Costs;Databases;Linux;Education;Information processing;Data
 structures;Computer;information technology;hotel data storage;database management system;data
 structure}
 [4] M. Walerych and W. Zabierowski, "Application supporting hotel management as an example
 of web technologies usage," Proceedings of International Conference on Modern Problem of
 Radio Engineering, Telecommunications and Computer Science, Lviv, UKraine, 2012, pp.
 327-328. keywords: {Erbium;Browsers;Companies;application supporting hotel
 management;hotel;PHP programming;database for web applications},
 [5] Dong Zhang, Baozhuang Niu,Leveraging online reviews for hotel demand forecasting: A deep
 learning approach, Information Processing & Management, Volume 61, Issue 1, 2024, 103527,
 ISSN 0306-4573.