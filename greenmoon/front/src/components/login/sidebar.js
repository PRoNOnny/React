import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container
        sx={{
          width: "15rem",
          padding: "2rem 0px 2rem 2rem !important",
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "3rem",
            color: "gray",
            fontWeight:"600",
            fontSize:"1rem",
            "&:hover": {
              color: "black",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Movies
        </Box>
      </Container>
    );
  }
}
