import { Token } from './Token';

export class DallEClient {
    Token = new Token();
    constructor() {
        this.host = 'https://api.openai.com/v1/images/generations'
    }

    async newImages(prompt, number, poptionL, size) {
        var data = {
            "prompt": poptionL[0] + prompt + poptionL[1],
            "n": number,
            "size": size + "x" + size
        }

        let rawResponse = ""
        let loading = false
        let errorb = false
        let errorMes = ''

        await fetch(this.host, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Token.getToken()
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
                errorMes=parsedResponse.error.message
            });

        const parsedResponse = await rawResponse.json();

        let response =
        {
            data: parsedResponse.data,
            error: errorb,
            errorM: errorMes,
            loading: loading,
        }

        return response;
    }

}