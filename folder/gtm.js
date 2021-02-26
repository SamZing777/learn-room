
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"352",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"blisspoint_fpc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"US\"==UD.Config.marketplace_country.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires\\x3d\"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"blisspoint_fpc\",",["escape",["macro",22],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript\u003Eif(\"undefined\"===typeof fbq){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");try{\"US\"!==window.OneTrust.getGeolocationData().country||\"CA\"!==window.OneTrust.getGeolocationData().state||window.OnetrustActiveGroups.includes(\"C0004\")||\nfbq(\"dataProcessingOptions\",[\"LDU\"],1,1E3)}catch(b){}",["escape",["macro",28],8,16],"||fbq(\"init\",\"1457291081167286\");fbq(\"init\",\"399727027340013\");",["escape",["macro",28],8,16],"||fbq(\"trackSingle\",\"1457291081167286\",\"PageView\");fbq(\"trackSingle\",\"399727027340013\",\"PageView\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",8],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",8]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",94,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",23],12],"\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__awct",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"uRnACK7x898BEO3puaID",
      "vtp_rdp":false,
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":429
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableUrlPassthrough":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":430
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-7YMFEFLR6Q",
      "vtp_enableUserProperties":true,
      "tag_id":439
    },{
      "function":"__cl",
      "tag_id":440
    },{
      "function":"__cl",
      "tag_id":441
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":442
    },{
      "function":"__cl",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":445
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":446
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":448
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":450
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":451
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":452
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":454
    },{
      "function":"__cl",
      "tag_id":455
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_415_340","164179_415_392","164179_415_46"],
      "vtp_uniqueTriggerId":"164179_415",
      "tag_id":456
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_340",
      "tag_id":457
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_392",
      "tag_id":459
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_46",
      "tag_id":461
    },{
      "function":"__cl",
      "tag_id":462
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_424_92","164179_424_431"],
      "vtp_uniqueTriggerId":"164179_424",
      "tag_id":463
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_92",
      "tag_id":464
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_431",
      "tag_id":466
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_426_425","164179_426_1"],
      "vtp_uniqueTriggerId":"164179_426",
      "tag_id":467
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_425",
      "tag_id":468
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_1",
      "tag_id":470
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026!",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector('[data-purpose\\x3d\"course-price-text\"]');a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+(?:\\.\\d+)?\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a[0]),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a[0],{nonInteraction:1}));",["escape",["macro",28],8,16],"||fbq(\"track\",\"AddToCart\",\n{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",39],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",39],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",40],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],",is_first_paid_purchase:",["escape",["macro",23],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",42],8,16],",customerEmail:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",50],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",41],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",42],8,16],",discountCode:",["escape",["macro",44],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",45],8,16],"\/100,unitPriceLessTax:",["escape",["macro",45],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",96,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",40],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",44],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\",config:{ycl_use_non_cookie_storage:!0}});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_65f22gux\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"SignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":398
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0f51\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":400
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",104,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etwq(\"track\",\"Signup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",104,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etwq(\"track\",\"Purchase\",{value:",["escape",["macro",52],8,16],",currency:\"USD\",num_items:\"1\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,f,b,c,e){a.mejord||(b=a.mejord=function(){b.tq.push(arguments)},a._mejord||(a._mejord=b),b.tq=[],b.version=\"2.0.14-1\",a=\"script\",(c=d.createElement(a)).async=!0,c.src=f,(e=d.getElementsByTagName(a)[0]).parentNode.insertBefore(c,e))}(window,document,\"\/\/tag.measured.com\/10031\/x474bb8\/mejord-gear.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emejord(\"init\",\"10031\/x474bb8\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":406
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){var a=[];",["escape",["macro",39],8,16],"\u0026\u0026(a=",["escape",["macro",39],8,16],".map(function(b){return{id:b.buyableId}}));return a}_mejord.helper={adaptProductsArray:function(a){if(a)return a.map(function(b){return{id:b}})},getEventParams:function(){return{products:c()||[],product:c()[0]||{},orderId:",["escape",["macro",40],8,16],"||\"\",revenue:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",value:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",shippingValue:0,tax:0,discount:0,currency:\"USD\",customerId:",["escape",["macro",2],8,16],"||\n\"\",custom:{adwords:{dimensionCohortIndex:21}}}}}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){a=c[a]?c[a]():[];for(var b=0;b\u003Ca.length;b++){var e=a[b];window.dataLayer=window.dataLayer||[];var f=_mejord.helper.getEventParams();mejord(\"track\",e,f)}}var c={\"gtm.js\":function(){var a=[\"pageview\"];return a},transaction_purchase:function(){var a=[\"checkout\"];return a}};d(",["escape",["macro",48],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"isMember\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":412
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar courseId=document.body.getAttribute(\"data-clp-course-id\")||\"NA\";mejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(){fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:courseId,content_type:\"product\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026mejord(\"ready\",\"facebook\",function(b){fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"LinkshareSignupClick\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"SignupSuccess\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":420
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"fullstory.com\";window._fs_script=\"edge.fullstory.com\/s\/fs.js\";window._fs_org=\"ZD1RP\";window._fs_namespace=\"FS\";\n(function(e,k,l,m,h,f,a,d){l in e?e.console\u0026\u0026e.console.log\u0026\u0026e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(a=e[l]=function(c,b,g){a.q?a.q.push([c,b,g]):a._api(c,b,g)},a.q=[],f=k.createElement(m),f.async=1,f.crossOrigin=\"anonymous\",f.src=\"https:\/\/\"+_fs_script,d=k.getElementsByTagName(m)[0],d.parentNode.insertBefore(f,d),a.identify=function(c,b,g){a(h,{uid:c},g);b\u0026\u0026a(h,b,g)},a.setUserVars=function(c,b){a(h,c,b)},a.event=function(c,b,g){a(\"event\",{n:c,p:b},g)},a.anonymize=\nfunction(){a.identify(!1)},a.shutdown=function(){a(\"rec\",!1)},a.restart=function(){a(\"rec\",!0)},a.log=function(c,b){a(\"log\",[c,b])},a.consent=function(c){a(\"consent\",!arguments.length||c)},a.identifyAccount=function(c,b){f=\"account\";b=b||{};b.acctId=c;a(f,b)},a.clearUserCookie=function(){},a.setVars=function(c,b){a(\"setVars\",[c,b])},a._w={},d=\"XMLHttpRequest\",a._w[d]=e[d],d=\"fetch\",a._w[d]=e[d],e[d]\u0026\u0026(e[d]=function(){return a._w[d].apply(this,arguments)}),a._v=\"1.3.0\")})(window,document,window._fs_namespace,\n\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":434
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_426($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_424($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_415($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*discovery1.*useast1\\.dev-ud\\.com",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,71]],
    [["if",6,7],["add",4,8,9,10,14,19,20,24,27,28,29,31,34,35,38,41,43,45,67,87,88,93,94,100,103,106]],
    [["if",4,5],["add",5],["block",3,7,16,37,39,42,72,1,77,82,85,89,2,95,96,98,101,104]],
    [["if",5],["add",5,16,46,47,77,101,104,48,49,51,52,53,57,60,61,65,66,69]],
    [["if",5,9],["unless",8],["add",6,15]],
    [["if",10,11],["add",7]],
    [["if",5,12],["add",11,80]],
    [["if",13,14,15],["add",12,81]],
    [["if",5,16],["add",13,23,26]],
    [["if",5,17],["add",15]],
    [["if",5,18],["add",15]],
    [["if",5,19],["add",15],["block",82]],
    [["if",5,17,20],["add",15]],
    [["if",5,21],["add",15]],
    [["if",5,22],["add",15]],
    [["if",5,23],["add",15]],
    [["if",5,24],["add",15]],
    [["if",5,25],["add",15]],
    [["if",15,30],["add",17,31,33,75,92]],
    [["if",15,31],["add",18]],
    [["if",5,32],["add",21]],
    [["if",33],["add",22]],
    [["if",5,34],["add",25,31,32,36,38,40,44,78,91,99,102,105]],
    [["if",5,35],["add",30]],
    [["if",5,36],["add",30]],
    [["if",5,37],["add",30]],
    [["if",0,5,38],["add",37,39,85,95,98]],
    [["if",0,5],["unless",1,39],["add",42,59,82,89,0]],
    [["if",5,40],["add",50]],
    [["if",42],["unless",41],["add",54,62]],
    [["if",3],["unless",43],["add",55,63]],
    [["if",3],["add",56,64]],
    [["if",3,44],["add",58]],
    [["if",3,45],["add",68]],
    [["if",3,46],["add",70]],
    [["if",5,26],["add",72],["block",16,82,90,97,101,104]],
    [["if",5,47],["unless",48],["add",72]],
    [["if",49,50],["add",72]],
    [["if",5,52],["add",1]],
    [["if",54,55],["add",73]],
    [["if",3,56],["add",74]],
    [["if",57,58],["add",76]],
    [["if",6,59],["add",79]],
    [["if",6,7,38],["add",83,84]],
    [["if",62,63,64,65],["add",86]],
    [["if",63,65],["add",90]],
    [["if",54,66],["add",2]],
    [["if",54,67],["add",96]],
    [["if",54,68],["add",97]],
    [["if",5,69],["add",107,108,109]],
    [["if",6,7,69],["add",109]],
    [["if",3,56,69],["add",110]],
    [["if",15,30,69],["add",111]],
    [["if",54,69,70],["add",112]],
    [["if",13,14,15,69],["add",113]],
    [["if",5,34,69],["add",114]],
    [["if",5,71],["add",115]],
    [["if",5,27],["block",16,82,90,97,101,104]],
    [["if",5,28],["block",16,82,90,97,101,104]],
    [["if",5,29],["block",16,82,90,97,101,104]],
    [["if",5,39],["block",72,1]],
    [["if",5,51],["block",72]],
    [["if",5,53],["block",1]],
    [["if",5,60],["block",82]],
    [["if",5,61],["block",82]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.sj=b.prototype},oa=this||self,sa=function(a){if(a&&a!=oa)return qa(a.document);null===ra&&(ra=qa(oa.document));return ra},va=/^[\w+/_-]+[=]{0,2}$/,ra=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&va.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.D={};this.o=!1;this.J={}};Ba.prototype.get=function(a){return this.D["dust."+a]};Ba.prototype.set=function(a,b){this.o||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Ba.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ca=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Da=function(a,b){b="dust."+b;a.o||a.J.hasOwnProperty(b)||delete a.D[b]};var Fa=function(a){this.o=new Ba;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ca=Fa.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Fa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Aa(a)?this.g[Number(a)]=b:this.o.set(a,b)};ca.get=function(a){return"length"===a?this.length():Aa(a)?this.g[Number(a)]:this.o.get(a)};ca.length=function(){return this.g.length};ca.Ub=function(){for(var a=Ca(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Fa(a)};var Ha=function(a,b){Aa(b)?delete a.g[Number(b)]:Da(a.o,b)};ca=Fa.prototype;ca.pop=function(){return this.g.pop()};
ca.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.g.shift()};ca.splice=function(a,b,c){return new Fa(this.g.splice.apply(this.g,arguments))};ca.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ca.has=function(a){return Aa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ia=function(){function a(f,g){if(b[f]){if(b[f].Ic+g>b[f].max)throw Error("Quota exceeded");b[f].Ic+=g}}var b={},c=void 0,d=void 0,e={si:function(f){c=f},Mf:function(){c&&a(c,1)},vi:function(f){d=f},Ta:function(f){d&&a(d,f)},Mi:function(f,g){b[f]=b[f]||{Ic:0};b[f].max=g},Uh:function(f){return b[f]&&b[f].Ic||0},reset:function(){b={}},Gh:a};e.onFnConsume=e.si;e.consumeFn=e.Mf;e.onStorageConsume=e.vi;e.consumeStorage=e.Ta;e.setMax=e.Mi;e.getConsumed=e.Uh;e.reset=e.reset;e.consume=e.Gh;return e};var Ja=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Ba;this.g=this.J=void 0};Ja.prototype.add=function(a,b){La(this,a,b,!1)};var La=function(a,b,c,d){if(!a.o.o)if(a.s.Ta(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ja.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ta(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ja.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ja.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ma=function(a){var b=new Ja(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var Pa={},Qa=function(a,b){Pa[a]=Pa[a]||[];Pa[a][b]=!0},Ra=function(a){for(var b=[],c=Pa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Sa=function(){},Ta=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ua=function(a){return"number"==typeof a&&!isNaN(a)},Va=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Qa("TAGGING",4):Qa("TAGGING",5);return b},Wa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Xa=function(a,b){if(a&&Va(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ya=function(a,b){if(!Ua(a)||!Ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ab=function(a,b){for(var c=new $a,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},cb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},hb=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ib=
function(a){return Math.round(Number(a))||0},jb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},kb=function(a){var b=[];if(Va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},lb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},mb=function(){return(new Date).getTime()},$a=function(){this.prefix="gtm.";this.values={}};$a.prototype.set=function(a,b){this.values[this.prefix+a]=b};$a.prototype.get=function(a){return this.values[this.prefix+a]};
var pb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},qb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},rb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},tb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},vb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},wb=function(a,b){var c=p;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Wa(b,d))return}return d},xb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},yb=function(a){var b=[];cb(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var zb=function(a,b){Ba.call(this);this.N=a;this.na=b};na(zb,Ba);zb.prototype.toString=function(){return this.N};zb.prototype.Ub=function(){return new Fa(Ca(this))};zb.prototype.g=function(a,b){a.s.Mf();return this.na.apply(new Ab(this,a),Array.prototype.slice.call(arguments,1))};zb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Db=function(a,b){for(var c,d=0;d<b.length&&!(c=Bb(a,b[d]),c instanceof ya);d++);return c},Bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof zb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},Ab=function(a,b){this.o=a;this.g=b},B=function(a,b){var c=a.g;return Va(b)?Bb(c,b):b},F=function(a){return a.o.N};var Eb=function(){Ba.call(this)};na(Eb,Ba);Eb.prototype.Ub=function(){return new Fa(Ca(this))};var Fb={control:function(a,b){return new ya(a,B(this,b))},fn:function(a,b,c){var d=this.g,e=B(this,b);if(!(e instanceof Fa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ta(a.length+f.length);return new zb(a,function(){return function(g){var h=Ma(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=B(this,l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Fa(l));var u=Db(h,f);if(u instanceof ya)return"return"===u.g?u.o:u}}())},list:function(a){var b=this.g.s;b.Ta(arguments.length);for(var c=new Fa,d=0;d<arguments.length;d++){var e=B(this,arguments[d]);"string"===typeof e&&b.Ta(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Eb,d=0;d<arguments.length-1;d+=2){var e=B(this,arguments[d])+"",f=B(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ta(g);c.set(e,f)}return c},undefined:function(){}};var Gb=function(){this.s=Ia();this.g=new Ja(this.s)},Hb=function(a,b,c){var d=new zb(b,c);d.o=!0;a.g.set(b,d)};Gb.prototype.Nc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Gb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=Bb(this.g,arguments[c]);return b};Gb.prototype.D=function(a,b){var c=Ma(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=Bb(c,arguments[e]);return d};var Ib=function(a){if(a instanceof Ib)return a;this.sa=a};Ib.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Kb=function(a){if(null==a)return String(a);var b=Jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ob=function(a){if(!a||"object"!=Kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Lb(a,"constructor")&&!Lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Lb(a,b)},G=function(a,b){var c=b||("array"==Kb(a)?[]:{}),d;for(d in a)if(Lb(a,d)){var e=a[d];"array"==Kb(e)?("array"!=Kb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Ob(e)?(Ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ca(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Wa(d,h);if(-1<l)return e[l];if(h instanceof Fa){var m=[];d.push(h);e.push(m);for(var n=h.Ub(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof Eb){var u={};d.push(h);e.push(u);f(h,u);return u}if(h instanceof zb){var r=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var w=b?b.s:Ia(),y=new Ja(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Wa(d,
h);if(-1<l)return e[l];if(Va(h)||hb(h)){var m=new Fa([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Ob(h)){var q=new Eb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var u=new zb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Qb(B(this,v[w]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(u);f(h,u);return u}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Tb=function(a){if(void 0===a||Va(a)||Ob(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Fa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Fa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Fa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Fa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ha(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Fa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ha(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new ya("break"),Xb=new ya("continue"),Yb=function(a,b){return B(this,a)+B(this,b)},Zb=function(a,b){return B(this,a)&&B(this,b)},$b=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(!(c instanceof Fa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Wa(Vb,b)){var d=Rb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Fa){if(a.has(b)){var e=a.get(b);if(e instanceof
zb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Wa(Ub.supportedMethods,b)){var g=Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof zb||a instanceof Eb){if(a.has(b)){var h=a.get(b);if(h instanceof zb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof zb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof
Ib&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=B(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=B(this,b);c.set(a,d);return d},cc=function(a){var b=Ma(this.g),c=Db(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},dc=function(){return Wb},ec=function(a){for(var b=B(this,a),c=0;c<b.length;c++){var d=
B(this,b[c]);if(d instanceof ya)return d}},fc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=B(this,arguments[c+1]);La(b,d,e,!0)}}},gc=function(){return Xb},hc=function(a,b,c){var d=new Fa;b=B(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,B(this,f))},ic=function(a,b){return B(this,a)/B(this,b)},jc=function(a,b){a=B(this,a);b=B(this,b);var c=
a instanceof Ib,d=b instanceof Ib;return c||d?c&&d?a.sa==b.sa:!1:a==b},kc=function(a){for(var b,c=0;c<arguments.length;c++)b=B(this,arguments[c]);return b};function lc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Db(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}
function mc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(f){return f},c);if(b instanceof Eb||b instanceof Fa||b instanceof zb){var d=b.Ub(),e=d.length();return lc(a,function(){return e},function(f){return d.get(f)},c)}}
var nc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){d.set(a,e);return d},b,c)},oc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)},rc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){d.set(a,e);return d},b,c)},sc=
function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)};
function qc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Fa)return lc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var uc=function(a,b,c,d){function e(n,q){for(var u=0;u<f.length();u++){var r=f.get(u);q.add(r,n.get(r))}}var f=B(this,a);if(!(f instanceof Fa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=B(this,d);var h=Ma(g);for(e(g,h);Bb(h,b);){var l=Db(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ma(g);e(h,m);Bb(m,c);h=m}},vc=function(a){a=B(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},yc=function(a,b){var c;a=B(this,a);b=B(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Eb||a instanceof Fa||a instanceof zb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof Ib)return;return c},zc=function(a,b){return B(this,a)>B(this,
b)},Ac=function(a,b){return B(this,a)>=B(this,b)},Bc=function(a,b){a=B(this,a);b=B(this,b);a instanceof Ib&&(a=a.sa);b instanceof Ib&&(b=b.sa);return a===b},Cc=function(a,b){return!Bc.call(this,a,b)},Dc=function(a,b,c){var d=[];B(this,a)?d=B(this,b):c&&(d=B(this,c));var e=Db(this.g,d);if(e instanceof ya)return e},Ec=function(a,b){return B(this,a)<B(this,b)},Fc=function(a,b){return B(this,a)<=B(this,b)},Gc=function(a,b){return B(this,a)%B(this,b)},Hc=function(a,b){return B(this,a)*B(this,b)},Kc=function(a){return-B(this,
a)},Lc=function(a){return!B(this,a)},Mc=function(a,b){return!jc.call(this,a,b)},Nc=function(){return null},Oc=function(a,b){return B(this,a)||B(this,b)},Pc=function(a,b){var c=B(this,a);B(this,b);return c},Qc=function(a){return B(this,a)},Rc=function(a){return Array.prototype.slice.apply(arguments)},Sc=function(a){return new ya("return",B(this,a))},Tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
zb||a instanceof Fa||a instanceof Eb)&&a.set(b,c);return c},Uc=function(a,b){return B(this,a)-B(this,b)},Vc=function(a,b,c){a=B(this,a);var d=B(this,b),e=B(this,c);if(!Va(d)||!Va(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===B(this,d[h]))if(f=B(this,e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=B(this,e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Wc=function(a,b,c){return B(this,a)?B(this,b):B(this,c)},Xc=function(a){a=B(this,a);return a instanceof zb?"function":typeof a},Yc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Zc=function(a,b,c,d){var e=B(this,d);if(B(this,c)){var f=Db(this.g,e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;B(this,a);){var g=Db(this.g,e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}B(this,
b)}},$c=function(a){return~Number(B(this,a))},ad=function(a,b){return Number(B(this,a))<<Number(B(this,b))},bd=function(a,b){return Number(B(this,a))>>Number(B(this,b))},cd=function(a,b){return Number(B(this,a))>>>Number(B(this,b))},dd=function(a,b){return Number(B(this,a))&Number(B(this,b))},ed=function(a,b){return Number(B(this,a))^Number(B(this,b))},fd=function(a,b){return Number(B(this,a))|Number(B(this,b))};var hd=function(){this.g=new Gb;gd(this)};hd.prototype.Nc=function(a){return kd(this.g.o(a))};
var md=function(a,b){return kd(ld.g.D(a,b))},gd=function(a){var b=function(d,e){var f=a.g,g=String(e);Fb.hasOwnProperty(d)&&Hb(f,g||d,Fb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Hb(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,cc);c(4,dc);c(5,ec);c(52,fc);c(6,gc);c(9,ec);c(50,hc);c(10,ic);c(12,jc);c(13,kc);c(47,nc);c(54,oc);c(55,pc);c(63,uc);c(64,rc);c(65,sc);c(66,tc);c(15,vc);c(16,yc);c(17,yc);c(18,zc);c(19,Ac);c(20,Bc);c(21,Cc);c(22,Dc);
c(23,Ec);c(24,Fc);c(25,Gc);c(26,Hc);c(27,Kc);c(28,Lc);c(29,Mc);c(45,Nc);c(30,Oc);c(32,Pc);c(33,Pc);c(34,Qc);c(35,Qc);c(46,Rc);c(36,Sc);c(43,Tc);c(37,Uc);c(38,Vc);c(39,Wc);c(40,Xc);c(41,Yc);c(42,Zc);c(58,$c);c(57,ad);c(60,bd);c(61,cd);c(56,dd);c(62,ed);c(59,fd)},od=function(){var a=ld,b=nd();Hb(a.g,"require",b)},pd=function(a,b){a.g.g.N=b};
function kd(a){if(a instanceof ya||a instanceof zb||a instanceof Fa||a instanceof Eb||a instanceof Ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{og:a("consent"),fd:a("consent_always_fire"),Ee:a("convert_case_to"),Fe:a("convert_false_to"),Ge:a("convert_null_to"),He:a("convert_true_to"),Ie:a("convert_undefined_to"),Yi:a("debug_mode_metadata"),Sa:a("function"),bh:a("instance_name"),eh:a("live_only"),fh:a("malware_disabled"),gh:a("metadata"),aj:a("original_activity_id"),bj:a("original_vendor_template_id"),ih:a("once_per_event"),zf:a("once_per_load"),Df:a("setup_tags"),
Ef:a("tag_id"),Ff:a("teardown_tags")}}();
var rd=[],sd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},td=function(a){return sd[a]},ud=/[\x00\x22\x26\x27\x3c\x3e]/g;var yd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,zd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Ad=function(a){return zd[a]};
rd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(yd,Ad)+"'"}};var Gd=/['()]/g,Hd=function(a){return"%"+a.charCodeAt(0).toString(16)};rd[12]=function(a){var b=
encodeURIComponent(String(a));Gd.lastIndex=0;return Gd.test(b)?b.replace(Gd,Hd):b};var Id=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Md=function(a){return Jd[a]};rd[16]=function(a){return a};var Od;
var Pd=[],Qd=[],Rd=[],Sd=[],Td=[],Ud={},Vd,Wd,Xd,Yd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ud[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Jf&&b.Jf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===qd.fd.toString()&&a[f]){}return void 0!==d?d(e):Od(c,e,b)},ae=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$d(a[e],b,c));return d},$d=function(a,b,c){if(Va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($d(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Pd[f];if(!g||b.Zd(g))return;c[f]=!0;try{var h=ae(g,b,c);h.vtp_gtmEventId=b.id;d=Zd(h,b);Xd&&(d=Xd.Ih(d,h))}catch(y){b.Zf&&
b.Zf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[$d(a[l],b,c)]=$d(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=$d(a[n],b,c);Wd&&(m=m||q===Wd.Ac);d.push(q)}return Wd&&m?Wd.Lh(d):d.join("");case "escape":d=$d(a[1],b,c);if(Wd&&Va(a[1])&&"macro"===a[1][0]&&Wd.ei(a))return Wd.Ai(d);d=String(d);for(var u=2;u<a.length;u++)rd[a[u]]&&(d=rd[a[u]](d));return d;case "tag":var r=a[1];if(!Sd[r])throw Error("Unable to resolve tag reference "+
r+".");return d={Qf:a[2],index:r};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=be(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},be=function(a,b,c){try{return Vd(ae(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ce=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(ce,Error);function de(a,b){if(Va(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)de(a[c],b[c])}};var ee=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ee,Error);var ge=function(){return function(a,b){a instanceof ee||(a=new ee(a,fe));b&&a.g.push(b);throw a;}};function fe(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ua(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=null,ke=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];he=ie(a);for(var e=0;e<Qd.length;e++){var f=Qd[e],g=je(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Sd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},je=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=he(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=he(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ie=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=be(Rd[c],a));return b[c]}};var le={Ih:function(a,b){b[qd.Ee]&&"string"===typeof a&&(a=1==b[qd.Ee]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Ge)&&null===a&&(a=b[qd.Ge]);b.hasOwnProperty(qd.Ie)&&void 0===a&&(a=b[qd.Ie]);b.hasOwnProperty(qd.He)&&!0===a&&(a=b[qd.He]);b.hasOwnProperty(qd.Fe)&&!1===a&&(a=b[qd.Fe]);return a}};var me=function(){this.g={}};function ne(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ce(c,d,g);}}function oe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ne(e,b,d,g);ne(f,b,d,g)}}}};var se=function(a){var b=pe.F,c=this;this.o=new me;this.g={};var d={},e=oe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});cb(a,function(f,g){var h={};cb(g,function(l,m){var n=qe(l,m);h[l]=n.assert;d[l]||(d[l]=n.O)});c.g[f]=function(l,m){var n=h[l];if(!n)throw re(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},ue=function(a){return te.g[a]||
function(){}};function qe(a,b){var c=Yd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=re;try{return Zd(c)}catch(d){return{assert:function(e){throw new ce(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function re(a,b,c){return new ce(a,b,c)};var ve=!1;var we={};we.Ti=jb('');we.Oh=jb('');var xe=ve,ye=we.Oh,ze=we.Ti;
var Qe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Re=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Qe(b,"/*")&&(b=b.slice(0,-2));Qe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Se=/^[a-z0-9-]+$/i,Te=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ve=function(a,b){var c;if(!(c=!Ue(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Se.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Te.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),u;var r=l.hostname,t=q;if(0!==t.indexOf("*."))u=r.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=r.toLowerCase().indexOf(t.toLowerCase());u=-1===v?!1:r.length===t.length?
!0:r.length!==t.length+v?!1:"."===r[v-1]}if(u){var w=n.slice(n.indexOf("/"));h=Re(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ue=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var We,Xe=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.xh&&(l["fix_"+m]=!0),l.Sf=l.Sf||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var t=h.slice(r.length);if(t.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,ca:r.ca,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var t={};r[2].replace(e,function(v,w,y,x,A){var z=y||x||A||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=z;t[w]=C.textContent||C.innerText||z});return{tagName:r[1],ca:t,dd:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},u=function(){for(var r in n)if(n[r].test(h)){var t=q[r]();return t?(t.type=t.type||r,t.text=h.substr(0,t.length),h=h.slice(t.length),t):null}};l.Sf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Yf=function(){return this[this.length-1]};v.ae=function(C){var D=this.Yf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.Hh=
function(C){for(var D=0,E;E=this[D];D++)if(E.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.dd=r.test(C.tagName)||C.dd);return C},y=u,x=function(){h="</"+v.pop().tagName+">"+h},A={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.ae("TABLE")?(h="<TBODY>"+h,z()):l.lj&&t.test(D)&&v.Hh(D)?v.ae(D)?x():(h="</"+C.tagName+">"+h,z()):C.dd||v.push(C)},endTag:function(C){v.Yf()?l.Qh&&!v.ae(C.tagName)?x():v.pop():l.Qh&&(y(),z())}},z=function(){var C=h,D=w(y());h=C;if(D&&
A[D.type])A[D.type](D)};u=function(){z();return w(y())}}();return{append:function(r){h+=r},Di:u,pj:function(r){for(var t;(t=u())&&(!r[t.type]||!1!==r[t.type](t)););},clear:function(){var r=h;h="";return r},qj:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.tj="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.rj=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);We=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,r){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(r,q[t],t)}function d(q,u,r){for(var t in q)q.hasOwnProperty(t)&&u.call(r,t,q[t])}function e(q,u){d(u,
function(r,t){q[r]=t});return q}function f(q,u){q=q||{};d(u,function(r,t){b(q[r])||(q[r]=t)});return q}function g(q){try{return m.call(q)}catch(r){var u=[];c(q,function(t){u.push(t)});return u}}var h={ph:a,qh:a,rh:a,sh:a,yh:a,zh:function(q){return q},done:a,error:function(q){throw q;},Gi:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(r,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,v):
r.removeAttribute(w)}function u(r,t){var v=r.ownerDocument;e(this,{root:r,options:t,jc:v.defaultView||v.parentWindow,mb:v,Uc:We("",{xh:!0}),Hd:[r],pe:"",qe:v.createElement(r.nodeName),cc:[],Wa:[]});q(this.qe,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.Wa,arguments);for(var r;!this.Lc&&this.Wa.length;)r=this.Wa.shift(),"function"===typeof r?this.Eh(r):this.Ae(r)};u.prototype.Eh=function(r){var t={type:"function",value:r.name||r.toString()};this.he(t);r.call(this.jc,this.mb);this.$f(t)};
u.prototype.Ae=function(r){this.Uc.append(r);for(var t,v=[],w,y;(t=this.Uc.Di())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Wi(v);w&&this.Zh(t);y&&this.$h(t)};u.prototype.Wi=function(r){var t=this.Bh(r);t.Hf&&(t.Xd=this.pe+t.Hf,this.pe+=t.Bi,this.qe.innerHTML=t.Xd,this.Ui())};u.prototype.Bh=function(r){var t=this.Hd.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.ca){if(!/^noscript$/i.test(x.tagName)){var A=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.ca.id&&"ps-style"!==x.ca.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.dd?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{uj:r,raw:v.join(""),Hf:w.join(""),Bi:y.join("")}};u.prototype.Ui=function(){for(var r,t=[this.qe];b(r=t.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.Hd[q(r,"id")]=r,q(r,"id",null));var w=r.parentNode&&q(r.parentNode,"proxyof");
w&&this.Hd[w].appendChild(r)}t.unshift.apply(t,g(r.childNodes))}};u.prototype.Zh=function(r){var t=this.Uc.clear();t&&this.Wa.unshift(t);r.src=r.ca.src||r.ca.dj;r.src&&this.cc.length?this.Lc=r:this.he(r);var v=this;this.Vi(r,function(){v.$f(r)})};u.prototype.$h=function(r){var t=this.Uc.clear();t&&this.Wa.unshift(t);r.type=r.ca.type||r.ca.TYPE||"text/css";this.Xi(r);t&&this.write()};u.prototype.Xi=function(r){var t=this.Dh(r);this.ci(t);r.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=r.content:
t.appendChild(this.mb.createTextNode(r.content)))};u.prototype.Dh=function(r){var t=this.mb.createElement(r.tagName);t.setAttribute("type",r.type);d(r.ca,function(v,w){t.setAttribute(v,w)});return t};u.prototype.ci=function(r){this.Ae('<span id="ps-style"/>');var t=this.mb.getElementById("ps-style");t.parentNode.replaceChild(r,t)};u.prototype.he=function(r){r.wi=this.Wa;this.Wa=[];this.cc.unshift(r)};u.prototype.$f=function(r){r!==this.cc[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.cc.shift(),this.write.apply(this,r.wi),!this.cc.length&&this.Lc&&(this.he(this.Lc),this.Lc=null))};u.prototype.Vi=function(r,t){var v=this.Ch(r),w=this.Oi(v),y=this.options.ph;r.src&&(v.src=r.src,this.Ji(v,w?y:function(){t();y()}));try{this.bi(v),r.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Ch=function(r){var t=this.mb.createElement(r.tagName);d(r.ca,function(v,w){t.setAttribute(v,w)});r.content&&(t.text=r.content);return t};u.prototype.bi=function(r){this.Ae('<span id="ps-script"/>');
var t=this.mb.getElementById("ps-script");t.parentNode.replaceChild(r,t)};u.prototype.Ji=function(r,t){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);t()}})};u.prototype.Oi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.Gi&&r.src&&r.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.qh(),w.stream=u.apply(null,w),y.rh())}function u(w,y,x){function A(E){E=x.zh(E);v.write(E);x.sh(E)}v=new n(w,x);v.id=r++;v.name=x.name||v.id;var z=w.ownerDocument,C={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=v.jc.onerror||a;v.jc.onerror=function(E,I,P){x.error({msg:E+
" - "+I+":"+P});D.apply(v.jc,arguments)};v.write(y,function(){e(z,C);v.jc.onerror=D;x.done();v=null;q()});return v}var r=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.nj?w[0]:w;var A=[w,y,x];w.zi={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.yh(A);t.push(A);v||q();return w.zi},{streams:{},oj:t,fj:n})}();Xe=l.postscribe}})();var Ye=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ze={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ye.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof zb?n="Fn":l instanceof Fa?n="List":l instanceof Eb?n="DustMap":
l instanceof Ib&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ze[h]||h)+".");}}};function $e(a){return""+a}
function af(a,b){var c=[];return c};var bf=function(a,b){var c=new zb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=B(this,d[e]);return b.apply(this,d)});c.o=!0;return c},cf=function(a,b){var c=new Eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ta(e)?c.set(d,bf(a+"_"+d,e)):(Ua(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var df=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Eb;return d=cf("AssertApiSubject",c)};var ef=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Eb;
return d=cf("AssertThatSubject",c)};function ff(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var hf=function(){for(var a=Math,b=gf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=ff(a[e].bind(a)))}return c};var jf=function(a){var b;return b};var kf=function(a){var b;return b};var lf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var mf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var nf=function(a){H(F(this),["message:?string"],arguments);};var of=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Ya(a,b)};var pf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.wh.apply(null,Array.prototype.slice.call(arguments,1))};var qf=function(){pf(this,"read_container_data");var a=new Eb;a.set("containerId",'GTM-7BF3X');a.set("version",'352');a.set("environmentName",'');a.set("debugMode",xe);a.set("previewMode",ze);a.set("environmentMode",ye);a.o=!0;return a};var rf=function(){return(new Date).getTime()};var sf=function(a){if(null===a)return"null";if(a instanceof Fa)return"array";if(a instanceof zb)return"function";if(a instanceof Ib){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var tf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(xe||ze)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var uf=function(a){return ib(Qb(a,this.g))};var vf=function(a){return Number(Qb(a,this.g))};var wf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var xf=function(a,b,c){var d=null,e=!1;return e?d:null};var gf="floor ceil round max min abs pow sqrt".split(" ");var yf=function(){var a={};return{Vh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ni:function(b,c){a[b]=c},reset:function(){a={}}}},zf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var Af=function(){this.g={};this.o={};};Af.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
Af.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ta(b)?bf(a,b):cf(a,b)};
var Bf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ta(c)?bf(b,c):cf(b,c)};function Cf(){var a={};return a};var J={Hb:"_ee",Gd:"_syn",ej:"_uei",Ad:"_eu",cj:"_pci",od:"event_callback",uc:"event_timeout",aa:"gtag.config",Ca:"gtag.get",oa:"purchase",cb:"refund",Pa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",xg:"view_cart",Me:"add_to_wishlist",Ba:"view_item",Le:"view_promotion",Ke:"select_promotion",jd:"select_item",oc:"view_item_list",Je:"add_payment_info",wg:"add_shipping_info",Fa:"value_key",Ea:"value_callback",ka:"allow_ad_personalization_signals",wd:"restricted_data_processing",xb:"allow_google_signals",
la:"cookie_expires",Ab:"cookie_update",Eb:"session_duration",ra:"user_properties",Ha:"transport_url",P:"ads_data_redaction",lf:"user_data",vc:"first_party_collection",C:"ad_storage",K:"analytics_storage",gd:"region",De:"wait_for_update"};J.qf=[J.oa,J.cb,J.Pa,J.$a,J.ab,J.xg,J.Me,J.Ba,J.Le,J.Ke,J.oc,J.jd,J.Je,J.wg];J.pf=[J.ka,J.xb,J.Ab];J.rf=[J.la,J.uc,J.Eb];var K=function(a){Qa("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={};var Jf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Kf;a:{var Lf=oa.navigator;if(Lf){var Mf=Lf.userAgent;if(Mf){Kf=Mf;break a}}Kf=""}var Nf=function(a){return-1!=Kf.indexOf(a)};var Pf=function(a,b,c){this.g=c===Of?a:""};Pf.prototype.toString=function(){return this.g.toString()};var Qf=function(a){return a instanceof Pf&&a.constructor===Pf?a.g:"type_error:SafeHtml"},Of={},Rf=new Pf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Of);var Sf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Qf(Rf);return!c.parentElement}),Tf=function(a,b){if(Sf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Qf(b)};var Uf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Pf(c,null,Of)};var p=window,M=document,Vf=navigator,Wf=M.currentScript&&M.currentScript.src,Xf=function(a,b){var c=p[a];p[a]=void 0===c?b:c;return p[a]},Yf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Zf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Gf(),g=f?f.createScriptURL(a):a;e=new If(g,Hf);d.src=e instanceof If&&e.constructor===If?e.g:"type_error:TrustedResourceUrl";
var h=sa(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Yf(d,b);c&&(d.onerror=c);var l=sa();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},$f=function(){if(Wf){var a=Wf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ag=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Yf(c,b);void 0!==a&&(c.src=a);return c},bg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},cg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},dg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){p.setTimeout(a,
0)},eg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},fg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},gg=function(a){var b=M.createElement("div"),c=Uf("A<div>"+a+"</div>");Tf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},hg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},ig=function(a){Vf.sendBeacon&&Vf.sendBeacon(a)||bg(a)},jg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var mg={},ng=function(){return void 0==mg.gtag_cs_api?!1:mg.gtag_cs_api};var og=[];function pg(){var a=Xf("google_tag_data",{});a.ics||(a.ics={entries:{},set:qg,update:rg,addListener:sg,notifyListeners:tg,active:!1,usedDefault:!1});return a.ics}
function qg(a,b,c,d,e,f){var g=pg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=u;q&&p.setTimeout(function(){h[a]===u&&u.quiet&&(u.quiet=!1,ug(a),tg(),Qa("TAGGING",2))},f)}}}
function rg(a,b){var c=pg();c.active=!0;if(void 0!=b){var d=vg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=vg(a);f.quiet?(f.quiet=!1,ug(a)):g!==d&&ug(a)}}function sg(a,b){og.push({Lf:a,Rh:b})}function ug(a){for(var b=0;b<og.length;++b){var c=og[b];Va(c.Lf)&&-1!==c.Lf.indexOf(a)&&(c.bg=!0)}}function tg(a){for(var b=0;b<og.length;++b){var c=og[b];if(c.bg){c.bg=!1;try{c.Rh({Kf:a})}catch(d){}}}}
var vg=function(a){var b=pg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},wg=function(a){return(pg().entries[a]||{}).initial},xg=function(a){return!(pg().entries[a]||{}).quiet},yg=function(){return ng()?pg().active:!1},zg=function(){return pg().usedDefault},Ag=function(a,b){pg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!xg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,
b){if(!1===vg(b)){var c=!1;Ag([b],function(d){!c&&vg(b)&&(a(d),c=!0)})}};function Dg(a){for(var b=[],c=0;c<Eg.length;c++){var d=a(Eg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Eg=[J.C,J.K],Fg=function(a){var b=a[J.gd];b&&K(40);var c=a[J.De];c&&K(41);for(var d=Va(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.gd&&f!==J.De)if(-1<Wa(Eg,f)){var g=f,h=a[f],l=d[e];pg().set(g,h,l,"NG","NG-LA",c)}else{}},Gg=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(-1<
Wa(Eg,c)){var d=c,e=a[c];pg().update(d,e)}else{}pg().notifyListeners(b)},Hg=function(a){var b=vg(a);return void 0!=b?b:!0},Ig=function(){return"G1"+Dg(vg)},Jg=function(a,b){Ag(a,b)},Kg=function(a,b){Bg(a,b)};var Mg=function(a){return Lg?M.querySelectorAll(a):null},Ng=function(a,b){if(!Lg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Og=!1;if(M.querySelectorAll)try{var Pg=M.querySelectorAll(":root");Pg&&1==Pg.length&&Pg[0]==M.documentElement&&(Og=!0)}catch(a){}var Lg=Og;var Qg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!p.getComputedStyle)return!0;var c=p.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=p.getComputedStyle(d,
null))}return!1};var Zg=/:[0-9]+$/,$g=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ah(a.protocol)||ah(p.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
p.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||p.location.hostname).replace(Zg,"").toLowerCase());return bh(a,b,c,d,e)},bh=function(a,b,c,d,e){var f,g=ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Zg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Qa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Wa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$g(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ah=function(a){return a?a.replace(":",
"").toLowerCase():""},dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eh=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Qa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Zg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},fh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var gh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),hh=new RegExp(/support|noreply/i),ih=["SCRIPT","IMG","SVG","PATH","BR"],jh=["BR"];function kh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=kh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var nh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ih.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=jh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,u=[],r=0;r<q.length;r++){var t=q[r],v=t.textContent;t.value&&(v=t.value);if(v){var w=v.match(gh);if(w){var y=w[0],x;if(p.location){var A=bh(p.location,"host",!0);x=0<=y.toLowerCase().indexOf(A)}else x=!1;x||u.push({element:t,ed:y})}}}var z;for(var C=[],D=10<u.length?"3":n.status,E=0;E<u.length&&
10>E;E++){var I=u[E].element,P=u[E].ed,Q=!1;C.push({ed:P,querySelector:kh(I),tagName:I.tagName,isVisible:!Qg(I),type:1,Sc:!!Q})}return{elements:C,status:D}};var pe={},O=null,Bh=Math.random();pe.F="GTM-7BF3X";pe.Ec="2h0";pe.$i="";pe.pg="ChAIgLLdgQYQ6LCotKHhuNJoEiIAdecMKEnmWqS8U74vntOTY1gfbL/rkk/K1H2wD/7Q3PauGgKDxg\x3d\x3d";var Ch={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Dh={__paused:!0,__tg:!0},Eh;for(Eh in Ch)Ch.hasOwnProperty(Eh)&&(Dh[Eh]=!0);var Fh="www.googletagmanager.com/gtm.js";
var Gh=Fh,Hh=jb(""),Ih=null,Jh=null,Kh="//www.googletagmanager.com/a?id="+pe.F+"&cv=352",Lh={},Mh={},Nh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Oh={},Ph=new $a,Qh={},Rh={},Uh={name:"dataLayer",set:function(a,b){G(xb(a,b),Qh);Sh()},get:function(a){return Th(a,2)},reset:function(){Ph=new $a;Qh={};Sh()}},Th=function(a,b){return 2!=b?Ph.get(a):Vh(a)},Vh=function(a,b){var c=a.split(".");b=b||[];for(var d=Qh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Wa(b,d))return}return d},Wh=function(a,b){Rh.hasOwnProperty(a)||(Ph.set(a,b),G(xb(a,b),Qh),Sh())},Sh=function(a){cb(Rh,function(b,c){Ph.set(b,c);G(xb(b,
void 0),Qh);G(xb(b,c),Qh);a&&delete Rh[b]})},Xh=function(a,b,c){Oh[a]=Oh[a]||{};var d=1!==c?Vh(b):Ph.get(b);"array"===Kb(d)||"object"===Kb(d)?Oh[a][b]=G(d):Oh[a][b]=d},Yh=function(a,b){if(Oh[a])return Oh[a][b]},Zh=function(a,b){Oh[a]&&delete Oh[a][b]};var bi={},ci=function(a,b){if(p._gtmexpgrp&&p._gtmexpgrp.hasOwnProperty(a))return p._gtmexpgrp[a];void 0===bi[a]&&(bi[a]=Math.floor(Math.random()*b));return bi[a]};var di=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ei(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var gi=function(a,b,c,d){return fi(d)?ei(a,String(b||document.cookie),c):[]},ji=function(a,b,c,d,e){if(fi(e)){var f=hi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ii(f,function(g){return g.Mc},b);if(1===f.length)return f[0].id;f=ii(f,function(g){return g.$b},c);return f[0]?f[0].id:void 0}}};function ki(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=gi(b,f,!1,d).indexOf(c)}
var oi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!fi(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=li(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.oi);g=e(g,"samesite",
c.Hi);c.Ki&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=mi(),q=void 0,u=!1,r=0;r<n.length;++r){var t="none"!==n[r]?n[r]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}u=!0;if(!ni(t,c.path)&&ki(v,a,b,c.za))return 0}if(q&&!u)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return ni(m,c.path)?1:ki(g,a,b,c.za)?0:1},pi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return oi(a,b,c)};
function ii(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function hi(a,b,c){for(var d=[],e=gi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Mc:1*l[0]||1,$b:1*l[1]||1}))}}return d}
var li=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},qi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ri=/(^|\.)doubleclick\.net$/i,ni=function(a,b){return ri.test(document.location.hostname)||"/"===b&&qi.test(a)},mi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ri.test(e)||qi.test(e)||a.push("none");
return a},fi=function(a){if(!ng()||!a||!yg())return!0;if(!xg(a))return!1;var b=vg(a);return null==b?!0:!!b};var si=function(){for(var a=Vf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=p.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^di(a)&2147483647,Math.round(mb()/1E3)].join(".")},vi=function(a,b,c,d,e){var f=ti(b);return ji(a,f,ui(c),d,e)},wi=function(a,b,c,d){var e=""+ti(c),f=ui(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ti=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ui=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function xi(a,b,c){var d,e=a.Zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||mb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var yi=["1"],zi={},Ci=function(a){var b=Ai(a.prefix),c=zi[b];c&&Bi(b,c,a)},Ei=function(a){var b=Ai(a.prefix);if(!zi[b]&&!Di(b,a.path,a.domain)){var c=si();if(0===Bi(b,c,a)){var d=Xf("google_tag_data",{});d._gcl_au?Qa("GTM",57):d._gcl_au=c}Di(b,a.path,a.domain)}};function Bi(a,b,c){var d=wi(b,"1",c.domain,c.path),e=xi(c);e.za="ad_storage";return pi(a,d,e)}function Di(a,b,c){var d=vi(a,b,c,yi,"ad_storage");d&&(zi[a]=d);return d}function Ai(a){return(a||"_gcl")+"_au"};function Fi(){for(var a=Gi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Hi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Gi,Ii;
function Ji(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ii[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Gi=Gi||Hi();Ii=Ii||Fi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ki;var Oi=function(){var a=Li,b=Mi,c=Ni(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){cg(M,"mousedown",d);cg(M,"keyup",d);cg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Pi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ni().decorators.push(f)},Qi=function(a,b,c){for(var d=Ni().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==M.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var u=g.placement;void 0==u&&(u=g.fragment?2:1);u===b&&rb(e,g.callback())}}return e},Ni=function(){var a=Xf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ri=/(.*?)\*(.*?)\*(.*)/,Si=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ti=/^(?:www\.|m\.|amp\.)+/,Ui=/([^?#]+)(\?[^#]*)?(#.*)?/;function Zi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var aj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Gi=Gi||Hi();Ii=Ii||Fi();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,u=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=u>>2,w=(u&3)<<4|r>>4,y=(r&15)<<2|t>>6,x=t&63;q||(x=64,n||(y=64));l.push(Gi[v],Gi[w],Gi[y],Gi[x])}g=l.join("");f.call(e,g)}}var A=b.join("*");return["1",$i(A),
A].join("*")},$i=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ki)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ki=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ki[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},cj=function(){return function(a){var b=eh(p.location.href),
c=b.search.replace("?",""),d=$g(c,"_gl",!1,!0)||"";a.query=bj(d)||{};var e=ch(b,"fragment").match(Zi("_gl"));a.fragment=bj(e&&e[3]||"")||{}}},dj=function(a){var b=cj(),c=Ni();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(rb(d,e.query),a&&rb(d,e.fragment));return d},bj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ri.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===$i(h,n)){l=!0;break a}l=!1}if(l){for(var q={},u=h?h.split("*"):[],r=0;r<u.length;r+=2)q[u[r]]=Ji(u[r+1]);return q}}}}catch(t){}};function ej(a,b,c,d){function e(n){var q=n,u=Zi(a).exec(q),r=q;if(u){var t=u[2],v=u[4];r=u[1];v&&(r=r+t+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ui.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Qi(b,1,c),e=Qi(b,2,c),f=Qi(b,3,c);if(tb(d)){var g=aj(d);c?gj("_gl",g,a):hj("_gl",g,a,!1)}if(!c&&tb(e)){var h=aj(e);hj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gj(m,n,q);break a}}"string"==typeof q&&ej(m,n,q,void 0)}}
function hj(a,b,c,d){if(c.href){var e=ej(a,b,c.href,void 0===d?!1:d);Jf.test(e)&&(c.href=e)}}
function gj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ej(a,b,c.action);Jf.test(m)&&(c.action=m)}}}
var Li=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fj(e,e.hostname)}}catch(g){}},Mi=function(a){try{if(a.action){var b=ch(eh(a.action),"host");fj(a,b)}}catch(c){}},ij=function(a,b,c,d){Oi();Pi(a,b,"fragment"===c?2:1,!!d,!1)},jj=function(a,b){Oi();Pi(a,[bh(p.location,"host",!0)],b,!0,!0)},kj=function(){var a=M.location.hostname,b=Si.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ti,""),l=e.replace(Ti,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},lj=function(a,b){return!1===a?!1:a||b||kj()};var mj=/^\w+$/,nj=/^[\w-]+$/,oj=/^~?[\w-]+$/,pj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},qj=function(){if(!ng()||!yg())return!0;var a=vg("ad_storage");return null==a?!0:!!a},rj=function(a,b){xg("ad_storage")?qj()?a():Cg(a,"ad_storage"):b?Qa("TAGGING",3):Bg(function(){rj(a,!0)},["ad_storage"])},tj=function(a){return sj(a).map(function(b){return b.Na})},sj=function(a){var b=[];if(!M.cookie)return b;var c=gi(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{rb:d.rb},e++){d.rb=uj(c[e]);var f=vj(c[e]);if(d.rb&&f){var g=Xa(b,function(h){return function(l){return l.Na===h.rb}}(d));g&&g.timestamp<f?g.timestamp=f:g||b.push({Na:d.rb,timestamp:f})}}return wj(b)};function xj(a){return a&&"string"==typeof a&&a.match(mj)?a:"_gcl"}
var zj=function(){var a=eh(p.location.href),b=ch(a,"query",!1,void 0,"gclid"),c=ch(a,"query",!1,void 0,"gclsrc"),d=ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||$g(e,"gclid",!1,void 0);c=c||$g(e,"gclsrc",!1,void 0)}return yj(b,c,d)},yj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(nj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Aj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Cj=function(a){var b=zj();rj(function(){Bj(b,a)})};
function Bj(a,b,c){function d(l,m){var n=Dj(l,e);n&&pi(n,m,f)}b=b||{};var e=xj(b.prefix);c=c||mb();var f=xi(b,c,!0);f.za="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.vj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ej=function(a,b){var c=dj(!0);rj(function(){for(var d=xj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pj[f]){var g=Dj(f,d),h=c[g];if(h){var l=Math.min(vj(h),mb()),m;b:{for(var n=l,q=gi(g,M.cookie,void 0,"ad_storage"),u=0;u<q.length;++u)if(vj(q[u])>n){m=!0;break b}m=!1}if(!m){var r=xi(b,l,!0);r.za="ad_storage";pi(g,h,r)}}}}Bj(yj(c.gclid,c.gclsrc),b)})},Dj=function(a,b){var c=pj[a];if(void 0!==c)return b+c},vj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function uj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fj=function(a,b,c,d,e){if(Va(b)){var f=xj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Dj(a[l],f);if(m){var n=gi(m,M.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};rj(function(){ij(g,b,c,d)})}},wj=function(a){return a.filter(function(b){return oj.test(b.Na)})},Gj=function(a,b){for(var c=xj(b.prefix),d={},e=0;e<a.length;e++)pj[a[e]]&&(d[a[e]]=pj[a[e]]);rj(function(){cb(d,function(f,g){var h=gi(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=vj(l),
n={};n[f]=[uj(l)];Bj(n,b,m)}})})};function Hj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ij=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(yg()){var c=zj();if(Hj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);jj(function(){return d},3);jj(function(){var e={};return e._up="1",e},1)}}},Jj=function(){var a;if(qj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].xe]||(g[b[h].xe]=[]),g[b[h].xe].push({timestamp:l[1],Na:l[2]}))}a=g}else a={};return a};var Kj=/^\d+\.fls\.doubleclick\.net$/,Lj=!1;function Mj(a,b){xg(J.C)?Hg(J.C)?a():Cg(a,J.C):b?K(42):Kg(function(){Mj(a,!0)},[J.C])}function Nj(a){var b=eh(p.location.href),c=ch(b,"host",!1);if(c&&c.match(Kj)){var d=ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Oj(a,b,c){if("aw"==a||"dc"==a){var d=Nj("gcl"+a);if(d)return d.split(".")}var e=xj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Hg(J.C)&&c,g;g=zj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Dj(a,e);return h?tj(h):[]}
var Pj=function(a){var b=Nj("gac");if(b)return!Hg(J.C)&&a?"0":decodeURIComponent(b);var c=Jj(),d=[];cb(c,function(e,f){f=wj(f);for(var g=[],h=0;h<f.length;h++)g.push(f[h].Na);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Rj=function(a,b){if(Lj)Qj(a,b,"dc");else{var c=zj().dc||[];Mj(function(){Ei(b);var d=zi[Ai(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;ig(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ci(b)})}},Qj=function(a,b,c){var d=zj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Aj(h,c)||e.push({Na:f,Uf:h});!g||c&&"dc"!==c||e.push({Na:g,Uf:"ds"});Mj(function(){Ei(b);var l=zi[Ai(b.prefix)],m=!1;if(l&&0<e.length)for(var n=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var u=e[q],r=u.Na,t=u.Uf,v=(b.prefix||"_gcl")+"."+t+"."+r;if(!n[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+t;ig(w);
m=n[v]=!0}}null==a&&(a=m);a&&l&&Ci(b)})};var Sj=/[A-Z]+/,Tj=/\s/,Uj=function(a){if(k(a)&&(a=lb(a),!Tj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Wj=function(a){for(var b={},c=0;c<a.length;++c){var d=Uj(a[c]);d&&(b[d.id]=d)}Vj(b);var e=[];cb(b,function(f,g){e.push(g)});return e};
function Vj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xj=function(){var a=!1;return a};var Zj=function(a,b,c,d){return(2===Yj()||d||"http:"!=p.location.protocol?a:b)+c},Yj=function(){var a=$f(),b;if(1===a)a:{var c=Gh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nk=function(a){return Hg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},ok=function(){var a;if(!(a=Hh)){var b;if(!0===p._gtmdgs)b=!0;else{var c=Vf&&Vf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ib("1");return ci(1,100)<d?ci(2,2):-1},pk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var qk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var vk=function(a){var b=Th("gtm.allowlist")||Th("gtm.whitelist");b&&K(9);var c=b&&vb(kb(b),rk),d=Th("gtm.blocklist")||Th("gtm.blacklist");d||(d=Th("tagTypeBlacklist"))&&
K(3);d?K(8):d=[];uk()&&(d=kb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Wa(kb(d),"google")&&K(2);var e=d&&vb(kb(d),sk),f={};return function(g){var h=g&&g[qd.Sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Mh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Wa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
Wa(c,l[q])){K(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var r=0<=Wa(e,h);if(r)u=r;else{var t=ab(e,l||[]);t&&K(10);u=t}}var v=!m||u;v||!(0<=Wa(l,"sandboxedScripts"))||c&&-1!==Wa(c,"sandboxedScripts")||(v=ab(e,tk));return f[h]=v}},uk=function(){return qk.test(p.location&&p.location.hostname)};var wk={active:!0,isAllowed:function(){return!0}},xk=function(a){var b=O.zones;return b?b.checkState(pe.F,a):wk},yk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var zk=function(){},Ak=function(){};var Bk=!1,Ck=0,Dk=[];function Ek(a){if(!Bk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bk=!0;for(var e=0;e<Dk.length;e++)N(Dk[e])}Dk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Fk(){if(!Bk&&140>Ck){Ck++;try{M.documentElement.doScroll("left"),Ek()}catch(a){p.setTimeout(Fk,50)}}}var Gk=function(a){Bk?a():Dk.push(a)};var Ik=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;Hk(this,a,b)},Jk=function(a,b,c,d){if(Dh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},Kk=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},Lk=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},Hk=function(a,b,c){Ta(b)&&a.Nb(b);c&&p.setTimeout(function(){return Lk(a)},Number(c))};
Ik.prototype.Nb=function(a){var b=this,c=qb(function(){return N(function(){a(pe.F,b.J)})});this.g?c():this.D.push(c)};var Mk=function(a){a.s++;return qb(function(){a.o++;a.N&&a.o>=a.s&&Lk(a)})};var Nk=function(){function a(d){return!Ua(d)||0>d?0:d}if(!O._li&&p.performance&&p.performance.timing){var b=p.performance.timing.navigationStart,c=Ua(Uh.get("gtm.start"))?Uh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Jh-b)}}};var Rk={},Sk=function(){return p.GoogleAnalyticsObject&&p[p.GoogleAnalyticsObject]},Tk=!1;
var Uk=function(a){p.GoogleAnalyticsObject||(p.GoogleAnalyticsObject=a||"ga");var b=p.GoogleAnalyticsObject;if(p[b])p.hasOwnProperty(b)||K(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);p[b]=c}Nk();return p[b]},Vk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Sk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Wk=function(a){};
var Yk=function(a){},Xk=function(){return p.GoogleAnalyticsObject||"ga"},Zk=function(a,b){return function(){var c=Sk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var dl=function(){return"&tc="+Sd.filter(function(a){return a}).length},gl=function(){2022<=el().length&&fl()},il=function(){hl||(hl=p.setTimeout(fl,500))},fl=function(){hl&&(p.clearTimeout(hl),hl=void 0);void 0===jl||kl[jl]&&!ll&&!ml||(nl[jl]||ol.fi()||0>=pl--?(K(1),nl[jl]=!0):(ol.Ei(),bg(el()),kl[jl]=!0,ql=rl=sl=ml=ll=""))},el=function(){var a=jl;if(void 0===a)return"";var b=Ra("GTM"),c=Ra("TAGGING");return[tl,kl[a]?"":"&es=1",ul[a],b?"&u="+b:"",c?"&ut="+c:"",dl(),ll,ml,sl?sl:"",rl,ql,"&z=0"].join("")},
vl=function(){return[Kh,"&v=3&t=t","&pid="+Ya(),"&rv="+pe.Ec].join("")},wl="0.005000">Math.random(),tl=vl(),xl=function(){tl=vl()},kl={},ll="",ml="",ql="",rl="",sl="",jl=void 0,ul={},nl={},hl=void 0,ol=function(a,b){var c=0,d=0;return{fi:function(){if(c<a)return!1;mb()-d>=b&&(c=0);return c>=a},Ei:function(){mb()-d>=b&&(c=0);c++;d=mb()}}}(2,1E3),pl=1E3,yl=function(a,b,c){if(wl&&!nl[a]&&b){a!==jl&&(fl(),jl=a);var d,e=String(b[qd.Sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ll=ll?ll+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ud[g]?"1":"2")+d;ql=ql?ql+"."+h:"&ti="+h;il();gl()}},zl=function(a,b,c){if(wl&&!nl[a]){a!==jl&&(fl(),jl=a);var d=c+b;ml=ml?ml+"."+d:"&epr="+d;il();gl()}},Al=function(a,b,c){};
var Bl=function(){return!1},Cl=function(){var a={};return function(b,c,d){}};function Dl(a,b,c,d){var e=Sd[a],f=El(a,b,c,d);if(!f)return null;var g=$d(e[qd.Df],c,[]);if(g&&g.length){var h=g[0];f=Dl(h.index,{onSuccess:f,onFailure:1===h.Qf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function El(a,b,c,d){function e(){if(f[qd.fh])h();else{var w=ae(f,c,[]);var A=Jk(c.Ka,String(f[qd.Sa]),Number(f[qd.Ef]),w[qd.gh]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"5");Kk(c.Ka,A,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"6");Kk(c.Ka,A,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;yl(c.id,f,"1");var C=function(){var E=mb()-D;yl(c.id,f,"7");Kk(c.Ka,A,"exception",E);z||(z=!0,h())};var D=mb();try{Zd(w,c)}catch(E){C(E)}}}var f=Sd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Zd(f))return null;var m=$d(f[qd.Ff],c,[]);if(m&&m.length){var n=m[0],q=Dl(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Qf?l:q}if(f[qd.zf]||f[qd.ih]){var u=f[qd.zf]?Td:
c.Pi,r=g,t=h;if(!u[a]){e=qb(e);var v=Fl(a,u,e);g=v.onSuccess;h=v.onFailure}return function(){u[a](r,t)}}return e}function Fl(a,b,c){var d=[],e=[];b[a]=Gl(d,e,c);return{onSuccess:function(){b[a]=Hl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Il;for(var f=0;f<e.length;f++)e[f]()}}}function Gl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hl(a){a()}function Il(a,b){b()};var Ll=function(a,b){for(var c=[],d=0;d<Sd.length;d++)if(a[d]){var e=Sd[d];var f=Mk(b.Ka);try{var g=Dl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Ud[n];l.call(h,{jg:m,cg:q?q.priorityOverride||0:0,Nc:g})}else Jl(d,b),f()}catch(t){f()}}var u=b.Ka;u.N=!0;u.o>=u.s&&Lk(u);c.sort(Kl);for(var r=0;r<c.length;r++)c[r].Nc();
return 0<c.length};function Kl(a,b){var c,d=b.cg,e=a.cg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.jg,h=b.jg;f=g>h?1:g<h?-1:0}return f}function Jl(a,b){if(!wl)return;var c=function(d){var e=b.Zd(Sd[d])?"3":"4",f=$d(Sd[d][qd.Df],b,[]);f&&f.length&&c(f[0].index);yl(b.id,Sd[d],e);var g=$d(Sd[d][qd.Ff],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ml=!1,Rl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ml)return!1;Ml=!0}var d=xk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=xk(Number.MAX_SAFE_INTEGER)}wl&&!nl[b]&&jl!==b&&(fl(),jl=b,ql=ll="",ul[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,il());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Zd:vk(d.isAllowed),Pi:[],Zf:function(){K(6)},Jf:Nl(b),Ka:new Ik(f,
g)};Ol(b,h.Ka);var l=ke(h);e&&(l=Pl(l));var m=Ll(l,h);"gtm.js"!==c&&"gtm.sync"!==c||Yk(pe.F);switch(c){case "gtm.init":m&&K(20)}return Ql(l,m)};function Nl(a){return function(b){wl&&(Tb(b)||Al(a,"input",b))}}
function Ol(a,b){Xh(a,"event",1);Xh(a,"ecommerce",1);Xh(a,"gtm");Xh(a,"eventModel");}function Pl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ch[String(Sd[c][qd.Sa])]&&(b[c]=!0);return b}function Ql(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Sd[c]&&!Dh[String(Sd[c][qd.Sa])])return!0;return!1}function Sl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return eh(""+c+b).href}}function Tl(a,b){return Ul()?Sl(a,b):void 0}function Ul(){var a=!1;return a};var Vl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Wl=function(a){var b=new Vl;b.eventModel=a;return b},Xl=function(a,b){a.targetConfig=b;return a},Yl=function(a,b){a.containerConfig=b;return a},Zl=function(a,b){a.remoteConfig=b;return a},$l=function(a,b){a.globalConfig=
b;return a},am=function(a,b){a.onSuccess=b;return a},bm=function(a,b){a.setContainerTypeLoaded=b;return a},cm=function(a,b){a.getContainerTypeLoaded=b;return a},dm=function(a,b){a.onFailure=b;return a};Vl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var em=function(a){function b(e){cb(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];cb(c,function(e){d.push(e)});return d};var fm;if(3===pe.Ec.length)fm="g";else{var gm="G";fm=gm}
var hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:fm,OPT:"o"},im=function(a){var b=pe.F.split("-"),c=b[0].toUpperCase(),d=hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pe.Ec.length){var g="w";f="2"+g}else f="";return f+d+pe.Ec+e};var jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var km=function(){return Nf("iPhone")&&!Nf("iPod")&&!Nf("iPad")};Nf("Opera");Nf("Trident")||Nf("MSIE");Nf("Edge");!Nf("Gecko")||-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")||Nf("Trident")||Nf("MSIE")||Nf("Edge");-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")&&Nf("Mobile");Nf("Macintosh");Nf("Windows");Nf("Linux")||Nf("CrOS");var lm=oa.navigator||null;lm&&(lm.appVersion||"").indexOf("X11");Nf("Android");km();Nf("iPad");Nf("iPod");km()||Nf("iPad")||Nf("iPod");Kf.toLowerCase().indexOf("kaios");var mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var nm=function(){};var om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},pm=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};na(pm,nm);
var rm=function(a){return"function"===typeof a.o.__tcfapi||null!=qm(a)};
pm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};pm.prototype.removeEventListener=function(a){a&&a.listenerId&&sm(this,"removeEventListener",null,a.listenerId)};
var um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?tm(a.purpose.legitimateInterests,
b)&&tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},tm=function(a,b){return!(!a||!a[b])},sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(qm(a)){vm(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},qm=function(a){if(a.g)return a.g;a.g=mm(a.o,"__tcfapiLocator");return a.g},vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},jm(a.o,a.s))};var wm=!0;var xm={1:0,3:0,4:0,7:3,9:3,10:3};function ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var zm=ym("",550),Am=ym("",500);function Bm(){var a=O.tcf||{};return O.tcf=a}
var Cm=function(a,b){this.s=a;this.g=b;this.o=mb();},Dm=function(a){},Em=function(a){},Km=function(){var a=Bm(),b=new pm(p,wm?3E3:-1),c=new Cm(b,a);if((Fm()?!0===p.gtag_enable_tcf_support:!1!==p.gtag_enable_tcf_support)&&!a.active&&("function"===typeof p.__tcfapi||rm(b))){a.active=!0;a.bc={};Gm();var d=null;wm?d=p.setTimeout(function(){Hm(a);Im(a);d=null},Am):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Hm(a),Im(a),Dm(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Jm(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in xm)if(xm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=om(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:um(l,"1",0):!1}else g[h]=um(e,h,xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.bc=f,Im(a),Dm(c))}}),Em(c)}catch(e){d&&(clearTimeout(d),d=null),Hm(a),Im(a)}}};function Hm(a){a.type="e";a.tcString="tcunavailable";wm&&(a.bc=Jm())}function Gm(){var a={};Fg((a.ad_storage="denied",a.wait_for_update=zm,a))}
var Fm=function(){var a=!1;a=!0;return a};function Jm(){var a={},b;for(b in xm)xm.hasOwnProperty(b)&&(a[b]=!0);return a}function Im(a){var b={};Gg((b.ad_storage=a.bc["1"]?"granted":"denied",b))}
var Lm=function(){var a=Bm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Mm=function(){var a=Bm();return a.active?a.tcString||"":""},Nm=function(){var a=Bm();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Om=function(a){if(!xm.hasOwnProperty(String(a)))return!0;var b=Bm();return b.active&&b.bc?!!b.bc[String(a)]:!0};var Pm=!1;function Qm(a){var b=String(p.location).split(/[?#]/)[0],c=pe.pg||p._CONSENT_MODE_SALT;return a?c?String(di(b+a+c)):"0":""}
function Rm(a){function b(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var v;v=Pm&&g&&(!yg()||Hg(J.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!t[v]){t[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(yg()){var A=Hg(J.C);y("gcs",Ig());r&&y("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=
""+si());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Hg(J.C)){var z=tj("_gcl_aw");y("gclaw",z.join("."))}y("url",String(p.location).split(/[?#]/)[0]);y("dclid",Sm(d,n));!A&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Mm()),y("gdpr",Nm());"1"===dj(!1)._up&&y("gtm_up","1");y("gclid",Sm(d,
l));y("gclsrc",m);y("gtm",im(!e));Pm&&g&&Hg(J.C)&&(Ei(f||{}),y("auid",zi[Ai(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");ig(C)}}var c=!!a.Md,d=!!a.xa,e=a.U,f=void 0===a.Jc?{}:a.Jc,g=void 0===a.Rc?!0:a.Rc,h=zj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),u=yg();if(q||u)u?Kg(function(){b();Hg(J.C)||Cg(function(r){return b(!0,r.Kf)},
J.C)},[J.C]):b()}function Sm(a,b){var c=a&&!Hg(J.C);return b&&c?"0":b}var Cn=function(){var a=!0;Om(7)&&Om(9)&&Om(10)||(a=!1);var b=!0;b=!1;b&&!Bn()&&(a=!1);return a},Bn=function(){var a=!0;Om(3)&&Om(4)||(a=!1);return a};var $n=!1;function ao(){var a=O;return a.gcq=a.gcq||new bo}
var co=function(a,b,c){ao().register(a,b,c)},eo=function(a,b,c,d){ao().push("event",[b,a],c,d)},fo=function(a,b){ao().push("config",[a],b)},go=function(a,b,c,d){ao().push("get",[a,b],c,d)},ho=function(a){return ao().getRemoteConfig(a)},io={},jo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},ko=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},bo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
lo=function(a,b){var c=Uj(b);return a.D[c.containerId]=a.D[c.containerId]||new jo},mo=function(a,b,c){if(b){var d=Uj(b);if(d&&1===lo(a,b).status){lo(a,b).status=2;var e={};wl&&(e.timeoutId=p.setTimeout(function(){K(38);il()},3E3));a.push("require",[e],d.containerId);io[d.containerId]=mb();if(Xj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=p.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Tl(c,g)||h;Zf(l)}}}},no=function(a,b,c,d){if(d.U){var e=lo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),n=G(a.o),q=Th("gtm.uniqueEventId"),u=Uj(d.U).prefix,r=cm(bm(dm(am($l(Zl(Yl(Xl(Wl(g),h),l),m),n),function(){
zl(q,u,"2");}),function(){zl(q,u,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{zl(q,u,"1");f(d.U,b,d.s,r)}catch(t){zl(q,u,"4");}}}};ca=bo.prototype;
ca.register=function(a,b,c){var d=lo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Uj(a),f=io[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Th("gtm.uniqueEventId"),m=h,n=mb()-g;if(wl&&!nl[l]){l!==jl&&(fl(),jl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);rl=rl?rl+","+q:"&cl="+q}delete io[e.containerId]}this.flush()}};ca.push=function(a,b,c,d){var e=Math.floor(mb()/1E3);mo(this,c,b[0][J.Ha]||this.o[J.Ha]);$n&&c&&lo(this,c).g&&(d=!1);this.g.push(new ko(a,e,c,b,d));d||this.flush()};ca.insert=function(a,b,c){var d=Math.floor(mb()/1E3);0<this.g.length?this.g.splice(1,0,new ko(a,d,c,b,!1)):this.g.push(new ko(a,d,c,b,!1))};
ca.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)$n?!e.U||lo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==lo(this,e.U).status&&!a){$n&&this.g.push.apply(this.g,c);return}wl&&p.clearTimeout(e.g[0].timeoutId);break;case "set":cb(e.g[0],function(u,r){G(xb(u,r),b.o)});break;case "config":var f=e.g[0],g=!!f[J.zc];delete f[J.zc];var h=lo(this,e.U),l=Uj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||no(this,J.aa,f,e);h.g=!0;delete f[J.Hb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);$n&&(d=!0);break;case "event":no(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[J.Fa]=e.g[0],n[J.Ea]=e.g[1],n);no(this,J.Ca,q,e)}this.g.shift()}$n&&(this.g.push.apply(this.g,c),d&&this.flush())};ca.getRemoteConfig=function(a){return lo(this,a).remoteConfig};function oo(a,b){var c=this;};function po(a,b,c){};function qo(a,b,c,d){};function ro(a){};var so=function(a,b,c){function d(f,g){var h=f[g];h=jg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||eg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},to=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},uo=function(a,b,c){to(a)[b]=c},vo=function(a,b,c,d){var e=to(a),f=pb(e,b,d);e[b]=c(f)},wo=function(a,b,c){var d=to(a);return pb(d,b,c)};var xo={},yo=[];
var Fo=function(a,b){};

function Io(a,b){};var Jo=/^\s*$/,Ko,Lo=!1;
function Wo(a,b){}function Xo(a,b,c){};var Yo=!!p.MutationObserver,Zo=void 0,$o=function(a){if(!Zo){var b=function(){var c=M.body;if(c)if(Yo)(new MutationObserver(function(){for(var e=0;e<Zo.length;e++)N(Zo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;cg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Zo.length;e++)N(Zo[e])}))})}};Zo=[];M.body?b():N(b)}Zo.push(a)};var bp=["www.youtube.com","www.youtube-nocookie.com"],cp,dp=!1,ep=0;
function op(a,b){}function pp(a,b){
return!0};function qp(a,b,c){};function rp(a,b){var c;return c};function sp(a){};function tp(a){};var up=!1,vp=[];function wp(){if(!up){up=!0;for(var a=0;a<vp.length;a++)N(vp[a])}}var xp=function(a){up?N(a):vp.push(a)};function yp(a){H(F(this),["listener:!Fn"],arguments);pf(this,"process_dom_events","window","load");xp(Qb(a))};function zp(a){var b;return b};function Ap(a,b){var c;var e=!1;var f=Pb(c,this.g,e);void 0===f&&void 0!==c&&K(45);return f};function Bp(a){var b;var f=!1;var g=Pb(b,this.g,f);void 0===g&&void 0!==b&&K(45);return g};function Cp(a,b){var c=null,d=!1;
return Pb(c,this.g,d)};function Dp(a){var b;var h=!1;return Pb(b,this.g,h)};var Ep=function(a){var b;return b};function Fp(a,b){b=void 0===b?!0:b;var c;return c};function Gp(a){var b=null;return b};function Hp(a,b){var c;return c};function Ip(a,b){var c;return c};function Jp(a){var b="";return b};function Kp(a,b){var c;return c};function Lp(a){var b="";return b};function Mp(){pf(this,"get_user_agent");return p.navigator.userAgent};function Np(a,b){};var Op={};
function Pp(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);pf(this,"inject_script",a);var e=this.g,f=function(){b instanceof zb&&b.s(e)},g=function(){c instanceof zb&&c.s(e)};if(!d){Zf(a,f,g);return}var h=d;Op[h]?(Op[h].onSuccess.push(f),Op[h].onFailure.push(g)):(Op[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Op[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);return 0}},
g=function(){for(var l=Op[h].onFailure,m=0;m<l.length;m++)N(l[m]);Op[h]=null},Zf(a,f,g));};function Qp(a){var b=!0;return b};var Rp=function(){return!1},Sp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Tp(){};function Up(a){var b=void 0;return b};function Vp(a,b){var c=!1;return c};function Wp(){var a="";return a};function Xp(){var a="";return a};function Yp(a,b,c,d){d=void 0===d?!1:d;};function Zp(a,b,c){};function $p(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function aq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Ub(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.gd&&pf(this,"access_consent",e,"write")}Fg(Qb(a))};function bq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);pf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=p,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Qb(b,this.g,d),!0;return!1};function cq(a,b,c){}
;var dq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function eq(a,b,c,d){var e=this;};function fq(a,b,c){}
;var gq={},hq={};gq.getItem=function(a){var b=null;return b};
gq.setItem=function(a,b){};
gq.removeItem=function(a){};gq.clear=function(){};var iq=function(a){var b;return b};function jq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&pf(this,"access_consent",c,"write");Gg(b)};var nd=function(){var a=new Af;Xj()?(a.add("injectHiddenIframe",Sa),a.add("injectScript",Sa)):(a.add("injectHiddenIframe",Np),a.add("injectScript",Pp));var b=Zp;a.add("Math",hf());a.add("TestHelper",Cf());a.add("addEventCallback",ro);a.add("aliasInWindow",pp);a.add("assertApi",df);a.add("assertThat",ef);a.add("callInWindow",
rp);a.add("callLater",sp);a.add("copyFromDataLayer",Ap);a.add("copyFromWindow",Bp);a.add("createArgumentsQueue",Cp);a.add("createQueue",Dp);a.add("decodeUri",jf);a.add("decodeUriComponent",kf);a.add("encodeUri",lf);a.add("encodeUriComponent",mf);a.add("fail",nf);a.add("fromBase64",Ep,!("atob"in p));a.add("generateRandom",of);a.add("getContainerVersion",qf);a.add("getCookieValues",Fp);a.add("getQueryParameters",Hp);a.add("getReferrerQueryParameters",Ip);a.add("getReferrerUrl",Jp);a.add("getTimestamp",
rf);a.add("getTimestampMillis",rf);a.add("getType",sf);a.add("getUrl",Lp);a.add("localStorage",Sp,!Rp());a.add("logToConsole",Tp);a.add("makeInteger",uf);a.add("makeNumber",vf);a.add("makeString",wf);a.add("makeTableMap",xf);a.add("mock",zf);a.add("parseUrl",Up);a.add("queryPermission",Vp);a.add("readCharacterSet",Wp);a.add("readTitle",Xp);a.add("sendPixel",b);a.add("setCookie",$p);a.add("setInWindow",bq);a.add("sha256",eq);a.add("templateStorage",gq);a.add("toBase64",iq,!("btoa"in p));a.add("JSON",tf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Tb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var ld,te;
function kq(){var a=data.runtime||[],b=data.runtime_lines;ld=new hd;lq();Od=function(e,f,g){mq(f);var h=new Eb;cb(f,function(r,t){var v=Pb(t);void 0===v&&void 0!==t&&K(44);h.set(r,v)});ld.g.g.J=ge();var l={wh:ue(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(r){return g.Ka.Nb(r)}:void 0,Tb:function(){return e},log:function(){}};if(Bl()){var m=Cl(),
n=void 0,q=void 0;l.ja={Ob:{},nb:function(r,t,v){1===t&&(n=r);7===t&&(q=v);m(r,t,v)},ce:yf()};l.log=function(r,t){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var u=md(l,[e,h]);ld.g.g.J=void 0;u instanceof ya&&"return"===u.g&&(u=u.o);return Qb(u)};od();for(var c=0;c<a.length;c++){var d=a[c];if(!Va(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&de(d,b[c]);ld.Nc(d)}}
function mq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ta(b)&&(a.gtmOnSuccess=function(){N(b)});Ta(c)&&(a.gtmOnFailure=function(){N(c)})}function lq(){var a=ld;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;pd(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function nq(a){void 0!==a&&cb(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Mh[e]=Mh[e]||[];Mh[e].push(b)}})};var oq="HA GF G UA AW DC".split(" "),pq=!1,qq={},rq=!1;function sq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.od]&&(c.eventCallback=b[J.od]),b[J.uc]&&(c.eventTimeout=b[J.uc]));return c}function tq(){return pq}
var wq={config:function(a){var b;return b},consent:function(a){function b(){tq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){K(39);var c=Nh(),d=a[1];"default"===d?(b(),Fg(a[2])):"update"===d&&(b(),Gg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Ob(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=sq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return rq=!0,tq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=te.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Ob(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Ob(a[2])||Va(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},xq={policy:!0};var yq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Aq=function(a){var b=zq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Rq=function(a){if(Qq(a))return a;this.g=a};Rq.prototype.Yh=function(){return this.g};var Qq=function(a){return!a||"object"!==Kb(a)||Ob(a)?!1:"getUntrustedUpdateValue"in a};Rq.prototype.getUntrustedUpdateValue=Rq.prototype.Yh;var Sq=[],Tq=!1,Uq=!1,Vq=!1,Wq=function(a){return p["dataLayer"].push(a)},Xq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Yq(a){var b=a._clear;cb(a,function(d,e){"_clear"!==d&&(b&&Wh(d,void 0),Wh(d,e))});Ih||(Ih=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Nh(),a["gtm.uniqueEventId"]=c,Wh("gtm.uniqueEventId",c));return Rl(a)}function Zq(){var a=Sq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(hb(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function $q(){for(var a=!1;!Vq&&0<Sq.length;){var b=!1;if(b&&!Uq&&Zq()){var c={};Sq.unshift((c.event=
"gtm.init",c));Uq=!0}var d=!1;if(d&&!Tq&&Zq()){var e={};Sq.unshift((e.event="gtm.init_consent",e));Tq=!0}Vq=!0;delete Qh.eventModel;Sh();var f=Sq.shift();if(null!=f){var g=Qq(f);
if(g){var h=f;f=Qq(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],m=0;m<l.length;m++){var n=l[m],q=Th(n,1);if(Va(q)||Ob(q))q=G(q);Rh[n]=q}}try{if(Ta(f))try{f.call(Uh)}catch(A){}else if(Va(f)){var u=f;if(k(u[0])){var r=u[0].split("."),t=r.pop(),v=u.slice(1),w=Th(r.join("."),2);if(void 0!==w&&null!==w)try{w[t].apply(w,v)}catch(A){}}}else{if(hb(f)){a:{var y=f;if(y.length&&k(y[0])){var x=wq[y[0]];if(x&&(!g||!xq[y[0]])){f=
x(y);break a}}f=void 0}if(!f){Vq=!1;continue}}a=Yq(f)||a}}finally{g&&Sh(!0)}}Vq=!1}return!a}function ar(){var a=$q();try{yq(p["dataLayer"],pe.F)}catch(b){}return a}
var cr=function(){var a=Xf("dataLayer",[]),b=Xf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Gk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});xp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Rq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Sq.push.apply(Sq,e);if(300<
this.length)for(K(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return $q()&&h};var d=a.slice(0);Sq.push.apply(Sq,d);br()&&N(ar)},br=function(){var a=!0;return a};var dr={};dr.Ac=new String("undefined");
var er=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dr.Ac?b:a[d]);return c.join("")}};er.prototype.toString=function(){return this.g("undefined")};er.prototype.valueOf=er.prototype.toString;dr.lh=er;dr.Ed={};dr.Lh=function(a){return new er(a)};var fr={};dr.Fi=function(a,b){var c=Nh();fr[c]=[a,b];return c};dr.Nf=function(a){var b=a?0:1;return function(c){var d=fr[c];if(d&&"function"===typeof d[b])d[b]();fr[c]=void 0}};dr.ei=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};dr.Ai=function(a){if(a===dr.Ac)return a;var b=Nh();dr.Ed[b]=a;return'google_tag_manager["'+pe.F+'"].macro('+b+")"};dr.ri=function(a,b,c){a instanceof dr.lh&&(a=a.g(dr.Fi(b,c)),b=Sa);return{Xd:a,onSuccess:b}};var gr=["input","select","textarea"],hr=["button","hidden","image","reset","submit"],ir=function(a){var b=a.tagName.toLowerCase();return!Xa(gr,function(c){return c===b})||"input"===b&&Xa(hr,function(c){return c===a.type.toLowerCase()})?!1:!0},jr=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):hg(a,["form"],100)},kr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ir(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vr=p.clearTimeout,wr=p.setTimeout,S=function(a,b,c){if(Xj()){b&&N(b)}else return Zf(a,b,c)},xr=function(){return new Date},yr=function(){return p.location.href},zr=function(a){return ch(eh(a),"fragment")},Ar=function(a){return dh(eh(a))},Br=function(a,b){return Th(a,b||2)},Cr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Wq(a)):d=Wq(a);return d},Dr=function(a,b){p[a]=b},V=function(a,b,c){b&&
(void 0===p[a]||c&&!p[a])&&(p[a]=b);return p[a]},Er=function(a,b,c){return gi(a,b,void 0===c?!0:!!c)},Fr=function(a,b,c){return 0===pi(a,b,c)},Gr=function(a,b){if(Xj()){b&&N(b)}else ag(a,b)},Hr=function(a){return!!wo(a,"init",!1)},Ir=function(a){uo(a,"init",!0)},Jr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Gh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Zj("https://","http://",c))},Kr=function(a,
b){var c=a[b];c=jg(a,b);return c},Lr=function(a,b,c){wl&&(Tb(a)||Al(c,b,a))};
var Mr=dr.ri;function is(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var js=new $a;function ks(a,b){function c(g){var h=eh(g),l=ch(h,"protocol"),m=ch(h,"host",!0),n=ch(h,"port"),q=ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Va(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return is(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Wa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,u=js.get(q);u||(u=new RegExp(c,n),js.set(q,u));m=u.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};var ns=encodeURI,W=encodeURIComponent,os=bg;var ps=function(a,b){if(!a)return!1;var c=ch(eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var qs=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Wt(){return p.gaGlobal=p.gaGlobal||{}}var Xt=function(){var a=Wt();a.hid=a.hid||Ya();return a.hid},Yt=function(a,b){var c=Wt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Iu=window,Ju=document,Ku=function(a){var b=Iu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Iu["ga-disable-"+a])return!0;try{var c=Iu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ei("AMP_TOKEN",String(Ju.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ju.getElementById("__gaOptOutExtension")?!0:!1};var Lu={};function Nu(a){delete a.eventModel[J.Hb];Pu(a.eventModel)}var Pu=function(a){cb(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ra]||{};cb(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Su=function(a,b,c){eo(b,c,a)},Tu=function(a,b,c){eo(b,c,a,!0)},Yu=function(a,b){};
function Uu(a,b){}var Y={h:{}};
Y.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.i="gaawc";Y.__gaawc.m=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=qs(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(J.ra)||b.vtp_userProperties){var e=d[J.ra]||{};G(qs(b.vtp_userProperties,"name","value"),e);d[J.ra]=e}a(d,J.pf,function(f){return jb(f)});a(d,J.rf,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;fo(d,c);N(b.vtp_gtmOnSuccess)})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Lr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.i="sp";Y.__sp.m=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var g=V("google_trackConversion");if(Ta(g)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=qs(a.vtp_customParams,
"key","value"));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:im()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(l.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(l.google_gtag_event_data={items:a.vtp_eventItems}));var m=function(n,q){(l.google_additional_params=l.google_additional_params||{})[n]=
q};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);m("gdpr_consent",Mm()),m("gdpr",Nm());g(l)||c()}else c()},e=function(){S(b,d,c)},f=!1;yg()&&!f?Kg(function(){Hg(J.C)?e():Cg(e,J.C)},[J.C]):(Nk(),e())})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){Lr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){return String(Yh(a.vtp_gtmEventId,"event"))})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=so(c,"gtm.click");Cr(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!Hr("cl")){var c=V("document");cg(c,"click",a,!0);Ir("cl")}N(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.i="j";Y.__j.m=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Lr(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return Er(a.vtp_name,Br("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,u){if(!k(u))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Wa(e,u))return}else if("write"===q){if(-1<Wa(f,u))return}else if("readwrite"===q){if(-1<Wa(f,u)&&-1<Wa(e,u))return}else if("execute"===q){if(-1<Wa(g,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
u+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Ya(a.vtp_min,a.vtp_max)})}();
Y.h.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Cr({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Y.__tg=g;Y.__tg.i="tg";Y.__tg.m=!0;Y.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var n=d[m];n?b(m,n):e.push(m)}else{c[h]=l;for(var q=0,u;u=l[q];q++)d[u]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Br("gtm.url",1))||yr();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ar(String(c));var e=eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Va(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Br(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Lr(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.be&&b.de>=b.be)b.Yd&&V("self").clearInterval(b.Yd);else{b.de++;var c=xr().getTime();Cr({event:b.R,"gtm.timerId":b.Yd,"gtm.timerEventNumber":b.de,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.be,"gtm.timerStartTime":b.ig,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ig,"gtm.triggers":b.Si})}}}(function(b){Y.__tl=b;Y.__tl.i="tl";Y.__tl.m=!0;Y.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{R:b.vtp_eventName,de:0,interval:Number(b.vtp_interval),be:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Si:String(b.vtp_uniqueTriggerId||"0"),ig:xr().getTime()};c.Yd=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return Hg(q)}function b(q,u){var r=!1;if(yg()&&!r&&!e[q]){var t=function(){var v=Sk(),w="gtm"+Nh(),y=m(u),x={name:w};l(y,x,!0);v("create",q,x);v(function(){v.remove(w)})};Cg(t,J.K);Cg(t,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,u,r){var t=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?jb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);u[v]=w;t++}return t},m=function(q){var u={};q.vtp_gaSettings&&G(qs(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),u);G(qs(q.vtp_fieldsToSet,"fieldName","value"),u);Hg(J.K)||(u.storage="none");Hg(J.C)||(u.allowAdFeatures=!1,u.storeGac=!1);Cn()||(u.allowAdFeatures=!1);Bn()||(u.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(u._x_19=q.vtp_transportUrl);return u},
n=function(q){function u(pa,Z){void 0!==Z&&E("set",pa,Z)}var r={},t={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(qs(y.vtp_contentGroup,"index","group"),t);G(qs(y.vtp_dimension,"index","dimension"),v);G(qs(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(qs(q.vtp_contentGroup,"index","group"),t);G(qs(q.vtp_dimension,"index","dimension"),v);G(qs(q.vtp_metric,"index","metric"),w);var A=
m(q),z=Uk(q.vtp_functionName);if(Ta(z)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Nh(),C=D+".");var E=function(pa){var Z=[].slice.call(arguments,0);Z[0]=C+Z[0];z.apply(window,Z)},I=function(pa,Z){return void 0===Z?Z:pa(Z)},P=function(pa,Z){if(Z)for(var Oa in Z)Z.hasOwnProperty(Oa)&&E("set",pa+Oa,Z[Oa])},Q=function(){},aa={name:D};l(A,aa,!0);var ta=q.vtp_trackingId||r.trackingId;z("create",ta,aa);E("set","&gtm",im(!0));var R=!1;
yg()&&!R&&(E("set","&gcs",Ig()),b(ta,q));A._x_19&&(null==Wf&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,z(Zk(D,String(A._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(pa,Z){void 0!==q[Z]&&E("set",pa,q[Z])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",w);var L={};l(A,L,!1)&&E("set",L);var U;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var pa=A&&A.hitCallback;Ta(pa)&&pa();q.vtp_gtmOnSuccess()});var ba=function(pa,Z){return void 0===q[pa]?r[Z]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),Q());var ua={hitType:"event",eventCategory:String(ba("vtp_eventCategory","category")),eventAction:String(ba("vtp_eventAction","action")),eventLabel:I(String,
ba("vtp_eventLabel","label")),eventValue:I(ib,ba("vtp_eventValue","value"))};l(U,ua,!1);E("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Na="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Mb})}U?E("send","pageview",U):E("send","pageview");
q.vtp_autoLinkDomains&&Vk(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);jb(A.urlPassthrough)&&Wk(C)}if(!c){var Cb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(Cb="internal/"+Cb);c=!0;var sb=Tl(A._x_19,"/analytics.js"),bb=Zj("https:","http:","//www.google-analytics.com/"+Cb,A&&!!A.forceSSL);S("analytics.js"===Cb&&sb?sb:bb,function(){var pa=
Sk();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Kg(function(){n(q)},
[J.K,J.C])})}();


Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ve(eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();




Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.i="gclidw";Y.__gclidw.m=!0;Y.__gclidw.priorityOverride=100})(function(c){N(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||kj())&&Ej(a,l));Cj(l);Gj(["aw","dc"],l);b?Qj(h,l):Rj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var n=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Fj(a,n,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=Br(J.P);Rm({Md:!1,xa:void 0!=
q&&!1!==q,Jc:l,Rc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Ij()});}();


Y.h.aev=["google"],function(){function a(r,t){var v=Yh(r,"gtm");if(v)return v[t]}function b(r,t,v,w){w||(w="element");var y=r+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(r,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var z=q.shift();delete n[z]}}return x}function c(r,t,v){var w=a(r,u[t]);return void 0!==w?w:v}function d(r,t){if(!r)return!1;var v=e(yr());Va(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++){var x=t[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(z){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var A=x;if(0!=A.length){if(0<=e(r).indexOf(A))return!1;w.push(e(A))}}}return!ps(r,w)}function e(r){m.test(r)||(r="http://"+r);return ch(eh(r),"HOST",!0)}function f(r,t,v){switch(r){case "SUBMIT_TEXT":return b(t,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",
v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return eg(r,"value");case "button":return fg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var t=0,v=0;v<r.elements.length;v++)ir(r.elements[v])&&
t++;return t}}function l(r,t,v){var w=a(r,"interactedFormField");return w&&eg(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Y.__aev=r;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(r){var t=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||v;case "TEXT":return b(t,w,fg)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),z=eh(A),C=String(r.vtp_component||"URL");switch(C){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,r.vtp_affiliatedDomains);break a;default:x=ch(z,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(t,
w,v);else{var E=r.vtp_attribute,I=a(t,"element");D=I&&eg(I,E)||v||""}return D;case "MD":var P=r.vtp_mdValue,Q=b(t,"MD",rr);return P&&Q?ur(Q,P)||v:Q||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),t,v);default:var aa=c(t,w,v);Lr(aa,"aev",r.vtp_gtmEventId);return aa}})}();
Y.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=V("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.i="awct";Y.__awct.m=!0;Y.__awct.priorityOverride=
0})(function(g){function h(z,C,D){return"DATA_LAYER"===z?Br(D):g[C]}function l(){v("gdpr_consent",Mm()),v("gdpr",Nm());}function m(){var z=[];return z}function n(z){var C=!0,D=[];if(z){D=m();}C&&b.push(u)}function q(){}Nk();var u={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:im()};u.google_gtm_experiments={capi:!0};
g.vtp_rdp&&(u.google_restricted_data_processing=!0);void 0!=Br(J.P)&&!1!==Br(J.P)&&(u.google_gtm_url_processor=function(z){return z=nk(z)});var r=function(z){return function(C,D,E){var I=h(z,D,E);I&&(u[C]=I)}},t=r("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=r(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),u.google_conversion_items&&u.google_conversion_items.map&&(u.google_conversion_items=u.google_conversion_items.map(function(z){return{value:z.price,quantity:z.quantity,item_id:z.id}})));var v=function(z,C){void 0!==C&&((u.google_additional_conversion_params=u.google_additional_conversion_params||{})[z]=C)},
w=function(z){return function(C,D,E,I){var P=h(z,D,E);I(P)&&v(C,P)}};(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var z=
h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",pk(z))}})();g.vtp_transportUrl&&(u.google_transport_url=g.vtp_transportUrl);var A=Tl(g.vtp_transportUrl,"/pagead/conversion_async.js");A||(A=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=w(g.vtp_newCustomerReportingDataSource),t("vdnc",
"vtp_awNewCustomer","new_customer",function(z){return void 0!=z&&""!==z}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(z){return void 0!=z&&""!==z}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(u.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),u.google_read_gcl_cookie_opt_out=!1):u.google_read_gcl_cookie_opt_out=!0;"1"===dj(!1)._up&&v("gtm_up","1");l();(function(){var z=!1;!yg()||z?n(!0):Kg(function(){l();var C=Hg(J.C),D=!C&&void 0!=Br(J.P)&&!1!==Br(J.P);!g.vtp_transportUrl&&D&&(u.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Ig());q();n(C);C||Cg(function(){l();u=G(u);!g.vtp_transportUrl&&u.google_transport_url&&delete u.google_transport_url;v("gcs",Ig());q();v("gcu","1");n(!0)},J.C)},[J.C])})();a||(a=!0,S(A,f(),e(A)))})}();

Y.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.i="baut";Y.__baut.m=!0;Y.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=V(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=Df(V("UET"),{ti:b.vtp_tagId,q:d});p[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Yf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(u){N(g)}}}var b=function(d,e,f){Gk(function(){var g=O.postscribe,h={done:e},l=M.createElement("div");l.style.display="none";l.style.visibility="hidden";M.body.appendChild(l);try{g(l,d,h)}catch(m){N(f)}})};var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Mr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Xd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,gg(g),h,e)()}else wr(function(){c(d)},200)};Y.__html=c;Y.__html.i="html";
Y.__html.m=!0;Y.__html.priorityOverride=0}();




Y.h.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.i="img";Y.__img.m=!0;Y.__img.priorityOverride=0})(function(a){var b=gg('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}os(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var Zu={};Zu.macro=function(a){if(dr.Ed.hasOwnProperty(a))return dr.Ed[a]},Zu.onHtmlSuccess=dr.Nf(!0),Zu.onHtmlFailure=dr.Nf(!1);Zu.dataLayer=Uh;Zu.callback=function(a){Lh.hasOwnProperty(a)&&Ta(Lh[a])&&Lh[a]();delete Lh[a]};Zu.bootstrap=0;Zu._spx=!1;function $u(){O[pe.F]=Zu;rb(Mh,Y.h);Wd=Wd||dr;Xd=le}
function av(){mg.gtag_cs_api=!0;O=p.google_tag_manager=p.google_tag_manager||{};Km();if(O[pe.F]){var a=O.zones;a&&a.unregisterChild(pe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Sd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Rd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);Qd.push(q)}Ud=Y;Vd=ls;var r=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;kq();te=new se(r);if(void 0!==t)for(var w=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");Mh[x]=w}nq(v);$u();cr();Bk=!1;Ck=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)Ek();else{cg(M,"DOMContentLoaded",Ek);cg(M,"readystatechange",Ek);if(M.createEventObject&&M.documentElement.doScroll){var A=!0;try{A=!p.frameElement}catch(I){}A&&Fk()}cg(p,"load",Ek)}up=!1;"complete"===M.readyState?wp():cg(p,"load",wp);a:{
if(!wl)break a;p.setInterval(xl,864E5);}var E=O;E.postscribe||(E.postscribe=p.postscribe||Xe);Jh=(new Date).getTime();}}
(function(a){if(!p["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=eh(M.referrer);b="cct.google"===bh(c,"host")}if(!b){var d=gi("googTaggyReferrer");b=d.length&&d[0].length}b&&(p["__TAGGY_INSTALLED"]=!0,Zf("https://cct.google/taggy/agent.js"))}var f=function(){var m=p["google.tagmanager.debugui2.queue"];m||(m=[],p["google.tagmanager.debugui2.queue"]=m,Zf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ch(p.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=eh(M.referrer);g="tagassistant.google.com"===bh(h,"host")}if(!g){var l=gi("__TAG_ASSISTANT");g=l.length&&l[0].length}p.__TAG_ASSISTANT_API&&(g=!0);g&&Wf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Wf,resume:function(){a()}}}):a()})(av);

})()
