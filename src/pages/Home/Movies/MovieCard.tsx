import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Movie as MovieIcon, Star, Money, Timer, EmojiEvents } from '@mui/icons-material';
import { Movie } from '../../../redux/reducers/moviesReducer/moviesSlice';

type Props = {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          <MovieIcon /> {movie.name}
        </Typography>
        <Typography variant="body2" component="p">
          <Timer /> Runtime: {movie.runtimeInMinutes} minutes
        </Typography>
        <Typography variant="body2" component="p">
          <Money /> Budget: ${movie.budgetInMillions} million
        </Typography>
        <Typography variant="body2" component="p">
          <Money /> Box Office: ${movie.boxOfficeRevenueInMillions} million
        </Typography>
        <Typography variant="body2" component="p">
          <EmojiEvents /> Academy Award Nominations: {movie.academyAwardNominations}
        </Typography>
        <Typography variant="body2" component="p">
          <EmojiEvents /> Academy Award Wins: {movie.academyAwardWins}
        </Typography>
        <Typography variant="body2" component="p">
          <Star /> Rotten Tomatoes Score: {movie.rottenTomatoesScore}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;