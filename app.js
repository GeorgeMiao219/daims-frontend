const path = require('path')
const fs = require('fs')
const https = require('https');

const express = require('express')
const history = require('connect-history-api-fallback');
const axios = require('axios')
const compress = require('compression')
const sd = require('silly-datetime')
const app = express()

var key = fs.readFileSync(__dirname + '/privkey.pem');
var cert = fs.readFileSync(__dirname + '/fullchain.pem');
var credentials = {key: key, cert: cert};

function printLog(str){
  let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  console.log(`[${time}] ${str}`) 
}

app.use(compress())
app.get(/^\/[a-zA-Z0-9]{4}$/, async (req, res) => {
  const pt = req.path
  let r = await axios.get(`https://url.api.miao.dev${pt}`).catch((e) => {return e})
  if (!r.data) {
    res.redirect("/")
    return
  }
  const url = r.data.url
  printLog(`${pt.slice(1)} => ${url}`)
  res.redirect(301, url)
})
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')));


const port = process.env.PORT || 3000

var httpsServer = https.createServer(credentials, app);
console.log(`app listening on port ${port}.`)
httpsServer.listen(port);