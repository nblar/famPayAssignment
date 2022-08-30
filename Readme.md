This repository contains the code for following: -

1. A database schema which stores youtube data in form of title, descriptions etc.

2. A module which calls youtube api and looks for videos based on a query parameter.

3. A get API which takes search paramter and searches for video based on the parameter. The endpoint for the same is: - 
        /search?q="QUERY"

4. The api hit works in the following fashion: - 
 -> The query parameter looks in database for the query keyword
 -> if the param exists, it's returned from the database
 -> if the param doesn't exists, the videos and data is fetched from the youtube api and simultaneously inserts into db and returns the data onto the Front.