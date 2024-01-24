import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

// first handler for /foo with random response
app.get('/foo', (req, res, next) => { 
    // declare random number for response
    let responseChoice = Math.floor(Math.random()*2);
    console.log(responseChoice);
    res.type('text/plain');
    switch (responseChoice) {
        case 0: //
            res.send("Sometimes this");
            break;
        case 1:
            console.log("The response will be sent by the next function");
            next();
            break;
    };   
}, (req, res) => {
//second handler for /foo return plain text
    res.type('text/plain');
    res.send("and sometimes that");
});

app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404-Not Found");
});

app.listen(app.get('port'), ()=> {
    console.log("Express Server is running");
});