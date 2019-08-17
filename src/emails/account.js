const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ebraihmmansour@gmail.com',
    subject: 'Testing',
    text: `Welcome ${name}`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ebrahim_mq@gmail.com',
    subject: 'TETO',
    text: 'Teto is playing'
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}