const express = require("express")
const res = require("express/lib/response")
const app = express()


app.listen(8000, () => {
    console.log("server running....")
})

app.get("/", (req, res) => {
    res.send("server running correctly")
})
