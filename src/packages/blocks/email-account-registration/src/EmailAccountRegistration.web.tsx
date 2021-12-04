// import React, { Component } from "react";
// import { withStyles } from "@material-ui/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import Divider from "@material-ui/core/Divider";
// import { boolean } from "yup";
// import EmailAccountRegistrationController from "./EmailAccountRegistrationController.web"
// // import { Props } from "react-select";

// let styles:any = {
//     container: {
//       display: "flex",
//       // justifyContent:"space-between",
//       width: "100%",
//       height: "auto",
//     },
//     leftContainer: {
//         width: "60%",
//         height:"100%",
//         display:"flex",
//         alignItems:"center",
//         justifyContent: "center"
//         // textAlign:"center"
//       },
//     button: {
//       width: "80%",
//       marginBottom: "5%",
//       height: "52px",
//     },
//     leftContainerForm: {
//     //   marginLeft: "34%",
//         // position:"absolute",
//         // left:"20%"
//     },
//     rightContainer: {
//       width: "40%",
//       // backgroundColor:"red"
//     },
//     textField: {
//       width: "80%",
//       marginBottom: "5%",
//     },
//     radio: {
//       display: "flex",
//       width: "80%",
//       justifyContent: "space-between",
//     },
//     rememberMe: {
//       marginTop: 0,
//     },
//     radiobtn: {
//       display: "flex",
//     },
//     forgotpassword: {
//       marginTop: 0,
//       color: "#4d4dc7",
//     },
//     Loginbutton: {
//       width: "80%",
//       marginBottom: "3%",
//       height: "52px",
//       backgroundColor: "#4d4dc7",
//       color: "white",
//     },
//     login: {
//       fontFamily: "sans-serif",
//     },
//     para: {
//       fontFamily: "sans-serif",
//     },
//     divider: {
//       display: "flex",
//       width: "80%",
//       marginBottom: "3%",
//     },
//     hr: {
//       width: "34%",
//       marginTop: "3%",
//       marginLeft: 0,
//       marginRight: 0,
//     },
//     dividerPara: {
//       marginTop: 0,
//       fontFamily: "sans-serif",
//     },
//     alreadyHaveacc:{
//       ontFamily: "sans-serif",
//       display:"inline",
//     },
//     log:{
//       fontFamily: "sans-serif",
//       color: "#4d4dc7",
//       display:"inline"
//     },
//     checkbox:{
//       display:"flex"
//     }
//   };

// // interface Props {
// //     classes:any

// // }

// class EmailAccountRegistrationWeb extends EmailAccountRegistrationController {

//     // state = {
//     //     radio:false
//     // }

//     render(){

//         const responseGoogle = (response: any) => {
//             console.log(response);
//           };

//           const responseFacebook = (response: any) => {
//             console.log(response);
//           };

//         let {classes} =this.props

//         return<div className={classes.container}>
//         {/* left div */}
//         <div className={classes.leftContainer}>
//           <div className={classes.leftContainerForm}>
//               {/* <div style={{width:"79%",paddingLeft:"19%"}} >
//                   <div> */}
//             <img />
//             <h1 className={classes.login}>Register Now</h1>
//             <p className={classes.para}>
//               The best investement on earth is earth
//             </p>
//             <GoogleLogin
//               clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//               buttonText="Sign up with Google"
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}
//               cookiePolicy={"single_host_origin"}
//               className={classes.button}
//             />
//             {/* <Button variant="outlined" className={classes.button} >Sign in with google</Button><br/> */}
//             <Button variant="outlined" className={classes.button}>
//               Sign up with facebook
//             </Button>

//             <div className={classes.divider}>
//               <Divider variant="middle" className={classes.hr} />
//               <p className={classes.dividerPara}>or sign up with</p>
//               <Divider variant="middle" className={classes.hr} />
//             </div>

//             <form>
//               <TextField
//                 className={classes.textField}
//                 id="outlined-password-input"
//                 label="Email Address"
//                 type="Email"
//                 autoComplete="current-password"
//                 variant="outlined"
//               />
//               <br />
//               <TextField
//                 className={classes.textField}
//                 id="outlined-password-input"
//                 label="Mobile No."
//                 type="phone"
//                 autoComplete="current-password"
//                 variant="outlined"
//               />
//               <br />
//               <TextField
//                 className={classes.textField}
//                 id="outlined-password-input"
//                 label="Password"
//                 type="password"
//                 autoComplete="current-password"
//                 variant="outlined"
//               />
//               <TextField
//                 className={classes.textField}
//                 id="outlined-password-input"
//                 label="Confirm Password"
//                 type="Password"
//                 autoComplete="current-password"
//                 variant="outlined"
//               />
//               <br />
//             </form>
//             {/* <div className={classes.radio}>
//               <div className={classes.radiobtn}>
//                 <input type="radio" checked={this.state.radio} />
//                 <p className={classes.rememberMe}>Remember me</p>
//               </div>
//               <>
//                 <p className={classes.forgotpassword}>Forgot Password?</p>
//               </>
//             </div> */}
//             <div className={classes.checkbox} >
//             <input type="checkbox" />
//             <p className={classes.rememberMe}>Stay logged in</p><br/>
//             </div>
//             <Button variant="outlined" className={classes.Loginbutton}>
//               Sign Up
//             </Button>
//             <br />
//             <p className={classes.alreadyHaveacc} >Already have an account?</p><p className={classes.log} onClick={this.navigateToLogin} >Login</p>
//           </div>
//         </div>

