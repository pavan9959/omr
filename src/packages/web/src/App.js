// App.js - WEB
import React, { Component } from "react";
import { View } from "react-native";
import firebase from 'firebase'
import { connect } from 'react-firebase'

import WebRoutesGenerator from "../../components/src/NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import HomeScreen from "../../components/src/HomeScreen";
import TopNav from "../../components/src/TopNav";

import InfoPage from '../../blocks/info-page/src/InfoPageBlock'
import AlertBlock from '../../blocks/alert/src/AlertBlock.web'
import Contactus from "../../blocks/contactus/src/Contactus";
import AddContactus from "../../blocks/contactus/src/AddContactus";
import DetailedSummaryReportsGraph from "../../blocks/DetailedSummaryReportsGraph/src/DetailedSummaryReportsGraph";
import Customform from "../../blocks/customform/src/Customform";
import ForgotPassword from "../../blocks/forgot-password/src/ForgotPassword.web";
import ForgotPasswordOTP from "../../blocks/forgot-password/src/ForgotPasswordOTP.web";
import NewPassword from "../../blocks/forgot-password/src/NewPassword";
import Maps from "../../blocks/Maps/src/Maps";
import Categoriessubcategories from "../../blocks/categoriessubcategories/src/Categoriessubcategories";
import FileAttachment from "../../blocks/FileAttachment/src/FileAttachment";
import Reviews from "../../blocks/reviews/src/Reviews";
import AddReview from "../../blocks/reviews/src/AddReview";
import ComparabletheMarketApproach2 from "../../blocks/ComparabletheMarketApproach2/src/ComparabletheMarketApproach2";
import CountryCodeSelector from "../../blocks/country-code-selector/src/CountryCodeSelector";
import PhotoLibrary3 from "../../blocks/PhotoLibrary3/src/PhotoLibrary3";
import LiveStreaming from "../../blocks/LiveStreaming/src/LiveStreaming";
import DubaiLandDepartmentdldApi2 from "../../blocks/DubaiLandDepartmentdldApi2/src/DubaiLandDepartmentdldApi2";
import SummaryReportTemplateWithoutAi3 from "../../blocks/SummaryReportTemplateWithoutAi3/src/SummaryReportTemplateWithoutAi3";
import ContentManagement from "../../blocks/ContentManagement/src/ContentManagement";
import TermsAndConditions from "../../blocks/TermsAndConditions/src/TermsAndConditions";
import UserGroups from "../../blocks/UserGroups/src/UserGroups";
import SaveAsPdf from "../../blocks/SaveAsPdf/src/SaveAsPdf";
import EmailAccountLoginBlock from "../../blocks/email-account-login/src/EmailAccountLoginBlock.web";
import GeolocationReporting from "../../blocks/GeolocationReporting/src/GeolocationReporting";
import Chatbot6 from "../../blocks/Chatbot6/src/Chatbot6";
import EmailAccountRegistrationWeb from "../../blocks/email-account-registration/src/EmailAccountRegistration.web";
import DataImportexportcsv from "../../blocks/DataImportexportcsv/src/DataImportexportcsv";
import DocumentOpener from "../../blocks/DocumentOpener/src/DocumentOpener";
import Splashscreen from "../../blocks/splashscreen/src/Splashscreen";
import PaymentIntegration5 from "../../blocks/PaymentIntegration5/src/PaymentIntegration5";
import ComparisonPage2 from "../../blocks/ComparisonPage2/src/ComparisonPage2";
import Dashboard from "../../blocks/dashboard/src/Dashboard";
import PrivateChat from "../../blocks/PrivateChat/src/PrivateChat";
import CarouselDisplay from "../../blocks/CarouselDisplay/src/CarouselDisplay";
import Onboardingguide from "../../blocks/onboardingguide/src/Onboardingguide";
import Settings2 from "../../blocks/Settings2/src/Settings2";
import InvestmentDiscountedCashFlowdcfTheIncomeApproach2 from "../../blocks/InvestmentDiscountedCashFlowdcfTheIncomeApproach2/src/InvestmentDiscountedCashFlowdcfTheIncomeApproach2";
import InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2 from "../../blocks/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2/src/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2";
import Pushnotifications from "../../blocks/pushnotifications/src/Pushnotifications";
import VisualAnalytics from "../../blocks/VisualAnalytics/src/VisualAnalytics";
import LanguageSupport from "../../blocks/LanguageSupport/src/LanguageSupport";
import Trending from "../../blocks/Trending/src/Trending";
import PhoneNumberInput from "../../blocks/mobile-account-registration/src/PhoneNumberInput";
import AdditionalDetailForm from "../../blocks/mobile-account-registration/src/AdditionalDetailForm";
import EmailNotifications from "../../blocks/EmailNotifications/src/EmailNotifications";
import TwilioIntegration2 from "../../blocks/TwilioIntegration2/src/TwilioIntegration2";
import ProductDescription from "../../blocks/ProductDescription/src/ProductDescription";
import RolesPermissions2 from "../../blocks/RolesPermissions2/src/RolesPermissions2";
import HousePricesArViewer from "../../blocks/HousePricesArViewer/src/HousePricesArViewer";
import FormulaExecution2 from "../../blocks/FormulaExecution2/src/FormulaExecution2";
import AdminConsole3 from "../../blocks/AdminConsole3/src/AdminConsole3";
import Interactivefaqs from "../../blocks/interactivefaqs/src/Interactivefaqs";
import AddInteractivefaqs from "../../blocks/interactivefaqs/src/AddInteractivefaqs";
import ResidualApproachtheIncomeApproach2 from "../../blocks/ResidualApproachtheIncomeApproach2/src/ResidualApproachtheIncomeApproach2";
import Analytics3 from "../../blocks/Analytics3/src/Analytics3";
import CameraAccess from "../../blocks/CameraAccess/src/CameraAccess";
import ValuationCertificateReport3 from "../../blocks/ValuationCertificateReport3/src/ValuationCertificateReport3";
import SocialMediaAccountLoginScreen from "../../blocks/social-media-account-login/src/SocialMediaAccountLoginScreen";
import Wishlist2 from "../../blocks/Wishlist2/src/Wishlist2";
import CustomisableUserProfiles from "../../blocks/CustomisableUserProfiles/src/CustomisableUserProfiles";
import OTPInputAuth from "../../blocks/otp-input-confirmation/src/OTPInputAuth.web";
import ValuationEngine2 from "../../blocks/ValuationEngine2/src/ValuationEngine2";
import BlogPostsManagement from "../../blocks/BlogPostsManagement/src/BlogPostsManagement";
import DepreciatedReplacementCostcontractors2 from "../../blocks/DepreciatedReplacementCostcontractors2/src/DepreciatedReplacementCostcontractors2";
import DetailedSummaryReportWithoutAi3 from "../../blocks/DetailedSummaryReportWithoutAi3/src/DetailedSummaryReportWithoutAi3";
import NavigationMenu from "../../blocks/NavigationMenu/src/NavigationMenu";
import FormApprovalWorkflow from "../../blocks/FormApprovalWorkflow/src/FormApprovalWorkflow";
import SocialMediaAccountRegistrationScreen from "../../blocks/social-media-account-registration/src/SocialMediaAccountRegistrationScreen";
import Notificationsettings from "../../blocks/notificationsettings/src/Notificationsettings";
import Share from "../../blocks/Share/src/Share";
import SubscriptionBilling from "../../blocks/SubscriptionBilling/src/SubscriptionBilling";
import AdvancedSearch from "../../blocks/AdvancedSearch/src/AdvancedSearch";
import MobileAccountLoginBlock from "../../blocks/mobile-account-login/src/MobileAccountLoginBlock";
import News12 from "../../blocks/News12/src/News12";
import DubaipulseIntegration2 from "../../blocks/DubaipulseIntegration2/src/DubaipulseIntegration2";
import ResetPassword from "../../blocks/forgot-password/src/ResetPassword.web"



