# Express_Server1
 AD320_Assignment

Steps to run the server

1.Open express1.js with VS Code
2.Make sure express module is install through npm, if not, enter npm install express in Terminal and run it.
3.Enter node express1.js in Terminal and run it
4.You shall see "Express server is running" in console.Now you can visit the server in web browser!

This code designed to use conditional routing for path /foo. 

The handler will randomly choose between two responses:
1."sometimes this" or
2.passing control to the next applicable route using the next() method.
The second route handler for /foo that returns the response: "and sometimes that".

Thus, when you visit Localhost:3000/foo on web browser, you will see either of those page.
Screenshot sometimes.png
Screenshot ST_that.png
