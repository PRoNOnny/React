import React from "react";
import Container from "@mui/material/Container";
import { Stack, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'darkcyan',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: 'white',
}));

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
          padding: "1rem 2rem",
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Stack spacing={1}>
          <Item>Movie</Item>
          <Item>Favorite</Item>
          <Item>Register</Item>
        </Stack>
      </Container>
    );
  }
}
