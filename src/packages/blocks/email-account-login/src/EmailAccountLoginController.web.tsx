// import { IBlock } from "../../../framework/src/IBlock";
// import { Message } from "../../../framework/src/Message";
// import { BlockComponent } from "../../../framework/src/BlockComponent";
// import MessageEnum, {
//   getName
// } from "../../../framework/src/Messages/MessageEnum";
// import { runEngine } from "../../../framework/src/RunEngine";
// import NavigationBlock from "../../../framework/src/Blocks/NavigationBlock";
// import alert from 'alert'

// // Customizable Area Start
// import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// // Customizable Area End

// export const configJSON = require("./config");

// const navigationBlock = new NavigationBlock();

// export interface Props {
//   navigation: any;
//   // Customizable Area Start
//   classes:any,

//   // Customizable Area End
// }

// interface S {
//   // Customizable Area Start
//   rememberMe:boolean
//   email:any | null
//   password:any | null
//   checkedRememberMe: boolean;
//   // Customizable Area End
// }

// interface SS {
//   // Customizable Area Start
//   // Customizable Area End
// }

// export default class EmailAccountLoginController extends BlockComponent<
//   Props,
//   S,
//   SS
// > {

//   // Customizable Area Start
//   apiEmailLoginCallId: string = "";
//   validationApiCallId: string = "";
//   emailReg: RegExp;
//   // Customizable Area End

//   constructor(props: Props) {
//     super(props);

//     // Customizable Area Start
//     this.state = {
//         rememberMe:false,
//         email:"",
//         password:"",
//         checkedRememberMe:false
//     };
//     // Customizable Area End

//   }

// //   const { navigation } = this.navigation;

//   async componentDidMount() {
//     // this.callGetValidationApi();
//     // this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
//     // Customizable Area Start
//     // Customizable Area End
//     // let localData:any=localStorage.getItem("userCredentials")
//     if(!localStorage.getItem("userCredentials")){
//        this.setState({email:""})
//        this.setState({password:""})
//     }
//     else{
//     let localData:any=localStorage.getItem("userCredentials")
//     let userCredentials:any=localData.slice(1,localData.length-1).split(",")
//     let useremail:any=userCredentials[0]
//     let password:any=userCredentials[1]

//     console.log(useremail)
//     this.setState({email:useremail})
//     this.setState({password:password})
//     }
//   }

//   navigateToForgotpassword=()=>{
//       this.props.navigation.navigate("ForgotPassword")
//   }

//   rememberUser(response:any){

//     if(response){
//       if(localStorage.getItem("userCredentials")){
//         localStorage.removeItem("userCredentials")
//         localStorage.setItem("userCredentials",`[${this.state.email},${this.state.password}]`)

//       }
//       else{
//         localStorage.setItem("userCredentials",`[${this.state.email},${this.state.password}]`)
//       }
//     }

//     this.setState({rememberMe:!this.state.rememberMe})
//   }

//   CustomCheckBoxProps = {
//     onChangeValue: (value: boolean) => {
//       this.setState({ checkedRememberMe: value });
//       this.CustomCheckBoxProps.isChecked = value;
//     },
//     isChecked: false
//   };

//   async receive(from: string, message: Message) {

//     // Customizable Area Start

//     if (getName(MessageEnum.ReciveUserCredentials) === message.id) {
//       const userName = message.getData(getName(MessageEnum.LoginUserName));

//       const password = message.getData(getName(MessageEnum.LoginPassword));

//       const countryCode = message.getData(
//         getName(MessageEnum.LoginCountryCode)
//       );

//       if (!countryCode && userName && password) {
//         this.setState({
//           email: userName,
//           password: password,
//           checkedRememberMe: true
//         });

//         //@ts-ignore
//         this.txtInputEmailProps.value = userName;

//         //@ts-ignore
//         this.txtInputPasswordProps.value = password;

//         this.CustomCheckBoxProps.isChecked = true;
//       }
//     } else if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
//       const apiRequestCallId = message.getData(
//         getName(MessageEnum.RestAPIResponceDataMessage)
//       );

//       var responseJson = message.getData(
//         getName(MessageEnum.RestAPIResponceSuccessMessage)
//       );

//       console.log(responseJson,"responsejson")

//       var errorReponse = message.getData(
//         getName(MessageEnum.RestAPIResponceErrorMessage)
//       );

