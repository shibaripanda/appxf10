import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
})

const reqLenguage = (request) => {
  return `
  сделай перевод текст: "${request}" на 2 самых распространненыx языков в формате json по примеру
 
  
     
        'index': 'en', 
        'language': 'English', 
        'text': 'Hello' 
      
  
  `
}

export const openAItranslater = async function (contentText) {

  return await openai.chat.completions.create({
      messages: [{ role: 'user', content: reqLenguage(contentText) }],
      model: 'gpt-3.5-turbo'
    })
    .then((data) => {
      console.log(data.choices[0].message.content)
      return JSON.parse(data.choices[0].message.content)
    })
    .catch((er) => {
      console.log(er)
    })

} 