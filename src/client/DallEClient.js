import Token from './token';

export class DallEClient {
    Token = new Token();
    constructor() {
        this.host = 'https://api.openai.com/v1/images/generations'
    }

    async newImages() {
        var data = {
            "prompt": "epic professional digital art of a big lego, best on artstation, cgsociety, wlop, Behance, pixiv, astonishing, impressive, outstanding, epic, cinematic, stunning, gorgeous, much detail, much wow, masterpiece",
            "n": 1,
            "size": "1024x1024"
          }

        const rawResponse = await fetch(this.host, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Token.getToken()
              },
            method: 'POST',
            body: JSON.stringify(data)
        })
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse.data)
        return parsedResponse.data;
    }
    
}