export class promptOption {
    constructor() {
        this.host = 'https://api.openai.com/v1/images/generations'
    }

    getPromptOptionList() {
        return [
            {
                name: 'Creatures',
                prompt: ['epic professional digital art of a ', ', best on artstation, cgsociety, wlop, Behance, pixiv, astonishing, impressive, outstanding, epic, cinematic, stunning, gorgeous, much detail, much wow, masterpiece'],
                keywords: ['epic', 'professional', 'digital art', 'astonishing', 'impressive', 'outstanding', 'epic', 'cinematic', 'stunning', 'gorgeous', 'masterpiece'],
                description: 'Great to generate monsters, creatures, use an entity as the prompt text, for example:"monster"',
                image:'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ExD676CyOc52vm7KPSENlmr4/user-k4coZyOoFsufiJvsxkjAhawc/img-lBFzk5pxVB4wMh8jtkOMbQPJ.png?st=2022-11-21T22%3A26%3A34Z&se=2022-11-22T00%3A26%3A34Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-21T04%3A25%3A04Z&ske=2022-11-22T04%3A25%3A04Z&sks=b&skv=2021-08-06&sig=/tdL3qFpCOVaiArJq9wGlujHOHPM2za6kQfRuwYhxl8%3D'
            },
            {
                name: 'Photo',
                prompt: ['grainy abstract experimental expired film photo of a ', ', talking angrily on mobile mobile phone, gesticulating angrily, in 1960s New York City by Saul Leiter, 50mm lens, cinematic colors, oversaturated filter, blur, reflection, refraction, distortion, rain drops, smears, smudges, blur cinestill 800t'],
                keywords: ['abstract', 'photo', 'angrily', 'cinematic', 'oversaturated', 'blur', 'reflection', 'distortion', 'rain', 'smudges', 'cinestill'],
                description: 'Great to generate paintings/photos, as a prompt text use or describe a human, for example:"woman in red dress"',
                image:'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ExD676CyOc52vm7KPSENlmr4/user-k4coZyOoFsufiJvsxkjAhawc/img-FLj8ETPrjlkP2yPyliA4Pfwd.png?st=2022-11-21T22%3A27%3A36Z&se=2022-11-22T00%3A27%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-21T15%3A12%3A38Z&ske=2022-11-22T15%3A12%3A38Z&sks=b&skv=2021-08-06&sig=ROUDa6KwvwLBRAyDtUBdelaYNloQc%2BgJcmL9UhFcUsE%3D'
            },
            {
                name: 'Manual',
                prompt: ['', ''],
                keywords: ['manual', 'personal', 'creative'],
                description: 'Use this mode to enter your prompt from scracth, use your ideas and create amazing images, remember to separate by commas, you can even use emojis',
                image:'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ExD676CyOc52vm7KPSENlmr4/user-k4coZyOoFsufiJvsxkjAhawc/img-XXxI2D01DFiCKY8kp5IdyhQC.png?st=2022-11-21T23%3A09%3A25Z&se=2022-11-22T01%3A09%3A25Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-21T04%3A52%3A08Z&ske=2022-11-22T04%3A52%3A08Z&sks=b&skv=2021-08-06&sig=YiU4fWVQ2UtfP0LNFwjqhvdLfdS5DXpBboyFIsHZRSw%3D'
            }
        ]
    }
}