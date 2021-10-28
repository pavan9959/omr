import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // Customizable Area Start
  // Customizable Area End
} from "react-native";
import { BlockComponent } from "../../framework/src/BlockComponent";
import AlertBlock from '../../blocks/alert/src/AlertBlock';
import CustomTextItem from "./CustomTextItem";
import NavigationBlock from "../../framework/src/Blocks/NavigationBlock";
import SingletonFactory from '../../framework/src/SingletonFactory';

import HomeScreenAdapter from '../../blocks/adapters/src/HomeScreenAdapter';
import InfoPageAdapter from '../../blocks/adapters/src/InfoPageAdapter';
import AlertPageWebAdapter from "../../blocks/adapters/src/AlertPageWebAdapter";

// Customizable Area Start
import PrivacyPolicyAdapter from "../../blocks/adapters/src/PrivacyPolicyAdapter";
import TermsAndConditionAdapter from "../../blocks/adapters/src/TermsAndConditionAdapter";
import SplashScreenAdapter from "../../blocks/adapters/src/SplashScreenAdapter";
import SocialMediaLogInAdapter from "../../blocks/adapters/src/SocialMediaLogInAdapter";
import EmailAccountLogInAdapter from "../../blocks/adapters/src/EmailAccountLogInAdapter";
import EmailAccountSignUpAdapter from "../../blocks/adapters/src/EmailAccountSignUpAdapter";
import ForgotPasswordAdapter from "../../blocks/adapters/src/ForgotPasswordAdapter";
import MobilePhoneToOTPAdapter from "../../blocks/adapters/src/MobilePhoneToOTPAdapter";
import OtpToNewPasswordAdapter from "../../blocks/adapters/src/OtpToNewPasswordAdapter";
import MobilePhoneLogInAdapter from "../../blocks/adapters/src/MobilePhoneLogInAdapter";
import MobilePhoneToAdditionalDetailsAdapter from "../../blocks/adapters/src/MobilePhoneToAdditionalDetailsAdapter";
import OnboardingAdapter from "../../blocks/adapters/src/OnboardingAdapter";

//Assembler generated adapters start
const socialMediaLogInAdapter = new SocialMediaLogInAdapter();
const emailAccountLogInAdapter = new EmailAccountLogInAdapter();
const emailAccountSignUpAdapter = new EmailAccountSignUpAdapter();
const forgotPasswordAdapter = new ForgotPasswordAdapter();
const mobilePhoneToOTPAdapter = new MobilePhoneToOTPAdapter();
const otpToNewPasswordAdapter = new OtpToNewPasswordAdapter();
const mobilePhoneLogInAdapter = new MobilePhoneLogInAdapter();
const mobilePhoneToAdditionalDetailsAdapter = new MobilePhoneToAdditionalDetailsAdapter();
const onboardingAdapter = new OnboardingAdapter();

//Assembler generated adapters end



const privacyAdapter = new PrivacyPolicyAdapter();
const termAndConditionAdapter = new TermsAndConditionAdapter();
const splashScreenAdapter = new SplashScreenAdapter();
// Customizable Area End


const restAPIBlock = SingletonFactory.getRestBlockInstance();
const alertBlock = new AlertBlock();
const navigationBlock = new NavigationBlock();
const sessionBlock = SingletonFactory.getSessionBlockInstance();
const userAccountManagerBlock = SingletonFactory.getUserManagerInstance();
const homeScreenAdapter = new HomeScreenAdapter();
const infoPageAdapter = new InfoPageAdapter();
const alertPageWebAdapter = new AlertPageWebAdapter()

const instructions = Platform.select({
  // Customizable Area Start
  ios: "The iOS APP to rule them all!",
  android: "Now with Android AI",
  web: "Selector your adventure."
  // Customizable Area End
});

interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

// Customizable Area Start
interface S { }

interface SS { }

class HomeScreen extends BlockComponent<Props, S, SS> {

  static instance:HomeScreen;

  constructor(props: Props) {
    super(props);
    HomeScreen.instance = this;
  }

