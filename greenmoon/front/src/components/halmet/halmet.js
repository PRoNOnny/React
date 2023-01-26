import "./halmet.css";
import LoginControl from "../login/login";
import MovieGallary from "../movie/movie";
import Sidebar from "./../login/sidebar";
import Grid from '@mui/material/Grid'; // Grid version 1

export default function Halmet() {
  return (
    <>
      <Navbar></Navbar>
      <Grid container sx={{height:'90vh'}}>
        <Grid item xs="auto">
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs>
          <MovieGallary></MovieGallary>
        </Grid>
      </Grid>
    </>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <span className="title">CINEMO</span>
      <div className="right-container">
        <LoginControl getUserInfo={storeUserInfo}></LoginControl>
      </div>
    </div>
  );
}

function storeUserInfo(event) {
  console.log(event);
}
