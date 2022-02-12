const express = require("express")
const app = express()
const hbs = require("hbs")
const port = 3500
const path = require("path")
const pathDir=path.join(__dirname,"./public")
const pathViewDir = path.join(__dirname, "./templates/views")
const partials = path.join(__dirname, "./templates/partials")
const signUpRouter = require("./routes/doctorsignuproutes")
require("./db/moongose")

//here we set all path//
app.set("view engine", "hbs")
app.set("views",pathViewDir)
// we will use middleware
app.use(express.static(pathDir))
app.use(express.json())
app.use(signUpRouter)
hbs.registerPartials(partials)

app.get("/login",(req, res) => {
    res.render("login")
app.get("/signup", (req, res)=>{
    res.render("signup")
})

})
app.listen(port, () => {
    console.log("server is created")
})