  render() {
    const { navigation } = this.props;
    const _this = this;

    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>
                Welcome to Omran!
              </Text>
            </View>

            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.header}>DEFAULT BLOCKS</Text>
            <CustomTextItem
              content={'InfoPage'}
              onPress={() => navigation.navigate("InfoPage")}
            />
            <CustomTextItem
              content={'Alert'}
              onPress={() => this.showAlert("Example", "This happened")}
            />
<CustomTextItem content={'SocialMediaAccountRegistrationScreen'}  onPress={() => navigation.navigate("SocialMediaAccountRegistrationScreen")} />
<CustomTextItem content={'core'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'social-media-account'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'EmailAccountLoginBlock'}  onPress={() => navigation.navigate("EmailAccountLoginBlock")} />
<CustomTextItem content={'EmailAccountRegistration'}  onPress={() => navigation.navigate("EmailAccountRegistration")} />
<CustomTextItem content={'CountryCodeSelector'}  onPress={() => navigation.navigate("CountryCodeSelector")} />
<CustomTextItem content={'ForgotPassword'}  onPress={() => navigation.navigate("ForgotPassword")} />
<CustomTextItem content={'OTPInputAuth'}  onPress={() => navigation.navigate("OTPInputAuth")} />
<CustomTextItem content={'SocialMediaAccountLoginScreen'}  onPress={() => navigation.navigate("SocialMediaAccountLoginScreen")} />
<CustomTextItem content={'Pushnotifications'}  onPress={() => navigation.navigate("Pushnotifications")} />
<CustomTextItem content={'Dashboard'}  onPress={() => navigation.navigate("Dashboard")} />
<CustomTextItem content={'Contactus'}  onPress={() => navigation.navigate("Contactus")} />
<CustomTextItem content={'Notificationsettings'}  onPress={() => navigation.navigate("Notificationsettings")} />
<CustomTextItem content={'Splashscreen'}  onPress={() => navigation.navigate("Splashscreen")} />
<CustomTextItem content={'PhoneNumberInput'}  onPress={() => navigation.navigate("PhoneNumberInput")} />
<CustomTextItem content={'MobileAccountLoginBlock'}  onPress={() => navigation.navigate("MobileAccountLoginBlock")} />
<CustomTextItem content={'Reviews'}  onPress={() => navigation.navigate("Reviews")} />
<CustomTextItem content={'Categoriessubcategories'}  onPress={() => navigation.navigate("Categoriessubcategories")} />
<CustomTextItem content={'Customform'}  onPress={() => navigation.navigate("Customform")} />
<CustomTextItem content={'Onboardingguide'}  onPress={() => navigation.navigate("Onboardingguide")} />
<CustomTextItem content={'Interactivefaqs'}  onPress={() => navigation.navigate("Interactivefaqs")} />
<CustomTextItem content={'PhotoLibrary3'}  onPress={() => navigation.navigate("PhotoLibrary3")} />
<CustomTextItem content={'PrivateChat'}  onPress={() => navigation.navigate("PrivateChat")} />
<CustomTextItem content={'Share'}  onPress={() => navigation.navigate("Share")} />
<CustomTextItem content={'LanguageSupport'}  onPress={() => navigation.navigate("LanguageSupport")} />
<CustomTextItem content={'UserGroups'}  onPress={() => navigation.navigate("UserGroups")} />
<CustomTextItem content={'AdminConsole3'}  onPress={() => navigation.navigate("AdminConsole3")} />
<CustomTextItem content={'HousePricesArViewer'}  onPress={() => navigation.navigate("HousePricesArViewer")} />
<CustomTextItem content={'RolesPermissions2'}  onPress={() => navigation.navigate("RolesPermissions2")} />
<CustomTextItem content={'Settings2'}  onPress={() => navigation.navigate("Settings2")} />
<CustomTextItem content={'ProductDescription'}  onPress={() => navigation.navigate("ProductDescription")} />
<CustomTextItem content={'FileAttachment'}  onPress={() => navigation.navigate("FileAttachment")} />
<CustomTextItem content={'Wishlist2'}  onPress={() => navigation.navigate("Wishlist2")} />
<CustomTextItem content={'VisualAnalytics'}  onPress={() => navigation.navigate("VisualAnalytics")} />
<CustomTextItem content={'FormApprovalWorkflow'}  onPress={() => navigation.navigate("FormApprovalWorkflow")} />
<CustomTextItem content={'DocumentOpener'}  onPress={() => navigation.navigate("DocumentOpener")} />
<CustomTextItem content={'EmailNotifications'}  onPress={() => navigation.navigate("EmailNotifications")} />
<CustomTextItem content={'SaveAsPdf'}  onPress={() => navigation.navigate("SaveAsPdf")} />
<CustomTextItem content={'Trending'}  onPress={() => navigation.navigate("Trending")} />
<CustomTextItem content={'GeolocationReporting'}  onPress={() => navigation.navigate("GeolocationReporting")} />
<CustomTextItem content={'SubscriptionBilling'}  onPress={() => navigation.navigate("SubscriptionBilling")} />
<CustomTextItem content={'Analytics3'}  onPress={() => navigation.navigate("Analytics3")} />
<CustomTextItem content={'AdvancedSearch'}  onPress={() => navigation.navigate("AdvancedSearch")} />
<CustomTextItem content={'TermsAndConditions'}  onPress={() => navigation.navigate("TermsAndConditions")} />
<CustomTextItem content={'Chatbot6'}  onPress={() => navigation.navigate("Chatbot6")} />
<CustomTextItem content={'ContentManagement'}  onPress={() => navigation.navigate("ContentManagement")} />
<CustomTextItem content={'CustomisableUserProfiles'}  onPress={() => navigation.navigate("CustomisableUserProfiles")} />
<CustomTextItem content={'CarouselDisplay'}  onPress={() => navigation.navigate("CarouselDisplay")} />
<CustomTextItem content={'LiveStreaming'}  onPress={() => navigation.navigate("LiveStreaming")} />
<CustomTextItem content={'Maps'}  onPress={() => navigation.navigate("Maps")} />
<CustomTextItem content={'NavigationMenu'}  onPress={() => navigation.navigate("NavigationMenu")} />
<CustomTextItem content={'TwilioIntegration2'}  onPress={() => navigation.navigate("TwilioIntegration2")} />
<CustomTextItem content={'FormulaExecution2'}  onPress={() => navigation.navigate("FormulaExecution2")} />
<CustomTextItem content={'DubaipulseIntegration2'}  onPress={() => navigation.navigate("DubaipulseIntegration2")} />
<CustomTextItem content={'InvestmentDiscountedCashFlowdcfTheIncomeApproach2'}  onPress={() => navigation.navigate("InvestmentDiscountedCashFlowdcfTheIncomeApproach2")} />
<CustomTextItem content={'ValuationEngine2'}  onPress={() => navigation.navigate("ValuationEngine2")} />
<CustomTextItem content={'ResidualApproachtheIncomeApproach2'}  onPress={() => navigation.navigate("ResidualApproachtheIncomeApproach2")} />
<CustomTextItem content={'ComparabletheMarketApproach2'}  onPress={() => navigation.navigate("ComparabletheMarketApproach2")} />
<CustomTextItem content={'DepreciatedReplacementCostcontractors2'}  onPress={() => navigation.navigate("DepreciatedReplacementCostcontractors2")} />
<CustomTextItem content={'InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2'}  onPress={() => navigation.navigate("InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2")} />
<CustomTextItem content={'PaymentIntegration5'}  onPress={() => navigation.navigate("PaymentIntegration5")} />
<CustomTextItem content={'DubaiLandDepartmentdldApi2'}  onPress={() => navigation.navigate("DubaiLandDepartmentdldApi2")} />
<CustomTextItem content={'ComparisonPage2'}  onPress={() => navigation.navigate("ComparisonPage2")} />
<CustomTextItem content={'DataImportexportcsv'}  onPress={() => navigation.navigate("DataImportexportcsv")} />
<CustomTextItem content={'BlogPostsManagement'}  onPress={() => navigation.navigate("BlogPostsManagement")} />
<CustomTextItem content={'CameraAccess'}  onPress={() => navigation.navigate("CameraAccess")} />
<CustomTextItem content={'News12'}  onPress={() => navigation.navigate("News12")} />
<CustomTextItem content={'ValuationCertificateReport3'}  onPress={() => navigation.navigate("ValuationCertificateReport3")} />
<CustomTextItem content={'SummaryReportTemplateWithoutAi3'}  onPress={() => navigation.navigate("SummaryReportTemplateWithoutAi3")} />
<CustomTextItem content={'DetailedSummaryReportsGraph'}  onPress={() => navigation.navigate("DetailedSummaryReportsGraph")} />
<CustomTextItem content={'DetailedSummaryReportWithoutAi3'}  onPress={() => navigation.navigate("DetailedSummaryReportWithoutAi3")} />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
// Customizable Area End

// Customizable Area Start
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    height: Platform.OS === "web" ? '100vh' : 'auto',
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#6200EE",
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,

    padding: 10
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#00000000',
    padding: 18,
    color: '#6200EE',
    fontSize: 16,
    fontWeight: 'normal'
  }
});
// Customizable Area End
export default HomeScreen;