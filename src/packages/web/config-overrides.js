const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

//MARK::Add Web Blocks
const appIncludes = [
resolveApp('../blocks/social-media-account-registration/src/'),
resolveApp('../blocks/core/src/'),
resolveApp('../blocks/social-media-account/src/'),
resolveApp('../blocks/email-account-login/src/'),
resolveApp('../blocks/email-account-registration/src/'),
resolveApp('../blocks/country-code-selector/src/'),
resolveApp('../blocks/forgot-password/src/'),
resolveApp('../blocks/otp-input-confirmation/src/'),
resolveApp('../blocks/social-media-account-login/src/'),
resolveApp('../blocks/pushnotifications/src/'),
resolveApp('../blocks/dashboard/src/'),
resolveApp('../blocks/contactus/src/'),
resolveApp('../blocks/notificationsettings/src/'),
resolveApp('../blocks/splashscreen/src/'),
resolveApp('../blocks/mobile-account-registration/src/'),
resolveApp('../blocks/mobile-account-login/src/'),
resolveApp('../blocks/reviews/src/'),
resolveApp('../blocks/categoriessubcategories/src/'),
resolveApp('../blocks/customform/src/'),
resolveApp('../blocks/onboardingguide/src/'),
resolveApp('../blocks/interactivefaqs/src/'),
resolveApp('../blocks/PhotoLibrary3/src/'),
resolveApp('../blocks/PrivateChat/src/'),
resolveApp('../blocks/Share/src/'),
resolveApp('../blocks/LanguageSupport/src/'),
resolveApp('../blocks/UserGroups/src/'),
resolveApp('../blocks/AdminConsole3/src/'),
resolveApp('../blocks/HousePricesArViewer/src/'),
resolveApp('../blocks/RolesPermissions2/src/'),
resolveApp('../blocks/Settings2/src/'),
resolveApp('../blocks/ProductDescription/src/'),
resolveApp('../blocks/FileAttachment/src/'),
resolveApp('../blocks/Wishlist2/src/'),
resolveApp('../blocks/VisualAnalytics/src/'),
resolveApp('../blocks/FormApprovalWorkflow/src/'),
resolveApp('../blocks/DocumentOpener/src/'),
resolveApp('../blocks/EmailNotifications/src/'),
resolveApp('../blocks/SaveAsPdf/src/'),
resolveApp('../blocks/Trending/src/'),
resolveApp('../blocks/GeolocationReporting/src/'),
resolveApp('../blocks/SubscriptionBilling/src/'),
resolveApp('../blocks/Analytics3/src/'),
resolveApp('../blocks/AdvancedSearch/src/'),
resolveApp('../blocks/TermsAndConditions/src/'),
resolveApp('../blocks/Chatbot6/src/'),
resolveApp('../blocks/ContentManagement/src/'),
resolveApp('../blocks/CustomisableUserProfiles/src/'),
resolveApp('../blocks/CarouselDisplay/src/'),
resolveApp('../blocks/LiveStreaming/src/'),
resolveApp('../blocks/Maps/src/'),
resolveApp('../blocks/NavigationMenu/src/'),
resolveApp('../blocks/TwilioIntegration2/src/'),
resolveApp('../blocks/FormulaExecution2/src/'),
resolveApp('../blocks/DubaipulseIntegration2/src/'),
resolveApp('../blocks/InvestmentDiscountedCashFlowdcfTheIncomeApproach2/src/'),
resolveApp('../blocks/ValuationEngine2/src/'),
resolveApp('../blocks/ResidualApproachtheIncomeApproach2/src/'),
resolveApp('../blocks/ComparabletheMarketApproach2/src/'),
resolveApp('../blocks/DepreciatedReplacementCostcontractors2/src/'),
resolveApp('../blocks/InvestmentTraditionalcapitalizationgrossRentalMultiplicationtheIncomeApproach2/src/'),
resolveApp('../blocks/PaymentIntegration5/src/'),
resolveApp('../blocks/DubaiLandDepartmentdldApi2/src/'),
resolveApp('../blocks/ComparisonPage2/src/'),
resolveApp('../blocks/DataImportexportcsv/src/'),
resolveApp('../blocks/BlogPostsManagement/src/'),
resolveApp('../blocks/CameraAccess/src/'),
resolveApp('../blocks/News12/src/'),
resolveApp('../blocks/ValuationCertificateReport3/src/'),
resolveApp('../blocks/SummaryReportTemplateWithoutAi3/src/'),
resolveApp('../blocks/DetailedSummaryReportsGraph/src/'),
resolveApp('../blocks/DetailedSummaryReportWithoutAi3/src/'),

  resolveApp('src'),
  resolveApp('../components/src'),
  resolveApp('../framework/src'),
  resolveApp('../../node_modules/react-native-elements'),
  resolveApp('../../node_modules/react-native-vector-icons'),
  resolveApp('../../node_modules/react-native-ratings'),
  resolveApp('../../node_modules/react-native-image-picker'),
  resolveApp('../../node_modules/react-native-check-box'),
  resolveApp('../blocks/restClient/src'),
  resolveApp('../blocks/alert/src'),
  resolveApp('../blocks/adapters/src'),
  resolveApp('../blocks/info-page/src')
]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )
  config.module.rules[0].include = appIncludes
  config.module.rules[1] = null
  config.module.rules[2].oneOf[1].include = appIncludes
  config.module.rules[2].oneOf[1].options.plugins = [
    require.resolve('babel-plugin-react-native-web'),
  ].concat(config.module.rules[2].oneOf[1].options.plugins)
  config.module.rules = config.module.rules.filter(Boolean)
  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' })
  )
  return config
}