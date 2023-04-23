import cors from 'cors'
import express from 'express'
const PORT = import.meta.env.PORT || 8080
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/chat', async (req, res) => {
  console.log('req.body', req.body)
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: req.body.message }],
        max_tokens: 50,
      }),
    }

    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      requestOptions
    )
    const data = await response.json()
    console.log('data', data)
    res.send(data)
  } catch (error) {
    console.log('Error on POST /api/chat', error)
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
