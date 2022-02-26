require('dotenv').config();
const express = require('express')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');



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
   
  const SECRET_KEY = "6LeVU58eAAAAAPV9KecqNujGL9EhSD95CBa4KlXe"
  const maresponse = data.token
  
  
  

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
        bcc: data.email,
        subject: data.subject,
        text: `
        Email: ${data.email}

        Subject: ${data.subject}

        Message: ${data.message} 




        above is a copy for your records.
        `
  };
  fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${SECRET_KEY}&response=${maresponse}`,
  })
    .then(response => response.json())
    .then(response => { 
      console.log(response)
        if(response.success){
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent: %s', info.messageId);
                    res.status(200).send('Send email successfully');
                }
            });
        }else{
            res.send('Something went wrong')}
      
    })
 
  
    
    
});
















app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  })