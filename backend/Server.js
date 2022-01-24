const { Credentials } = require ('./Credentials.js');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

const oAuth2Client = new google.auth.OAuth2(Credentials.CLIENT_ID, Credentials.CLIENT_SECRET, Credentials.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: Credentials.REFRESH_TOKEN})

async function sendMail(body) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'oAuth2',
                user: Credentials.User,
                clientId: Credentials.CLIENT_ID,
                clientSecret: Credentials.CLIENT_SECRET,
                refreshToken: Credentials.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: Credentials.From,
            to: Credentials.To,
            subject: body.name + ' has made contact',
            text: body.email + '\n' + body.message + '\n' + body.name + '\n' + body.phone + '\n' + body.company,
            html:'<h1>' + body.email + '<br>' + body.message + '<br>' + body.name + '<br>' + body.phone + '<br>' + body.company + '</h1>'
        }

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch(err) {
        return err;
    }
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.post("/Contact", (req, res) => {
    console.log(req.body);
    sendMail(req.body).then((result) => console.log('Email Send', result)).catch((err) => console.log(error.message));
    return res.status(200).json({ success: true });
});

var server = app.listen(port, function(error) {
    if (error) {
        console.log('Error: Something went wrong', error);
    } else {
        console.log('Server is now listening on port ' + port);
    }
});