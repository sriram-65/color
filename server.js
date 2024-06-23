const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
const hex_colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
    "#2980B9", "#1ABC9C", "#E74C3C", "#2ECC71", "#F39C12",
    "#D35400", "#C0392B", "#7F8C8D", "#9B59B6", "#16A085",
    "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#BDC3C7",
    "#34495E", "#E67E22", "#ECF0F1", "#95A5A6", "#FF69B4",
    "#FFC300", "#DAF7A6", "#581845", "#900C3F", "#C70039",
    "#FF5733", "#FFC300", "#DAF7A6", "#581845", "#900C3F",
    "#C70039", "#FF5733", "#FFBD33", "#DBFF33", "#75FF33",
    "#33FF57", "#33FFBD", "#33DBFF", "#3375FF", "#5733FF",
    "#BD33FF", "#FF33DB", "#FF3375", "#FF3333", "#FF5733",
    "#FF8C33", "#FFC133", "#FFD633", "#E6FF33", "#BDFF33",
    "#75FF33", "#33FF57", "#33FF8C", "#33FFC1", "#33FFE6",
    "#33DBFF", "#33BDFF", "#338CFF", "#3357FF", "#5733FF",
    "#234","#456"
]

app.get("/api" , (req,res)=>{
    const randomINdex = Math.floor(Math.random()*hex_colors.length)
    const colors = hex_colors[randomINdex]

    res.send(colors)
})

app.listen(3000 , ()=>{
    console.log("Server is Running")
})