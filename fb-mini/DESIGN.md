 Design for mini FB database

 1. The User Table: will have a column for user_id (int), firstname (varchar), lastname (varchar), birthday (date), password (varchar), bio (text), education (varchar, text), interests (text)

 2. The Posts Table: will have a columnn for user_id (int), post info (text), date posted (date), number of likes (int), number of comments (int)

 3. The Friends Table: will have a column for user_id of the requestor (int), requested_user_id (int), date requested (date), status (varchar), and potentially mutual friends (value list of user_id)