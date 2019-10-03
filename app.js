// const express = require('express')
// const app = express()
// const path = require('path')
// const fetch = require('node-fetch')
// const PORT = process.env.PORT || 5000; // process.env accesses heroku's environment variables

// app.use(express.static('public'))

// app.get('/', (request, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

// create route to get single book by its isbn
// app.get('/earth', (request, response) => {
//   // make api call using fetch
//   fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-09-01&minmagnitude=5`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body[0])
//       console.log(results)   // logs to server
//       response.send(results) // sends to frontend
//     });
// });

// create a search route
// app.get('/search', (request, response) => {
//   fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)
//       response.send(results)
//     });
// });

// app.listen(PORT, () => {
//   console.log(__dirname);
//   console.log(`listening on ${PORT}`)
// })