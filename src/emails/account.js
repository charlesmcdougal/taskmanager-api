const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'charlesmcdougal@gmail.com',
        subject: 'Welcome to the notekeeper app!',
        text: `Hello ${name}! Thank you so much for signing up for the site. Please let us know if there's anything you would like to share with us about the sign-up process.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'charlesmcdougal@gmail.com',
        subject: 'Your account has been cancelled.',
        text: `Hello ${name}. Your account has been successfully cancelled. Please contact us if there's anything that could improve your experience with us in the future, and thank you for using our app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}