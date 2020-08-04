if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/movies', (request, response) => {
  const { s } = request.query;
  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${s}&page=1`
    )
    .then((data) => {
      return response.json(data.data);
    });
});

app.get('/api/movie/:id', (req, res) => {
  const { id } = req.params;
  axios
    .get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`)
    .then((data) => {
      return res.json(data.data);
    });
});
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
