1. What is the purpose of using _sessions_?
- Session allow serve to store clients' information and we can use it to persist authentication information so the user doesn't have to reenter
    his/her credentials repeatably 
    
2. What does bcrypt do to help us store passwords in a secure manner.
- bcrypt uses salt to protect against rainbow table attacks

3. What does bcrypt do to slow down attackers?
- bcrypt use hash to protect the users password, which create a level of difficulty for attackers.

4. What are the three parts of the JSON Web Token?

- header, payload, signature