//       if (apiRequestCallId != null) {
//         if (
//           apiRequestCallId === this.validationApiCallId &&
//           responseJson !== undefined
//         ) {
//           var arrayholder = responseJson.data;

//           if (arrayholder && arrayholder.length !== 0) {
//             let regexData = arrayholder[0];

//             if (regexData && regexData.email_validation_regexp) {
//               this.emailReg = new RegExp(regexData.email_validation_regexp);
//             }
//           }
//         }

//         if (apiRequestCallId === this.apiEmailLoginCallId) {
//           if (responseJson && responseJson.meta && responseJson.meta.token) {
//             runEngine.unSubscribeFromMessages(this, this.subScribedMessages);
//             this.saveLoggedInUserData(responseJson);
//             console.log(responseJson.data,"/////////////////////////")
//             this.sendLoginSuccessMessage();
//             // this.openInfoPage();
//           } else {
//             //Check Error Response
//             this.parseApiErrorResponse(responseJson);
//             this.sendLoginFailMessage();
//           }

//           this.parseApiCatchErrorResponse(errorReponse);
//           console.log(errorReponse,"/////////////////")
//         }
//       }
//     }
//     // Customizable Area End
//   }

//   NavigateToRegister=()=>{
//     this.props.navigation.navigate("EmailAccountRegistration")
//   }

//   doEmailLogIn(pass:any,em:any):boolean {
//       this.setState({email:em})
//       this.setState({email:pass})
//       let email=em
//       let password=pass
//     if (
//       this.state.email === null ||
//       this.state.email.length === 0
//     ) {
//       // this.showAlert("Error", configJSON.errorEmailNotValid);
//       alert('hey!', 'yad')
//       // this.props.navigation.navigate("EmailAccountLoginBlock")
//       return false;

//     }

//     if (this.state.password === null || this.state.password.length === 0) {
//       this.showAlert("Error", configJSON.errorPasswordNotValid);
//       return false;
//     }

//     const header = {
//       "Content-Type": configJSON.loginApiContentType
//     };

//     const attrs = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     const data = {
//       type: "email_account",
//       attributes: attrs
//     };

//     const httpBody = {
//       data: data
//     };

//     const requestMessage = new Message(
//       getName(MessageEnum.RestAPIRequestMessage)
//     );

//     this.apiEmailLoginCallId = requestMessage.messageId;
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIResponceEndPointMessage),
//       configJSON.loginAPiEndPoint
//     );

//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestHeaderMessage),
//       JSON.stringify(header)
//     );

//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestBodyMessage),
//       JSON.stringify(httpBody)
//     );

//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestMethodMessage),
//       configJSON.loginAPiMethod
//     );

//     console.log(requestMessage,"request")
//     runEngine.sendMessage(requestMessage.id, requestMessage);

//     return true;
//   }

//   sendLoginFailMessage() {
//     const msg: Message = new Message(getName(MessageEnum.LoginFaliureMessage));
//     this.send(msg);
//   }

//   sendLoginSuccessMessage() {
//     const msg: Message = new Message(getName(MessageEnum.LoginSuccessMessage));

//     msg.addData(getName(MessageEnum.LoginUserName), this.state.email);
//     msg.addData(getName(MessageEnum.CountyCodeDataMessage), null);
//     msg.addData(getName(MessageEnum.LoginPassword), this.state.password);
//     msg.addData(
//       getName(MessageEnum.LoginIsRememberMe),
//       this.state.checkedRememberMe
//     );

//     this.send(msg);
//   }

//   saveLoggedInUserData(responseJson: any) {
//     if (responseJson && responseJson.meta && responseJson.meta.token) {
//       const msg: Message = new Message(getName(MessageEnum.SessionSaveMessage));

//       msg.addData(
//         getName(MessageEnum.SessionResponseData),
//         JSON.stringify(responseJson)
//       );
//       msg.addData(
//         getName(MessageEnum.SessionResponseToken),
//         responseJson.meta.token
//       );

//       this.send(msg);
//     }
//   }

// }

import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import NavigationBlock from "../../../framework/src/Blocks/NavigationBlock";
import alert from "alert";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export const configJSON = require("./config");

const navigationBlock = new NavigationBlock();

export interface Props {
  navigation: any;
  // Customizable Area Start
  classes: any;

  // Customizable Area End
}

