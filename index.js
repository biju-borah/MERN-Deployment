const express = require("express")
const res = require("express/lib/response")
const app = express()


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.listen(8000, () => {
    console.log("server running....")
})

app.get("/", (req, res) => {
    // res.send("server running correctly")
    res.json({ "message": "Server running correctly" })
})
