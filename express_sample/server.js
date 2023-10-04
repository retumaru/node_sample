const express = require("express")

const dotenv = require("dotenv")

dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//　サーバ作成
const app = express()

// GETリクエストの処理
app.get("/", (req, res) => {
    //　リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //　レスポンスの処理
    res.send("Hello!!!!!")
})

// サーバ待機 (Listen)
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log("wait...")
})