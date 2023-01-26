import React from "react";
import "./movie.css";
import BaseApi from "./../../api/api";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const baseApi = new BaseApi();

export default class MovieGallary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { movie: [] };
  }

  componentDidMount() {
    baseApi.movieApi((result) => {
      this.setState({ movie: result.data.movies });
    });
  }

  render() {
    let movieList = this.state.movie;
    return (
      <div className="list">
        <div className="container">
          {movieList.map((movie) => (
            <div className="card" key={movie.id}>
              <MovieCard list={movie}></MovieCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function MovieCard(event) {
  return (
    <Card
      variant="outlined"
      sx={{ display: "inline-flex", height: "22rem", width: "100%" }}
    >
      <CardMedia
        component="img"
        src={event.list.poster_url}
        alt="Paella dish"
        sx={{ padding: "1em", objectFit: "contain", width: "200px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.list.title_en}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflowY: "hidden",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {event.list.synopsis_en}
        </Typography>
      </CardContent>
    </Card>
  );
}
