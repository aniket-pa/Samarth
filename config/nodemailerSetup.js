const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

 var transporter = nodemailer.createTransport({
    host: 'server148.iseencloud.com',
    port: 465,
    secure: true,
    auth: {
        user: 'samartht@samarthtsquare.com',
        pass:'uKJJq92R~EjD'
        //pass: '@oT88A7AbA!9is'
    }
});


  
function sendEmail(mailOptions){

    return new Promise((resolve,reject)=>{

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          reject(false)
        } else {
          console.log('Email sent: ' + info.response);
          resolve(true);
        }
      });

      
    })
 

}


module.exports= sendEmail;