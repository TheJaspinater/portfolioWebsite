const express = require('express');
const cors=require("cors");
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.post("/Contact", (req, res) => {
    console.log(req.body);
    return res.status(200).json({ success: true });
});

var server = app.listen(port, function(error) {
    if (error) {
        console.log('Error: Something went wrong', error);
    } else {
        console.log('Server is now listening on port ' + port);
    }
});