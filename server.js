/* const express = require('express');
const app = express();

app.use(Express.static(__dirname+'/images'));

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kevin.brakus4@ethereal.email',
            pass: 'YaYCPVVwWvWAwYQ4D9'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'ssimonvol18@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
}) */