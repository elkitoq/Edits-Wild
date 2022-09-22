// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'elkitoq@gmail.com',
      pass: 'jrkqkvwsbyluphbx',
    },
    secure: true,
  })

  const mailData = {
    from: '"Edits Wild" <elkitoq@gmail.com>',
    to: 'elkitoq@gmail.com',
    subject: `Mensaje de ${req.body.nombre} desde Edits Wild`,
    text: req.body.mensaje + " | Sent from: " + req.body.email,
    html: `<div>${req.body.mensaje}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200).send(true)

}
