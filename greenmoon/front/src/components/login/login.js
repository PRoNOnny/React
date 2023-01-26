import React from "react";
import "./login.css";
import BaseApi from "./../../api/api";
const baseApi = new BaseApi();
import Button from "@mui/material/Button";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, name: "" };
  }

  handleLoginClick(event) {
    event.preventDefault();

    baseApi.loginApi(
      event.target.username.value,
      event.target.password.value,
      (result) => {
        if (result.success) {
          this.setState({ isLoggedIn: result.success, name: result.data.name });
          // eslint-disable-next-line react/prop-types
          this.props.getUserInfo(result.data);
        } else {
          alert("wrong");
        }
        event.target.reset();
      }
    );
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let rightForm;

    if (isLoggedIn) {
      rightForm = (
        <div className="form">
          <span className="text">{this.state.name}</span>
          <span className="material-icons">settings</span>
          <Button
            variant="contained"
            size="small"
            type="submit"
            onClick={this.handleLogoutClick}
          >
            Logout
          </Button>
        </div>
      );
    } else {
      rightForm = (
        <>
          <form className="form" onSubmit={this.handleLoginClick}>
            <span className="text">Username</span>
            <input className="input" name="username" type="text"></input>
            <span className="text">Password</span>
            <input className="input" name="password" type="password"></input>
            <Button variant="contained" type="submit" size="small">
              Login
            </Button>
          </form>
        </>
      );
    }

    return <div style={{ width: "35vw" }}>{rightForm}</div>;
  }
}
