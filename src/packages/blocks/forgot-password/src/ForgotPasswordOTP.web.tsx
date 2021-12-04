// import React ,{Component} from "react"
// import { withStyles } from "@material-ui/styles";
// // import { Props } from "react-select";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import ForgotPasswordController from "../../forgot-password/src/ForgotPasswordController.web"
// import logo from "../assets/logo.png"
// import logo1 from "../assets/logo1.svg"


// let styles:any = {
//     container: {
//         display: "flex",
//         // justifyContent:"space-between",
//         width: "100%",
//         height: "auto",
//       },
//       leftContainer: {
//         width: "60%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         // textAlign:"center"
//       },
//       rightContainer: {
//         width: "40%",
//         height: "auto",
//         // backgroundColor:"red"
//       },
//     button: {
//       width: "80%",
//       marginBottom: "5%",
//       height: "52px",
//     },
//     leftContainerForm: {
//       // marginLeft: "34%",
//       width:"50%"
//     },
//     form:{
//       marginTop:"20%"
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
//     rememberPassword:{
//       ontFamily: "sans-serif",
//       display:"inline",
//     },
//     log:{
//       fontFamily: "sans-serif",
//       color: "#4d4dc7",
//       display:"inline"
//     },
//     img:{
//       width:"100%",
//       height:"100%",
//       objectFit:"cover"
//     },
//     para1:{
//       fontFamily: "sans-serif",
//       color:"dimgrey",
//       marginTop:"50%"
//     },
//     logo1:{
//       marginTop:"2%",
//       width:"26%"
//     }
//   };

//   interface props{
//       classes:any
//   }


// class OTPVerification extends ForgotPasswordController {

//   constructor(props:any){
//     super(props)
    
//   }

//     render(){
//         let {classes}=this.props

//         return <div className={classes.container}>
//         {/* left div */}

//         <div className={classes.leftContainer}  >
//           <div className={classes.leftContainerForm}>
//           <img src={logo1} className={classes.logo1} />

//             <h1 className={classes.login}>OTP Verification</h1>
//             {/* <p className={classes.para}>
//               We have sent OTP on 9989674902
//             </p> */}

//             <form className={classes.form} >
//               <TextField
//                 className={classes.textField}
//                 id="outlined-password-input"
//                 label="Confirm OTP"
//                 type="Password"
//                 autoComplete="current-password"
//                 variant="outlined"
//                 // onChange={()=>{}}
//               />
//             </form>
//             <Button variant="outlined" className={classes.Loginbutton}>
//               Set Password
//             </Button>
//             <p
// 			   className={classes.para1}>© 2020 yourbrand.com. All Rights Reserved.
// 		  </p>
//           </div>
//         </div> 

//         {/* right div */}
//         <div className={classes.rightContainer}>
//           <img src={logo} className={classes.img} />
//         </div>
//       </div>
//     }
// }

// export default withStyles(styles)(OTPVerification)