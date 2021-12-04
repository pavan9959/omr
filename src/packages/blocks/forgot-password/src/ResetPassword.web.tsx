import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import { Props } from "react-select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { ResetPasswordControll } from "./ResetPasswordController.web";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.svg"
import ForgotPasswordController, { Props } from "./ForgotPasswordController.web";

let styles:any = {
  container: {
      display: "flex",
      // justifyContent:"space-between",
      width: "100%",
      height: "auto",
      "@media screen and (max-width:1115px)": {
          height:"100%",
        },
        "@media (orientation:landscape)":{
            height:"auto"
        },
        "@media (min-height:571px)":{
            height:"100%"
        },
        "@media (orientation:portrait)":{
            display:"block",
            height:"auto"
        },
      //   "@media (min-height:500)":{
      //       height:"auto"
      //   }
    },
    leftContainer: {
      width: "60%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "@media (orientation:portrait)":{
          width:"100%"
      }
      // textAlign:"center"
      
    },
    rightContainer: {
      width: "40%",
      height: "auto",
      "@media (orientation:portrait)":{
          display:"none"
      }
      // backgroundColor:"red"
    },
  button: {
    width: "80%",
    marginBottom: "5%",
    height: "52px",
  },
  leftContainerForm: {
    // marginLeft: "34%",
    width:"50%",
    "@media (orientation:portrait)":{
      width:"62%"       
  }
  },
  form:{
    marginTop:"20%"
    
  },
  
  textField: {
    width: "80%",
    marginBottom: "5%",
  },
  radio: {
    display: "flex",
    width: "80%",
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
    width: "80%",
    marginBottom: "3%",
    height: "52px",
    backgroundColor: "#4d4dc7",
    color: "white",
  },
  login: {
    fontFamily: "sans-serif",
  },
  para: {
    fontFamily: "sans-serif",
  },
  divider: {
    display: "flex",
    width: "80%",
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
  },
  rememberPassword:{
    ontFamily: "sans-serif",
    display:"inline",
  },
  log:{
    fontFamily: "sans-serif",
    color: "#4d4dc7",
    display:"inline"
  },
  img:{
    width:"100%",
    height:"100%",
    objectFit:"cover"
  },
  para1:{
    fontFamily: "sans-serif",
    color:"dimgrey",
    marginTop:"50%",
    "@media (orientation:portrait)":{
        position:"absolute",
        bottom:0
  },
  "@media (orientation:landscape)":{
      marginTop:"9%"
  },
  "@media (max-height:600px)":{
      position:"relative",
      // marginTop:"0%"
      // color:"red"
  },
  },
  logo1:{
      marginTop:"5%"
  },
  changeEmail:{
      display:"flex"
  }
};

class ResetPassword extends ForgotPasswordController {
  constructor(props: any) {
    super(props);
  }

  render() {
    let { classes } = this.props;
    let value:any={newPassword:this.state.newPassword,confirmPassword:this.state.confirmPassword}

    return (
      <div className={classes.container}>
        {/* left div */}

        <div className={classes.leftContainer}>
          <div className={classes.leftContainerForm}>
          <img src={logo1} className={classes.logo1} />
            <h1 className={classes.login}>Reset Password</h1>
            <p className={classes.para}>No problem we are here to help you</p>

            <form className={classes.form}>
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="New Password"
                type="Password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.newPassword}
                onChange={(e) => {
                  this.setState({ newPassword: e.target.value });
                  console.log(this.state.newPassword);
                }}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Confirm Password"
                type="Password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.confirmPassword}
                onChange={(e) => {
                  this.setState({ confirmPassword: e.target.value });
                  console.log(this.state.confirmPassword);
                }}
              />
            </form>
            <Button variant="outlined" className={classes.Loginbutton} onClick={()=>{this.goToConfirmationAfterPasswordChange(value)}} >
              Set Password
            </Button>
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

export default withStyles(styles)(ResetPassword);
