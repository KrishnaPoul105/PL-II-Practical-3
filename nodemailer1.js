var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teqipthree@gmail.com',
pass: 'Manisha-vinod1972'
  }
});

var mailOptions = {
  from: 'teqipthree@gmail.com',
  to: 'krishnapoul84@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 