//         {/* right div */}
//         <div className={classes.rightContainer}>
//           right
//           <img />
//         </div>
//       </div>
//     }
// }
// export default withStyles(styles)(EmailAccountRegistrationWeb)

import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Divider from "@material-ui/core/Divider";
import { boolean } from "yup";
import EmailAccountRegistrationController from "./EmailAccountRegistrationController.web";
// import { Props } from "react-select";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.svg"

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
    width: "80%",
    marginBottom: "5%",
    height: "52px",
  },
  leftContainerForm: {
    // marginLeft: "34%",
    width:"50%"
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
    color: "dimgrey",
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
    marginBottom: "0%",
  },
  logo1:{
    marginTop:"2%",
    width:"26%"
  }
};



class EmailAccountRegistrationWeb extends EmailAccountRegistrationController {
  // state = {
  //     radio:false
  // }

  render() {
    const responseGoogle = (response: any) => {
      console.log(response);
    };

    const responseFacebook = (response: any) => {
      console.log(response);
    };

    let { classes } = this.props;

    return (
      <div className={classes.container}>
        {/* left div */}

        <div className={classes.leftContainer}>
          <div className={classes.leftContainerForm}>
            <img src={logo1} className={classes.logo1} />
            <h1 className={classes.login}>Register Now</h1>
            <p className={classes.para}>
              The best investement on earth is earth
            </p>
            {/* <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={classes.button}
            /> */}
            {/* <Button variant="outlined" className={classes.button} >Sign in with google</Button><br/> */}
            {/* <Button variant="outlined" className={classes.button}>
              Sign in with facebook
            </Button> */}

            {/* <div className={classes.divider}>
              <Divider variant="middle" className={classes.hr} />
              <p className={classes.dividerPara}>or sign up with</p>
              <Divider variant="middle" className={classes.hr} />
            </div> */}

            <form>
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="First Name"
                type="Name"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.firstName}
                onChange={(e: any) => {
                  this.setState({ firstName: e.target.value });
                  console.log(this.state.email);
                  console.log(this.state.firstName);
                }}
                // onChange={(e:any)=>{this.setState({email:e.target.value})}}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Last Name"
                type="Name"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.lastName}
                onChange={(e: any) => {
                  this.setState({ lastName: e.target.value });
                  console.log(this.state.email);
                  console.log(this.state.lastName);
                }}
                // onChange={(e:any)=>{this.setState({email:e.target.value})}}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Email Address"
                type="Email"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.email}
                onChange={(e: any) => {
                  this.setState({ email: e.target.value });
                  console.log(this.state.email);
                }}
                // onChange={(e:any)=>{this.setState({email:e.target.value})}}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Enter Country Code"
                type="Number"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.countryCodeSelected}
                onChange={(e: any) => {
                  this.setState({ countryCodeSelected: e.target.value });
                  console.log(this.state.countryCodeSelected);
                }}
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Mobile No."
                type="Number"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.phone}
                onChange={(e: any) => {
                  this.setState({ phone: e.target.value });
                  console.log(this.state.phone);
                }}
              />
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.password}
                onChange={(e: any) => {
                  this.setState({ password: e.target.value });
                  console.log(this.state.password);
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
                value={this.state.reTypePassword}
                onChange={(e: any) => {
                  this.setState({ reTypePassword: e.target.value });
                  console.log(this.state.reTypePassword);
                }}
              />
              <br />
            </form>
            <div className={classes.radio}>
              <div className={classes.radiobtn}>
                <input type="checkbox" />
                <p className={classes.rememberMe}> Stay logged in</p>
              </div>
            </div>
            <Button
              variant="outlined"
              className={classes.Loginbutton}
              onClick={() => {
                this.createAccount();
              }}
            >
              Sign Up
            </Button>
            <br />
            {/* <p className={classes.notReg} >Already have an account?</p><p className={classes.createAcc} onClick={this.navigateToLogin} >Login</p> */}
            <p className={classes.notReg}>Already have an account? </p>
            <NavLink
              className={classes.createAcc}
              to="#"
              onClick={this.navigateToLogin}
            >
              Login
            </NavLink>
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
export default withStyles(styles)(EmailAccountRegistrationWeb);
