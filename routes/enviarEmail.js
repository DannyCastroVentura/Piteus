
//enviar email
const nodemailer = require('nodemailer');
const SMPT_CONFIG = require('./../config/smtp');
const transporter = nodemailer.createTransport({
    host: SMPT_CONFIG.host,
    port: SMPT_CONFIG.port,
    secure: false,
    auth: {
        user: SMPT_CONFIG.user,
        pass: SMPT_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = (app) => {
    app.post('/enviarEmail', async (req, res) => {
      const nome = req.body.nome;
      const contacto = req.body.contacto;
      const email = req.body.email;
      const hora = req.body.hora;
      const nPessoas = req.body.nPessoas;
      const mensagem = req.body.mensagem;
      
      const text = "Nome: " + nome + "\n" + "Contacto: " + contacto + "\nEmail: " + email + "\nHora: " + hora + "\nNúmero de pessoas: " + nPessoas + "\nMensagem: " + mensagem;
      const reserva = await transporter.sendMail({
        text: text,
        subject: 'Pedido de reserva de ' + nome,
        from: nome + ' ' + email,
        to: ['emaildetesteprofissional@gmail.com']
      });
      
      console.log(reserva);

      const resposta = await transporter.sendMail({
        text: "Pedido de reserva recebido, assim que for analisado será enviada uma resposta de confirmação!\n\nCumprimentos,\n\nPitéus - email automático.",
        subject: 'Resposta automática ao pedido de reserva no restaurante Pitéus',
        from: 'emaildetesteprofissional@gmail.com',
        to: [email]
      });
      console.log(resposta);
      res.send(true);
    });
}