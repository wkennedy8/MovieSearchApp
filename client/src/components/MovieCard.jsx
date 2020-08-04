import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <div className="d-flex">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
          <Button variant="primary" onClick={() => handleClick(movie.imdbID)}>
            See more details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
