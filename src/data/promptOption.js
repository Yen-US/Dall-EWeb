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
                image:'https://github.com/Yen-US/Dall-EWeb/blob/master/src/images/Monster.png?raw=true'
            },
            {
                name: 'Photo',
                prompt: ['grainy abstract experimental expired film photo of a ', ', talking angrily on mobile mobile phone, gesticulating angrily, in 1960s New York City by Saul Leiter, 50mm lens, cinematic colors, oversaturated filter, blur, reflection, refraction, distortion, rain drops, smears, smudges, blur cinestill 800t'],
                keywords: ['abstract', 'photo', 'angrily', 'cinematic', 'oversaturated', 'blur', 'reflection', 'distortion', 'rain', 'smudges', 'cinestill'],
                description: 'Great to generate paintings/photos, as a prompt text use or describe a human, for example:"woman in red dress"',
                image:'https://github.com/Yen-US/Dall-EWeb/blob/master/src/images/Photo.png?raw=true'
            },
            {
                name: 'Manual',
                prompt: ['', ''],
                keywords: ['manual', 'personal', 'creative'],
                description: 'Use this mode to enter your prompt from scracth, use your ideas and create amazing images, remember to separate by commas, you can even use emojis',
                image:'https://github.com/Yen-US/Dall-EWeb/blob/master/src/images/Manual.png?raw=true'
            }
        ]
    }
}