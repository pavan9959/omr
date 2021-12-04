// import React, { Component } from "react";
// import { withStyles } from "@material-ui/styles";
// import { Props } from "react-select";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import ForgotPasswordController from "./ForgotPasswordController.web";
// import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";
// import logo1 from "../assets/logo1.svg";

// let styles: any = {
//   container: {
//     display: "flex",
//     // justifyContent:"space-between",
//     width: "100%",
//     height: "auto",
//   },
//   leftContainer: {
//     width: "60%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     // textAlign:"center"
//   },
//   rightContainer: {
//     width: "40%",
//     height: "auto",
//     // backgroundColor:"red"
//   },
//   button: {
//     width: "80%",
//     marginBottom: "5%",
//     height: "52px",
//   },
//   leftContainerForm: {
//     // marginLeft: "34%",
//     width: "50%",
//   },

//   textField: {
//     width: "80%",
//     marginBottom: "5%",
//     marginTop: "30%",
//   },
//   radio: {
//     display: "flex",
//     width: "80%",
//     justifyContent: "space-between",
//   },
//   rememberMe: {
//     marginTop: 0,
//   },
//   radiobtn: {
//     display: "flex",
//   },
//   forgotpassword: {
//     marginTop: 0,
//     color: "#4d4dc7",
//   },
//   Loginbutton: {
//     width: "80%",
//     marginBottom: "3%",
//     height: "52px",
//     backgroundColor: "#4d4dc7",
//     color: "white",
//   },
//   login: {
//     fontFamily: "sans-serif",
//   },
//   para: {
//     fontFamily: "sans-serif",
//     color: "dimgrey",
//   },
//   divider: {
//     display: "flex",
//     width: "80%",
//     marginBottom: "3%",
//   },
//   hr: {
//     width: "34%",
//     marginTop: "3%",
//     marginLeft: 0,
//     marginRight: 0,
//   },
//   dividerPara: {
//     marginTop: 0,
//     fontFamily: "sans-serif",
//   },
//   rememberPassword: {
//     ontFamily: "sans-serif",
//     display: "inline",
//   },
//   log: {
//     fontFamily: "sans-serif",
//     color: "#4d4dc7",
//     display: "inline",
//   },
//   img: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   para1: {
//     fontFamily: "sans-serif",
//     color: "dimgrey",
//     // marginTop: "28%",
//     // marginBottom:"0%"
//     position: "absolute",
//     bottom: 0,
//     // top:"90%"
//   },
//   logo1: {
//     marginTop: "2%",
//     width: "26%",
//   },
// };

// class ForgotPassword extends ForgotPasswordController {
//   constructor(props: any) {
//     super(props);
//   }
//   //   state = {
//   //     radio: false,
//   //   };

//   render() {
//     const responseGoogle = (response: any) => {
//       console.log(response);
//     };

//     const responseFacebook = (response: any) => {
//       console.log(response);
//     };

//     let { classes } = this.props;

//     return (
//       <div className={classes.container}>
//         {/* left div */}

//         <div className={classes.leftContainer}>
//           <div className={classes.leftContainerForm}>
//             <img src={logo1} className={classes.logo1} />
//             <h1 className={classes.login}>Forgotten Password</h1>
//             <p className={classes.para}>No problem we are here to help you</p>

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
//             </form>
//             <Button
//               variant="outlined"
//               className={classes.Loginbutton}
//               onClick={this.navigateTo}
//             >
//               Send OTP
//             </Button>
//             <br />
//             <p className={classes.rememberPassword}>Remember Password? </p>
//             <NavLink
//               to="#"
//               className={classes.log}
//               onClick={this.navigateToLogin}
//             >
//               Login
//             </NavLink>
//             <br />
//           </div>
//         </div>

//         {/* right div */}
//         <div className={classes.rightContainer} onClick={this.resetPass}>
//           <img src={logo} className={classes.img} />
//         </div>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(ForgotPassword);


import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Props } from "react-select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ForgotPasswordController from "./ForgotPasswordController.web";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.svg";

let styles: any = {
  container: {
    display: "flex",
    // justifyContent:"space-between",
    width: "100%",
    height: "auto",
    "@media screen and (max-width:1115px)": {
      height:"100%",
    },
    "@media screen and (max-hight:571px)": {
      height:"",
      border:"4px solid red"
    },
    },
    
  leftContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textAlign:"center"
    "@media screen and (max-width:1115px)": {
      height:"100%",
      // ?dono ka height hataneka
      // "@media screen and (max-height:531px)": {
      //   height:"100%"
      // },
    },
    
  },
  rightContainer: {
    width: "40%",
    height: "auto",
    // backgroundColor:"red"
    // "@media screen and (max-width:790px)": {
    //   display:"none"
    // },
    "@media screen and (max-width:1115px)": {
      height:"100%",
    },
    // "@media screen and (max-height:531px)": {
    //   height:"auto"
    // },
  },
  button: {
    width: "80%",
    marginBottom: "5%",
    height: "52px",
  },
  leftContainerForm: {
    // marginLeft: "34%",
    width: "50%",
  },

  textField: {
    width: "80%",
    marginBottom: "5%",
    marginTop: "20%",
    
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
    marginBottom: "5%",
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
    marginBottom: "5%",
  },
  hr: {
    width: "34%",
    marginTop: "5%",
    marginLeft: 0,
    marginRight: 0,
  },
  dividerPara: {
    marginTop: 0,
    fontFamily: "sans-serif",
  },
  rememberPassword: {
    ontFamily: "sans-serif",
    display: "inline",
  },
  log: {
    fontFamily: "sans-serif",
    color: "#4d4dc7",
    display: "inline",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  para1: {
    fontFamily: "sans-serif",
    color: "dimgrey",
    marginTop: "35%",
    // marginBottom:"0%"
    // position: "absolute",
    // bottom: 0,
    // top:"90%"
  },
  logo1: {
    marginTop: "5%",
    width: "26%",
  },
  
};

class ForgotPassword extends ForgotPasswordController {
  constructor(props: any) {
    super(props);
  }
  //   state = {
  //     radio: false,
  //   };

  render() { 
    let values={accountType: "email", email: this.state.emailValue }

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
            <h1 className={classes.login}>Forgotten Password</h1>
            <p className={classes.para}>No problem we are here to help you</p>

            <form>
              <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Enter Email Address"
                type="Email"
                autoComplete="current-password"
                value={this.state.emailValue}
                variant="outlined"
                onChange={(e)=>{this.setState({emailValue:e.target.value});console.log(this.state.emailValue)}}
              />
              <br />
            </form>
            <Button
              variant="outlined"
              className={classes.Loginbutton}
              onClick={()=>{this.goToOtpAfterEmailValidation(values)}}
            >
              Send OTP
            </Button>
            <br />
            <p className={classes.rememberPassword}>Remember Password? </p>
            <NavLink
              to="#"
              className={classes.log}
              onClick={this.navigateToLogin}
            >
              Login
            </NavLink>
            <br />
            <p className={classes.para1}>
              © 2020 yourbrand.com. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* right div */}
        <div className={classes.rightContainer} onClick={this.resetPass}>
          <img src={logo} className={classes.img} />
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(ForgotPassword);
