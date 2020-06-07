const express = require('express')
const path = require('path')
const fs = require('fs')
const history = require('connect-history-api-fallback');
const axios = require('axios')
const app = express()

app.get(/^\/[a-zA-Z0-9]{4}$/, async (req, res) => {
  console.log("Redirecting")
  console.log(req.url)
  let r = await axios.get(`http://localhost:8000${req.path}`).catch((e) => {return e})
  if (!r.data) {
    res.redirect("/")
    return
  }
  else console.log(r.data.url)
  res.redirect(301, r.data.url)
})
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}.`)
})