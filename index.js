const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello Express')
});
// We can add multiple routes
app.get('/movies', (req, res) => {
    res.send('It be a movie!')
});

app.get('/movies/:genre/yes', (req, res) => {
    console.log(req.params.genre)
    res.send('It be a dynamic route')
});

app.get('/shows', (req, res) => {
    // Adding search strings
    // EX sort?asc&page=16
    console.log(req.query.sort)
    console.log(req.query.page)
})

app.get('/info', (req, res)=>{
    //Sending JSON data, sending Arrays
    // let movie = { title: "Lord of the Rings", year: 2014}
    // res.json(movie)
    let movies =  [{ title: "Lord of the Rings", year: 2014},
                    {title: "Spiderman", year: 2018}
                ]
                res.json(movies)
});

app.listen(PORT, () => {
`Listening on ${PORT}`
});