const routeMap = {
Contactus:{
 component:Contactus,
path:"/Contactus"},
AddContactus:{
 component:AddContactus,
path:"/AddContactus"},
DetailedSummaryReportsGraph:{
 component:DetailedSummaryReportsGraph,
path:"/DetailedSummaryReportsGraph"},
Customform:{
 component:Customform,
path:"/Customform"},
ForgotPassword:{
 component:ForgotPassword,
path:"/ForgotPassword"},
ForgotPasswordOTP:{
 component:ForgotPasswordOTP,
path:"/ForgotPasswordOTP"},
NewPassword:{
 component:NewPassword,
path:"/NewPassword"},
Maps:{
 component:Maps,
path:"/Maps"},
Categoriessubcategories:{
 component:Categoriessubcategories,
path:"/Categoriessubcategories"},
FileAttachment:{
 component:FileAttachment,
path:"/FileAttachment"},
Reviews:{
 component:Reviews,
path:"/Reviews"},
AddReview:{
 component:AddReview,
path:"/AddReview"},
ComparabletheMarketApproach2:{
 component:ComparabletheMarketApproach2,
path:"/ComparabletheMarketApproach2"},
CountryCodeSelector:{
 component:CountryCodeSelector,
path:"/CountryCodeSelector"},
PhotoLibrary3:{
 component:PhotoLibrary3,
path:"/PhotoLibrary3"},
LiveStreaming:{
 component:LiveStreaming,
path:"/LiveStreaming"},
DubaiLandDepartmentdldApi2:{
 component:DubaiLandDepartmentdldApi2,
path:"/DubaiLandDepartmentdldApi2"},
SummaryReportTemplateWithoutAi3:{
 component:SummaryReportTemplateWithoutAi3,
path:"/SummaryReportTemplateWithoutAi3"},
ContentManagement:{
 component:ContentManagement,
path:"/ContentManagement"},
TermsAndConditions:{
 component:TermsAndConditions,
path:"/TermsAndConditions"},
UserGroups:{
 component:UserGroups,
path:"/UserGroups"},
SaveAsPdf:{
 component:SaveAsPdf,
path:"/SaveAsPdf"},
EmailAccountLoginBlock:{
 component:EmailAccountLoginBlock,
path:"/",
exact:true},
GeolocationReporting:{
 component:GeolocationReporting,
path:"/GeolocationReporting"},
Chatbot6:{
 component:Chatbot6,
path:"/Chatbot6"},
EmailAccountRegistration:{
 component:EmailAccountRegistrationWeb,
path:"/EmailAccountRegistration"},
DataImportexportcsv:{
 component:DataImportexportcsv,
path:"/DataImportexportcsv"},
DocumentOpener:{
 component:DocumentOpener,
path:"/DocumentOpener"},
Splashscreen:{
 component:Splashscreen,
path:"/Splashscreen"},
PaymentIntegration5:{
 component:PaymentIntegration5,
path:"/PaymentIntegration5"},
ComparisonPage2:{
 component:ComparisonPage2,
path:"/ComparisonPage2"},
Dashboard:{
 component:Dashboard,
path:"/Dashboard"},
PrivateChat:{
 component:PrivateChat,
path:"/PrivateChat"},
CarouselDisplay:{
 component:CarouselDisplay,
path:"/CarouselDisplay"},
Onboardingguide:{
 component:Onboardingguide,
path:"/Onboardingguide"},
Settings2:{
 component:Settings2,
path:"/Settings2"},
InvestmentDiscountedCashFlowdcfTheIncomeApproach2:{
 component:InvestmentDiscountedCashFlowdcfTheIncomeApproach2,
path:"/InvestmentDiscountedCashFlowdcfTheIncomeApproach2"},
InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2:{
 component:InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2,
path:"/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2"},
Pushnotifications:{
 component:Pushnotifications,
path:"/Pushnotifications"},
VisualAnalytics:{
 component:VisualAnalytics,
path:"/VisualAnalytics"},
LanguageSupport:{
 component:LanguageSupport,
path:"/LanguageSupport"},
Trending:{
 component:Trending,
path:"/Trending"},
PhoneNumberInput:{
 component:PhoneNumberInput,
path:"/PhoneNumberInput"},
AdditionalDetailForm:{
 component:AdditionalDetailForm,
path:"/AdditionalDetailForm"},
EmailNotifications:{
 component:EmailNotifications,
path:"/EmailNotifications"},
TwilioIntegration2:{
 component:TwilioIntegration2,
path:"/TwilioIntegration2"},
ProductDescription:{
 component:ProductDescription,
path:"/ProductDescription"},
RolesPermissions2:{
 component:RolesPermissions2,
path:"/RolesPermissions2"},
HousePricesArViewer:{
 component:HousePricesArViewer,
path:"/HousePricesArViewer"},
FormulaExecution2:{
 component:FormulaExecution2,
path:"/FormulaExecution2"},
AdminConsole3:{
 component:AdminConsole3,
path:"/AdminConsole3"},
Interactivefaqs:{
 component:Interactivefaqs,
path:"/Interactivefaqs"},
AddInteractivefaqs:{
 component:AddInteractivefaqs,
path:"/AddInteractivefaqs"},
ResidualApproachtheIncomeApproach2:{
 component:ResidualApproachtheIncomeApproach2,
path:"/ResidualApproachtheIncomeApproach2"},
Analytics3:{
 component:Analytics3,
path:"/Analytics3"},
CameraAccess:{
 component:CameraAccess,
path:"/CameraAccess"},
ValuationCertificateReport3:{
 component:ValuationCertificateReport3,
path:"/ValuationCertificateReport3"},
SocialMediaAccountLoginScreen:{
 component:SocialMediaAccountLoginScreen,
path:"/SocialMediaAccountLoginScreen"},
Wishlist2:{
 component:Wishlist2,
path:"/Wishlist2"},
CustomisableUserProfiles:{
 component:CustomisableUserProfiles,
path:"/CustomisableUserProfiles"},
OTPInputAuth:{
 component:OTPInputAuth,
path:"/OTPInputAuth"},
ValuationEngine2:{
 component:ValuationEngine2,
path:"/ValuationEngine2"},
BlogPostsManagement:{
 component:BlogPostsManagement,
path:"/BlogPostsManagement"},
DepreciatedReplacementCostcontractors2:{
 component:DepreciatedReplacementCostcontractors2,
path:"/DepreciatedReplacementCostcontractors2"},
DetailedSummaryReportWithoutAi3:{
 component:DetailedSummaryReportWithoutAi3,
path:"/DetailedSummaryReportWithoutAi3"},
NavigationMenu:{
 component:NavigationMenu,
path:"/NavigationMenu"},
FormApprovalWorkflow:{
 component:FormApprovalWorkflow,
path:"/FormApprovalWorkflow"},
SocialMediaAccountRegistrationScreen:{
 component:SocialMediaAccountRegistrationScreen,
path:"/SocialMediaAccountRegistrationScreen"},
Notificationsettings:{
 component:Notificationsettings,
path:"/Notificationsettings"},
Share:{
 component:Share,
path:"/Share"},
SubscriptionBilling:{
 component:SubscriptionBilling,
path:"/SubscriptionBilling"},
AdvancedSearch:{
 component:AdvancedSearch,
path:"/AdvancedSearch"},
MobileAccountLoginBlock:{
 component:MobileAccountLoginBlock,
path:"/MobileAccountLoginBlock"},
News12:{
 component:News12,
path:"/News12"},
DubaipulseIntegration2:{
 component:DubaipulseIntegration2,
path:"/DubaipulseIntegration2"},

  // Home: {
  //   component: HomeScreen,
  //   path: '/',
  //   exact: true
  // },
  InfoPage: {
    component: InfoPage,
    path: '/InfoPage'
  },

  AlertWeb: {
    component: AlertBlock,
    path: "*/AlertWeb",
    modal: true
  },
  ResetPassword:{
    component:ResetPassword,
    path:"/ResetPassword"
  }

};

const firebaseAPI = firebase.initializeApp({
  apiKey: "AIzaSyDgl9aTbKMdRZ9-ijSZRionh3V591gMJl4",
  authDomain: "rnmasterapp-c11e9.firebaseapp.com",
  databaseURL: "https://rnmasterapp-c11e9.firebaseio.com",
  projectId: "rnmasterapp-c11e9",
  storageBucket: "rnmasterapp-c11e9.appspot.com",
  messagingSenderId: "649592030497",
  appId: "1:649592030497:web:7728bee3f2baef208daa60",
  measurementId: "G-FYBCF3Z2W3"
});

class App extends Component {
   
  render() {

    const defaultAnalytics = firebaseAPI.analytics();
    defaultAnalytics.logEvent('APP_Loaded');
    
    return (<div style={{width:"100%"}} >
      {/* // <View style={{ height: '100vh', width: '100vw' }}> */}
        {/* <TopNav /> */}
        
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
        
      {/* // </View> */}
      </div>
    );
  }
}

export default App;