
const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);

app.listen(3000, ()=> {
    console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
    console.log("Entrou na pasta raiz");
    res.render('index.html');
});

require('./routes/enviarEmail')(app);