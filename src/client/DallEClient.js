import { Token } from './Token';

export class DallEClient {
    Token = new Token();
    constructor() {
        this.host = 'https://api.openai.com/v1/images/generations'
    }

    async newImages(prompt, number, poptionL) {
        var data = {
            "prompt": poptionL[0] + prompt + poptionL[1],
            "n": number,
            "size": "1024x1024"
        }

        const rawResponse = await fetch(this.host, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Token.getToken()
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse.data)
        return parsedResponse.data;
    }

}