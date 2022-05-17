const nodemailer=require('nodemailer')

async function  sendMail({from,to,subject,text,html}){

let transporter=nodemailer.createTransport({
    // host:process.env.MAIL_HOST,
    // port:process.env.KEY,
    // secure:false,
    // auth:{
    //     user:process.env.MAIL_USER,
    //     pass:process.env.MAIL_PASS
    // }
    service: 'gmail',
        auth: {
            user: "snkrsnkr8@gmail.com",
            pass: "dashing boy"
        }
})

let info=await transporter.sendMail({
    from:`ShareIn<${from}>`,
    to:to,
    subject:subject,
    text:text,
    html:html
})

}

module.exports=sendMail;