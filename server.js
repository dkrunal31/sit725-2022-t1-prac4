var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpg",
        link: "About Kuala 2",
        description: "Demo description about kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpg",
        link: "About Kuala 3",
        description: "Demo description about kitten 3"
    }
]

app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})
