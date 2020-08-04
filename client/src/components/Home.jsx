import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/movies?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <FormControl type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Search Movies</Button>
        </Form.Group>
      </Form>
      {movies.map((movie, i) => {
        return <MovieCard movie={movie} key={i} />;
      })}
    </Container>
  );
};

export default Home;