interface S {
  // Customizable Area Start
  rememberMe: boolean;
  password: string;
  email: string;
  enablePasswordField: boolean;
  checkedRememberMe: boolean;
  placeHolderEmail: string;
  placeHolderPassword: string;
  imgPasswordVisible: any;
  imgPasswordInVisible: any;
  labelHeader: string;
  btnTxtLogin: string;
  labelRememberMe: string;
  btnTxtSocialLogin: string;
  labelOr: string;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  // Customizable Area End
}

export default class EmailAccountLoginController extends BlockComponent<
  Props,
  S,
  SS
> {
  navigateToForgotpassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

  NavigateToRegister = () => {
    this.props.navigation.navigate("EmailAccountRegistration");
  };

  rememberUser(response: any) {
    if (response) {
      if (localStorage.getItem("userCredentials")) {
        localStorage.removeItem("userCredentials");
        localStorage.setItem(
          "userCredentials",
          `[${this.state.email},${this.state.password}]`
        );
      } else {
        localStorage.setItem(
          "userCredentials",
          `[${this.state.email},${this.state.password}]`
        );
      }
    }

    this.setState({ rememberMe: !this.state.rememberMe });
  }

  // Customizable Area Start
  apiEmailLoginCallId: string = "";
  validationApiCallId: string = "";
  emailReg: RegExp;
  labelTitle: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      rememberMe: false,
      email: "",
      password: "",
      enablePasswordField: true,
      checkedRememberMe: false,
      placeHolderEmail: configJSON.placeHolderEmail,
      placeHolderPassword: configJSON.placeHolderPassword,
      imgPasswordVisible: configJSON.imgPasswordVisible,
      imgPasswordInVisible: imgPasswordInVisible,
      labelHeader: configJSON.labelHeader,
      btnTxtLogin: configJSON.btnTxtLogin,
      labelRememberMe: configJSON.labelRememberMe,
      btnTxtSocialLogin: configJSON.btnTxtSocialLogin,
      labelOr: configJSON.labelOr,
    };

    this.emailReg = new RegExp("");
    this.labelTitle = configJSON.labelTitle;
    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.callGetValidationApi();
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    // Customizable Area Start
    // Customizable Area End
    if (!localStorage.getItem("userCredentials")) {
      this.setState({ email: "" });
      this.setState({ password: "" });
    } else {
      let localData: any = localStorage.getItem("userCredentials");
      let userCredentials: any = localData
        .slice(1, localData.length - 1)
        .split(",");
      let useremail: any = userCredentials[0];
      let password: any = userCredentials[1];
      this.setState({ email: useremail });
      this.setState({ password: password });
    }
  }

  // Customizable Area Start
  btnSocialLoginProps = {
    onPress: () => this.goToSocialLogin(),
  };

  btnEmailLogInProps = {
    color: "#6200EE",
    onPress: () => this.doEmailLogIn(),
  };

  btnPasswordShowHideProps = {
    onPress: () => {
      this.setState({ enablePasswordField: !this.state.enablePasswordField });
      this.txtInputPasswordProps.secureTextEntry = !this.state
        .enablePasswordField;
      this.btnPasswordShowHideImageProps.source = this.txtInputPasswordProps
        .secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  CustomCheckBoxProps = {
    onChangeValue: (value: boolean) => {
      this.setState({ checkedRememberMe: value });
      this.CustomCheckBoxProps.isChecked = value;
    },
    isChecked: false,
  };

  btnForgotPasswordProps = {
    onPress: () => this.goToForgotPassword(),
  };

  txtInputPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ password: text });

      //@ts-ignore
      this.txtInputPasswordProps.value = text;
    },
    secureTextEntry: true,
  };

  btnPasswordShowHideImageProps = {
    source: imgPasswordVisible,
  };

  btnRememberMeProps = {
    onPress: () => {
      this.setState({ checkedRememberMe: !this.CustomCheckBoxProps.isChecked });
      this.CustomCheckBoxProps.isChecked = !this.CustomCheckBoxProps.isChecked;
    },
  };

  txtInputEmailWebProps = {
    onChangeText: (text: string) => {
      this.setState({ email: text });

      //@ts-ignore
      this.txtInputEmailProps.value = text;
    },
  };

  txtInputEmailMobileProps = {
    ...this.txtInputEmailWebProps,
    autoCompleteType: "email",
    keyboardType: "email-address",
  };

  txtInputEmailProps = this.isPlatformWeb()
    ? this.txtInputEmailWebProps
    : this.txtInputEmailMobileProps;

  // Customizable Area End

  async receive(from: string, message: Message) {
    // Customizable Area Start

    if (getName(MessageEnum.ReciveUserCredentials) === message.id) {
      const userName = message.getData(getName(MessageEnum.LoginUserName));

      const password = message.getData(getName(MessageEnum.LoginPassword));

      const countryCode = message.getData(
        getName(MessageEnum.LoginCountryCode)
      );

      if (!countryCode && userName && password) {
        this.setState({
          email: userName,
          password: password,
          checkedRememberMe: true,
        });

        //@ts-ignore
        this.txtInputEmailProps.value = userName;

        //@ts-ignore
        this.txtInputPasswordProps.value = password;

        this.CustomCheckBoxProps.isChecked = true;
      }
    } else if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      console.log(responseJson, "top");

      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (apiRequestCallId != null) {
        if (
          apiRequestCallId === this.validationApiCallId &&
          responseJson !== undefined
        ) {
          var arrayholder = responseJson.data;

          if (arrayholder && arrayholder.length !== 0) {
            let regexData = arrayholder[0];

            if (regexData && regexData.email_validation_regexp) {
              this.emailReg = new RegExp(regexData.email_validation_regexp);
            }
          }
        }

        if (apiRequestCallId === this.apiEmailLoginCallId) {
          if (responseJson && responseJson.meta && responseJson.meta.token) {
            runEngine.unSubscribeFromMessages(this, this.subScribedMessages);
            this.saveLoggedInUserData(responseJson);
            this.sendLoginSuccessMessage();
            this.openInfoPage();
          } else {
            //Check Error Response
            this.parseApiErrorResponse(responseJson);
            this.sendLoginFailMessage();
            console.log(responseJson);
          }

          //  this.parseApiCatchErrorResponse(errorReponse);
          console.log(errorReponse, "//erresponse");
          console.log(responseJson);
        }
      }
    }
    // Customizable Area End
  }

  sendLoginFailMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginFaliureMessage));
    this.send(msg);
  }

  sendLoginSuccessMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginSuccessMessage));

    msg.addData(getName(MessageEnum.LoginUserName), this.state.email);
    msg.addData(getName(MessageEnum.CountyCodeDataMessage), null);
    msg.addData(getName(MessageEnum.LoginPassword), this.state.password);
    msg.addData(
      getName(MessageEnum.LoginIsRememberMe),
      this.state.checkedRememberMe
    );

    this.send(msg);
  }

  saveLoggedInUserData(responseJson: any) {
    if (responseJson && responseJson.meta && responseJson.meta.token) {
      const msg: Message = new Message(getName(MessageEnum.SessionSaveMessage));

      msg.addData(
        getName(MessageEnum.SessionResponseData),
        JSON.stringify(responseJson)
      );
      msg.addData(
        getName(MessageEnum.SessionResponseToken),
        responseJson.meta.token
      );

      this.send(msg);
    }
  }

  openInfoPage() {
    const msg: Message = new Message(getName(MessageEnum.AccoutLoginSuccess));

    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);

    this.send(msg);
  }

  goToForgotPassword() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationForgotPasswordMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    msg.addData(getName(MessageEnum.NavigationForgotPasswordPageInfo), "email");
    this.send(msg);
  }

  goToSocialLogin() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationSocialLogInMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  doEmailLogIn(): boolean {

    if (
      this.state.email === null ||
      this.state.email.length === 0 ||
      !this.emailReg.test(this.state.email)
    ) {
      this.showAlert("Error", configJSON.errorEmailNotValid);
      return false;
    }

    if (this.state.password === null || this.state.password.length === 0) {
      this.showAlert("Error", configJSON.errorPasswordNotValid);
      return false;
    }

    const header = {
      "Content-Type": configJSON.loginApiContentType,
    };

    const attrs = {
      email: this.state.email,
      password: this.state.password,
    };

    const data = {
      type: "email_account",
      attributes: attrs,
    };

    const httpBody = {
      data: data,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiEmailLoginCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.loginAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.loginAPiMethod
    );

    console.log(requestMessage,"req")

    runEngine.sendMessage(requestMessage.id, requestMessage);

    return true;
  }

  callGetValidationApi() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType,
    };

    const getValidationsMsg = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationApiCallId = getValidationsMsg.messageId;

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.urlGetValidations
    );

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(getValidationsMsg.id, getValidationsMsg);
  }
}
