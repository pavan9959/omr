import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Props } from "react-select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Divider from "@material-ui/core/Divider";
import EmailAccountLoginController from "./EmailAccountLoginController.web";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.svg"
import { NavLink } from "react-router-dom";

let styles: any = {
  container: {
    display: "flex",
    // justifyContent:"space-between",
    width: "100%",
    height: "auto",
  },
  leftContainer: {
    width: "60%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textAlign:"center"
  },
  rightContainer: {
    width: "40%",
    height: "auto",
    // backgroundColor:"red"
  },
  button: {
    width: "100%",
    marginBottom: "5%",
    height: "52px",
  },
  leftContainerForm: {
    // marginLeft: "34%",
  },

  textField: {
    width: "100%",
    marginBottom: "5%",
  },
  radio: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  rememberMe: {
    marginTop: 0,
  },
  radiobtn: {
    display: "flex",
  },
  forgotpassword: {
    marginTop: 0,
    color: "#4d4dc7",
  },
  Loginbutton: {
    width: "100%",
    marginBottom: "3%",
    height: "52px",
    backgroundColor: "#4d4dc7",
    color: "white",
    paddingRight: "0",
    paddingLeft: "0",
  },
  login: {
    fontFamily: "sans-serif",
  },
  para: {
    fontFamily: "sans-serif",
    color: "dimgrey",
  },
  divider: {
    display: "flex",
    width: "100%",
    marginBottom: "3%",
  },
  hr: {
    width: "34%",
    marginTop: "3%",
    marginLeft: 0,
    marginRight: 0,
  },
  dividerPara: {
    marginTop: 0,
    fontFamily: "sans-serif",
    color: "dimgrey",
  },
  notReg: {
    fontFamily: "sans-serif",
    display: "inline",
  },
  createAcc: {
    fontFamily: "sans-serif",
    color: "#4d4dc7",
    display: "inline",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit:"cover"
  },
  para1: {
    fontFamily: "sans-serif",
    color: "dimgrey",
    marginTop: "5%",
    // marginBottom: "0%",
    // position:"absolute",
    // top:"92%"
  },
  logo1:{
    marginTop:"12%",
    width:"26%"
  }
};

class EmailAccountLoginBlock extends EmailAccountLoginController {
  constructor(props: any) {
    super(props);
  }
  render() {
    const responseGoogle = (response: any) => {
      console.log(response);
    };

    // const responseFacebook = (response: any) => {
    //   console.log(response);
    // };

    // const responseFacebook = (response:any) => {
    //   console.log(response);
    //   var res = response.profileObj;
    //   console.log(res);
    //   debugger;
    //   // this.signup(response);
    // }

    let { classes } = this.props;

    return (
      <div className={classes.container}>
        {/* left div */}

        <div className={classes.leftContainer}>
          
          <div className={classes.leftContainerForm}>
          <img src={logo1} className={classes.logo1}/>
            <h1 className={classes.login}>Login</h1>
            <p className={classes.para}>
              See your growth and get consulting support
            </p>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={classes.button}
            />
            {/* <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      /> */}
            {/* <Button variant="outlined" className={classes.button} >Sign in with google</Button><br/> */}
            {/* <Button variant="outlined" className={classes.button}>
              Sign in with facebook
            </Button> */}

            <div className={classes.divider}>
              <Divider variant="middle" className={classes.hr} />
              <p className={classes.dividerPara}>or sign in with</p>
              <Divider variant="middle" className={classes.hr} />
            </div>

            <form >
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Email Address"
                type="Email"
                autoComplete="current-password"
                value={this.state.email}
                variant="outlined"
                onChange={(e: any) => {
                  this.setState({ email: e.target.value });console.log(this.state.email);
                }}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.password}
                onChange={(e: any) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </form>
            <div className={classes.radio}>
              <div className={classes.radiobtn}>
                <input
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={()=>{this.rememberUser(!this.state.rememberMe)}}
                />
                <p className={classes.rememberMe}> Remember me</p>
              </div>
              <>
                <NavLink
                  to="#"
                  className={classes.forgotpassword}
                  onClick={this.navigateToForgotpassword}
                >
                  Forgot Password?
                </NavLink>
              </>
            </div>
            <Button
              variant="outlined"
              className={classes.Loginbutton}
              onClick={() => {
                this.doEmailLogIn(this.state.password, this.state.email);
              }}
            >
              Login
            </Button>
            <br />
            <p className={classes.notReg}>Not registered yet? </p>
            <NavLink
              to="#"
              className={classes.createAcc}
              onClick={this.NavigateToRegister}
            >
              Create an Account
            </NavLink>
            <br />
            <p className={classes.para1}>
              © 2020 yourbrand.com. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* right div */}
        <div className={classes.rightContainer}>
          <img src={logo} className={classes.img} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EmailAccountLoginBlock);

{
  /* <NavLink to="/about">About</NavLink> */
}
