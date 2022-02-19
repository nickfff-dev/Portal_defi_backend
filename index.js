require('dotenv').config();
const express = require('express')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');



const PORT = process.env.PORT;
const MY_GMAIL = process.env.MY_GMAIL;
const MY_GMAIL_PASSWORD = process.env.MY_GMAIL_PASSWORD;




const app = express()
const port = PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.post('/api/sendMessage', (req, res) => {
   
    const data = req.body
  
    console.log(req.body)
   
    
  

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: MY_GMAIL,
          pass: MY_GMAIL_PASSWORD
        }
    }));

    const mailOptions = {
        from: data.email,
        to: MY_GMAIL,
        subject: data.subject,
        text: `
        Email: ${data.email}

        Subject: ${data.subject}

        Message: ${data.message}
        `
    };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send('Send email successfully');
          console.log('Email sent: ' + info.response);
        }
      });

    
    
});
















app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  })