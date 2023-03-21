require('dotenv').config();
const token = process.env.TOKEN;

var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/newImages", (req, res, next) => {
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

    fetch(this.host, {
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