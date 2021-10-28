import React from 'react';

import {
  createStackNavigator
} from "react-navigation";

import HomeScreen from "../components/src/HomeScreen";
import InfoPage from '../blocks/info-page/src/InfoPageBlock'
import Contactus from "../blocks/contactus/src/Contactus";
import AddContactus from "../blocks/contactus/src/AddContactus";
import DetailedSummaryReportsGraph from "../blocks/DetailedSummaryReportsGraph/src/DetailedSummaryReportsGraph";
import Customform from "../blocks/customform/src/Customform";
import ForgotPassword from "../blocks/forgot-password/src/ForgotPassword";
import ForgotPasswordOTP from "../blocks/forgot-password/src/ForgotPasswordOTP";
import NewPassword from "../blocks/forgot-password/src/NewPassword";
import Maps from "../blocks/Maps/src/Maps";
import Categoriessubcategories from "../blocks/categoriessubcategories/src/Categoriessubcategories";
import FileAttachment from "../blocks/FileAttachment/src/FileAttachment";
import Reviews from "../blocks/reviews/src/Reviews";
import AddReview from "../blocks/reviews/src/AddReview";
import ComparabletheMarketApproach2 from "../blocks/ComparabletheMarketApproach2/src/ComparabletheMarketApproach2";
import CountryCodeSelector from "../blocks/country-code-selector/src/CountryCodeSelector";
import CountryCodeSelectorTable from "../blocks/country-code-selector/src/CountryCodeSelectorTable";
import PhotoLibrary3 from "../blocks/PhotoLibrary3/src/PhotoLibrary3";
import LiveStreaming from "../blocks/LiveStreaming/src/LiveStreaming";
import DubaiLandDepartmentdldApi2 from "../blocks/DubaiLandDepartmentdldApi2/src/DubaiLandDepartmentdldApi2";
import SummaryReportTemplateWithoutAi3 from "../blocks/SummaryReportTemplateWithoutAi3/src/SummaryReportTemplateWithoutAi3";
import ContentManagement from "../blocks/ContentManagement/src/ContentManagement";
import TermsAndConditions from "../blocks/TermsAndConditions/src/TermsAndConditions";
import UserGroups from "../blocks/UserGroups/src/UserGroups";
import SaveAsPdf from "../blocks/SaveAsPdf/src/SaveAsPdf";
import EmailAccountLoginBlock from "../blocks/email-account-login/src/EmailAccountLoginBlock";
import GeolocationReporting from "../blocks/GeolocationReporting/src/GeolocationReporting";
import Chatbot6 from "../blocks/Chatbot6/src/Chatbot6";
import EmailAccountRegistration from "../blocks/email-account-registration/src/EmailAccountRegistration";
import DataImportexportcsv from "../blocks/DataImportexportcsv/src/DataImportexportcsv";
import DocumentOpener from "../blocks/DocumentOpener/src/DocumentOpener";
import Splashscreen from "../blocks/splashscreen/src/Splashscreen";
import PaymentIntegration5 from "../blocks/PaymentIntegration5/src/PaymentIntegration5";
import ComparisonPage2 from "../blocks/ComparisonPage2/src/ComparisonPage2";
import Dashboard from "../blocks/dashboard/src/Dashboard";
import PrivateChat from "../blocks/PrivateChat/src/PrivateChat";
import CarouselDisplay from "../blocks/CarouselDisplay/src/CarouselDisplay";
import Onboardingguide from "../blocks/onboardingguide/src/Onboardingguide";
import Settings2 from "../blocks/Settings2/src/Settings2";
import InvestmentDiscountedCashFlowdcfTheIncomeApproach2 from "../blocks/InvestmentDiscountedCashFlowdcfTheIncomeApproach2/src/InvestmentDiscountedCashFlowdcfTheIncomeApproach2";
import InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2 from "../blocks/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2/src/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2";
import Pushnotifications from "../blocks/pushnotifications/src/Pushnotifications";
import VisualAnalytics from "../blocks/VisualAnalytics/src/VisualAnalytics";
import LanguageSupport from "../blocks/LanguageSupport/src/LanguageSupport";
import Trending from "../blocks/Trending/src/Trending";
import PhoneNumberInput from "../blocks/mobile-account-registration/src/PhoneNumberInput";
import AdditionalDetailForm from "../blocks/mobile-account-registration/src/AdditionalDetailForm";
import EmailNotifications from "../blocks/EmailNotifications/src/EmailNotifications";
import TwilioIntegration2 from "../blocks/TwilioIntegration2/src/TwilioIntegration2";
import ProductDescription from "../blocks/ProductDescription/src/ProductDescription";
import RolesPermissions2 from "../blocks/RolesPermissions2/src/RolesPermissions2";
import HousePricesArViewer from "../blocks/HousePricesArViewer/src/HousePricesArViewer";
import FormulaExecution2 from "../blocks/FormulaExecution2/src/FormulaExecution2";
import AdminConsole3 from "../blocks/AdminConsole3/src/AdminConsole3";
import Interactivefaqs from "../blocks/interactivefaqs/src/Interactivefaqs";
import AddInteractivefaqs from "../blocks/interactivefaqs/src/AddInteractivefaqs";
import ResidualApproachtheIncomeApproach2 from "../blocks/ResidualApproachtheIncomeApproach2/src/ResidualApproachtheIncomeApproach2";
import Analytics3 from "../blocks/Analytics3/src/Analytics3";
import CameraAccess from "../blocks/CameraAccess/src/CameraAccess";
import ValuationCertificateReport3 from "../blocks/ValuationCertificateReport3/src/ValuationCertificateReport3";
import SocialMediaAccountLoginScreen from "../blocks/social-media-account-login/src/SocialMediaAccountLoginScreen";
import Wishlist2 from "../blocks/Wishlist2/src/Wishlist2";
import CustomisableUserProfiles from "../blocks/CustomisableUserProfiles/src/CustomisableUserProfiles";
import OTPInputAuth from "../blocks/otp-input-confirmation/src/OTPInputAuth";
import ValuationEngine2 from "../blocks/ValuationEngine2/src/ValuationEngine2";
import BlogPostsManagement from "../blocks/BlogPostsManagement/src/BlogPostsManagement";
import DepreciatedReplacementCostcontractors2 from "../blocks/DepreciatedReplacementCostcontractors2/src/DepreciatedReplacementCostcontractors2";
import DetailedSummaryReportWithoutAi3 from "../blocks/DetailedSummaryReportWithoutAi3/src/DetailedSummaryReportWithoutAi3";
import NavigationMenu from "../blocks/NavigationMenu/src/NavigationMenu";
import FormApprovalWorkflow from "../blocks/FormApprovalWorkflow/src/FormApprovalWorkflow";
import SocialMediaAccountRegistrationScreen from "../blocks/social-media-account-registration/src/SocialMediaAccountRegistrationScreen";
import Notificationsettings from "../blocks/notificationsettings/src/Notificationsettings";
import Share from "../blocks/Share/src/Share";
import SubscriptionBilling from "../blocks/SubscriptionBilling/src/SubscriptionBilling";
import AdvancedSearch from "../blocks/AdvancedSearch/src/AdvancedSearch";
import MobileAccountLoginBlock from "../blocks/mobile-account-login/src/MobileAccountLoginBlock";
import News12 from "../blocks/News12/src/News12";
import DubaipulseIntegration2 from "../blocks/DubaipulseIntegration2/src/DubaipulseIntegration2";


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, title: "Home" } },
Contactus:{ screen:Contactus,navigationOptions:{ title:"Contactus"}},
AddContactus:{ screen:AddContactus,navigationOptions:{ title:"AddContactus"}},
DetailedSummaryReportsGraph:{ screen:DetailedSummaryReportsGraph,navigationOptions:{ title:"DetailedSummaryReportsGraph"}},
Customform:{ screen:Customform,navigationOptions:{ title:"Customform"}},
ForgotPassword:{ screen:ForgotPassword,navigationOptions:{ title:"ForgotPassword"}},
ForgotPasswordOTP:{ screen:ForgotPasswordOTP,navigationOptions:{ title:"ForgotPasswordOTP"}},
NewPassword:{ screen:NewPassword,navigationOptions:{ title:"NewPassword"}},
Maps:{ screen:Maps,navigationOptions:{ title:"Maps"}},
Categoriessubcategories:{ screen:Categoriessubcategories,navigationOptions:{ title:"Categoriessubcategories"}},
FileAttachment:{ screen:FileAttachment,navigationOptions:{ title:"FileAttachment"}},
Reviews:{ screen:Reviews,navigationOptions:{ title:"Reviews"}},
AddReview:{ screen:AddReview,navigationOptions:{ title:"AddReview"}},
ComparabletheMarketApproach2:{ screen:ComparabletheMarketApproach2,navigationOptions:{ title:"ComparabletheMarketApproach2"}},
CountryCodeSelector:{ screen:CountryCodeSelector,navigationOptions:{ title:"CountryCodeSelector"}},
CountryCodeSelectorTable:{ screen:CountryCodeSelectorTable,navigationOptions:{ title:"CountryCodeSelectorTable"}},
PhotoLibrary3:{ screen:PhotoLibrary3,navigationOptions:{ title:"PhotoLibrary3"}},
LiveStreaming:{ screen:LiveStreaming,navigationOptions:{ title:"LiveStreaming"}},
DubaiLandDepartmentdldApi2:{ screen:DubaiLandDepartmentdldApi2,navigationOptions:{ title:"DubaiLandDepartmentdldApi2"}},
SummaryReportTemplateWithoutAi3:{ screen:SummaryReportTemplateWithoutAi3,navigationOptions:{ title:"SummaryReportTemplateWithoutAi3"}},
ContentManagement:{ screen:ContentManagement,navigationOptions:{ title:"ContentManagement"}},
TermsAndConditions:{ screen:TermsAndConditions,navigationOptions:{ title:"TermsAndConditions"}},
UserGroups:{ screen:UserGroups,navigationOptions:{ title:"UserGroups"}},
SaveAsPdf:{ screen:SaveAsPdf,navigationOptions:{ title:"SaveAsPdf"}},
EmailAccountLoginBlock:{ screen:EmailAccountLoginBlock,navigationOptions:{ title:"EmailAccountLoginBlock"}},
GeolocationReporting:{ screen:GeolocationReporting,navigationOptions:{ title:"GeolocationReporting"}},
Chatbot6:{ screen:Chatbot6,navigationOptions:{ title:"Chatbot6"}},
EmailAccountRegistration:{ screen:EmailAccountRegistration,navigationOptions:{ title:"EmailAccountRegistration"}},
DataImportexportcsv:{ screen:DataImportexportcsv,navigationOptions:{ title:"DataImportexportcsv"}},
DocumentOpener:{ screen:DocumentOpener,navigationOptions:{ title:"DocumentOpener"}},
Splashscreen:{ screen:Splashscreen,navigationOptions:{ title:"Splashscreen"}},
PaymentIntegration5:{ screen:PaymentIntegration5,navigationOptions:{ title:"PaymentIntegration5"}},
ComparisonPage2:{ screen:ComparisonPage2,navigationOptions:{ title:"ComparisonPage2"}},
Dashboard:{ screen:Dashboard,navigationOptions:{ title:"Dashboard"}},
PrivateChat:{ screen:PrivateChat,navigationOptions:{ title:"PrivateChat"}},
CarouselDisplay:{ screen:CarouselDisplay,navigationOptions:{ title:"CarouselDisplay"}},
Onboardingguide:{ screen:Onboardingguide,navigationOptions:{ title:"Onboardingguide"}},
Settings2:{ screen:Settings2,navigationOptions:{ title:"Settings2"}},
InvestmentDiscountedCashFlowdcfTheIncomeApproach2:{ screen:InvestmentDiscountedCashFlowdcfTheIncomeApproach2,navigationOptions:{ title:"InvestmentDiscountedCashFlowdcfTheIncomeApproach2"}},
InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2:{ screen:InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2,navigationOptions:{ title:"InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2"}},
Pushnotifications:{ screen:Pushnotifications,navigationOptions:{ title:"Pushnotifications"}},
VisualAnalytics:{ screen:VisualAnalytics,navigationOptions:{ title:"VisualAnalytics"}},
LanguageSupport:{ screen:LanguageSupport,navigationOptions:{ title:"LanguageSupport"}},
Trending:{ screen:Trending,navigationOptions:{ title:"Trending"}},
PhoneNumberInput:{ screen:PhoneNumberInput,navigationOptions:{ title:"PhoneNumberInput"}},
AdditionalDetailForm:{ screen:AdditionalDetailForm,navigationOptions:{ title:"AdditionalDetailForm"}},
EmailNotifications:{ screen:EmailNotifications,navigationOptions:{ title:"EmailNotifications"}},
TwilioIntegration2:{ screen:TwilioIntegration2,navigationOptions:{ title:"TwilioIntegration2"}},
ProductDescription:{ screen:ProductDescription,navigationOptions:{ title:"ProductDescription"}},
RolesPermissions2:{ screen:RolesPermissions2,navigationOptions:{ title:"RolesPermissions2"}},
HousePricesArViewer:{ screen:HousePricesArViewer,navigationOptions:{ title:"HousePricesArViewer"}},
FormulaExecution2:{ screen:FormulaExecution2,navigationOptions:{ title:"FormulaExecution2"}},
AdminConsole3:{ screen:AdminConsole3,navigationOptions:{ title:"AdminConsole3"}},
Interactivefaqs:{ screen:Interactivefaqs,navigationOptions:{ title:"Interactivefaqs"}},
AddInteractivefaqs:{ screen:AddInteractivefaqs,navigationOptions:{ title:"AddInteractivefaqs"}},
ResidualApproachtheIncomeApproach2:{ screen:ResidualApproachtheIncomeApproach2,navigationOptions:{ title:"ResidualApproachtheIncomeApproach2"}},
Analytics3:{ screen:Analytics3,navigationOptions:{ title:"Analytics3"}},
CameraAccess:{ screen:CameraAccess,navigationOptions:{ title:"CameraAccess"}},
ValuationCertificateReport3:{ screen:ValuationCertificateReport3,navigationOptions:{ title:"ValuationCertificateReport3"}},
SocialMediaAccountLoginScreen:{ screen:SocialMediaAccountLoginScreen,navigationOptions:{ title:"SocialMediaAccountLoginScreen"}},
Wishlist2:{ screen:Wishlist2,navigationOptions:{ title:"Wishlist2"}},
CustomisableUserProfiles:{ screen:CustomisableUserProfiles,navigationOptions:{ title:"CustomisableUserProfiles"}},
OTPInputAuth:{ screen:OTPInputAuth,navigationOptions:{ title:"OTPInputAuth"}},
ValuationEngine2:{ screen:ValuationEngine2,navigationOptions:{ title:"ValuationEngine2"}},
BlogPostsManagement:{ screen:BlogPostsManagement,navigationOptions:{ title:"BlogPostsManagement"}},
DepreciatedReplacementCostcontractors2:{ screen:DepreciatedReplacementCostcontractors2,navigationOptions:{ title:"DepreciatedReplacementCostcontractors2"}},
DetailedSummaryReportWithoutAi3:{ screen:DetailedSummaryReportWithoutAi3,navigationOptions:{ title:"DetailedSummaryReportWithoutAi3"}},
NavigationMenu:{ screen:NavigationMenu,navigationOptions:{ title:"NavigationMenu"}},
FormApprovalWorkflow:{ screen:FormApprovalWorkflow,navigationOptions:{ title:"FormApprovalWorkflow"}},
SocialMediaAccountRegistrationScreen:{ screen:SocialMediaAccountRegistrationScreen,navigationOptions:{ title:"SocialMediaAccountRegistrationScreen"}},
Notificationsettings:{ screen:Notificationsettings,navigationOptions:{ title:"Notificationsettings"}},
Share:{ screen:Share,navigationOptions:{ title:"Share"}},
SubscriptionBilling:{ screen:SubscriptionBilling,navigationOptions:{ title:"SubscriptionBilling"}},
AdvancedSearch:{ screen:AdvancedSearch,navigationOptions:{ title:"AdvancedSearch"}},
MobileAccountLoginBlock:{ screen:MobileAccountLoginBlock,navigationOptions:{ title:"MobileAccountLoginBlock"}},
News12:{ screen:News12,navigationOptions:{ title:"News12"}},
DubaipulseIntegration2:{ screen:DubaipulseIntegration2,navigationOptions:{ title:"DubaipulseIntegration2"}},

  InfoPage: { screen: InfoPage, navigationOptions: { title: "Info" } }, 
});

if (!HomeScreen.instance) {
  const defaultProps = {
    navigation: null,
    id: "HomeScreen"
  };
  const homeScreen = new HomeScreen(defaultProps);
}

export function App() {
  return (
    <HomeStack />
  );
};