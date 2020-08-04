import React, { useEffect, useState } from 'react';

const MovieDetails = ({ match }) => {
  const [details, setDetails] = useState('');
  const { id } = match.params;

  useEffect(() => {
    fetch(`/api/movie/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, []);

  console.log(details);
  return (
    <div>
      <h1>{details.Title}</h1>
      {details.Actors}
      <img src={details.Poster} alt="moviePoster" />
    </div>
  );
};

export default MovieDetails;
