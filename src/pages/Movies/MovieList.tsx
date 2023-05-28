import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/type";
import { getAllMovies } from "../../redux/reducers/moviesReducer/actionReducer/getAllMovies";
import MovieCard from "./MovieCard";
import { Button, Grid } from "@mui/material";
import instance from "../../api/instance";

const movie = {
  _id: "5cd95395de30eff6ebccde5c",
  name: "The Fellowship of the Ring",
  runtimeInMinutes: 178,
  budgetInMillions: 93,
  boxOfficeRevenueInMillions: 871.5,
  academyAwardNominations: 13,
  academyAwardWins: 4,
  rottenTomatoesScore: 91,
};

export const MovieList = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  const getQuote = (id: string) => {
    instance.get(`/movie/${id}/quote`).then((res) => console.log(res.data));
  };

  useEffect(() => {
    dispatch(getAllMovies());
    instance.get(`/movie/${movie._id}`).then((res) => console.log(res.data));
  }, [dispatch]);

  return (
    <div>
      <h2>Movies</h2>
      <Grid container spacing={3} style={{ padding: "16px" }}>
        {movies.map((movie) => (
          <Grid key={movie._id} item xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
            <Button
              onClick={() => getQuote(movie._id)}
              variant="contained"
              size="large"
            >
              Quote
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
