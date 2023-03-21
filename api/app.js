const cors = require('cors');

require('dotenv').config();
const token = process.env.TOKEN;


var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.use(cors());

app.use(cors({
    origin: 'https://dall-e-lhimvf8n7-yen-us.vercel.app'
  }));

app.get("/", (req, res, next) => {
    res.json('Hi');
});

app.get("/newImages", async (req, res, next) => {
    const hostDallE = 'https://api.openai.com/v1/images/generations'
    const prompt = req.headers['prompt'];
    const number = req.headers['number'];
    const poptionL = req.headers['poptionL'];
    const size = req.headers['size'];

    var data = {
        "prompt": poptionL[0] + prompt + poptionL[1],
        "n": number,
        "size": size + "x" + size
    }

    let rawResponse = ""
    let loading = false
    let errorb = false
    let errorMes = ''

    await fetch(hostDallE, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((response) => rawResponse = response)
        .then((response) => {
            loading = false
            if (!response.ok) throw Error(response);
        })
        .catch((error) => {
            errorb = true
            loading = false
            console.log(error)
            errorMes = parsedResponse.error.message
        });

    const parsedResponse = rawResponse.json();

    let response =
    {
        data: parsedResponse.data,
        error: errorb,
        errorM: errorMes,
        loading: loading,
    }

    res.json(response);
});
