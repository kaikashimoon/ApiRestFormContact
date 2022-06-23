require("dotenv").config();
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));

async function mainMail(name, email, number, text) {
  const transporter =  nodeMail.createTransport({
    service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
  });
  const mailOption = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    html: `<b> You got a message from  <br />
    Email : ${email} <br />
    Name: ${name} <br />
    text: ${text} <br />
    Number: ${number} <b/>`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
}


app.post("/v1/contact", async (req, res, next) => {
  const { name, email, number, text} = req.body;
  try {
    const data = await mainMail(name, email, number, text);
    console.log(data)
    res.status(200).json({message: "Message send successfully!"});
  } catch (error) {
    return res.status(500).json({ message: error });  }
});


// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

