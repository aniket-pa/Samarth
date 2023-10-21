const  { SMTPClient } = require('@emailjs/nodejs')

const client = new SMTPClient({
	user: 'samartht@samarthtsquare.com',
	password: 'uKJJq92R~EjD',
	host: 'server148.iseencloud.com',
	ssl: true,
    port:465
});




module.exports = client