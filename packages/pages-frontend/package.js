'use strict'

var packageName = 'revox:pages-front'
var where = 'client'

Package.describe({
  name: packageName,
  summary: 'Pages Frontend',
  version: '1.0.0'
})

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0','METEOR@1.2']);
  api.use(['less','jquery','twbs:bootstrap', 'momentjs:moment', 'bkruse:pace', 'gromo:jquery.scrollbar','cwaring:modernizr','fortawesome:fontawesome'], where);
  api.addFiles([
    'less/pages.less',
    'less/pages-icons.less',
  ], where)

  api.addAssets([
    'fonts/montserrat/montserrat-bold-webfont.svg',
    'fonts/montserrat/Montserrat-Bold.ttf',
    'fonts/montserrat/montserrat-regular-webfont.svg',
    'fonts/montserrat/Montserrat-Regular.ttf',
    'fonts/opensans/Bold/OpenSans-Bold.eot',
    'fonts/opensans/Bold/OpenSans-Bold.svg',
    'fonts/opensans/Bold/OpenSans-Bold.ttf',
    'fonts/opensans/Bold/OpenSans-Bold.woff',
    'fonts/opensans/Bold/OpenSans-Bold.woff2',
    'fonts/opensans/BoldItalic/OpenSans-BoldItalic.eot',
    'fonts/opensans/BoldItalic/OpenSans-BoldItalic.svg',
    'fonts/opensans/BoldItalic/OpenSans-BoldItalic.ttf',
    'fonts/opensans/BoldItalic/OpenSans-BoldItalic.woff',
    'fonts/opensans/BoldItalic/OpenSans-BoldItalic.woff2',
    'fonts/opensans/ExtraBold/OpenSans-ExtraBold.eot',
    'fonts/opensans/ExtraBold/OpenSans-ExtraBold.svg',
    'fonts/opensans/ExtraBold/OpenSans-ExtraBold.ttf',
    'fonts/opensans/ExtraBold/OpenSans-ExtraBold.woff',
    'fonts/opensans/ExtraBold/OpenSans-ExtraBold.woff2',
    'fonts/opensans/ExtraBoldItalic/OpenSans-ExtraBoldItalic.eot',
    'fonts/opensans/ExtraBoldItalic/OpenSans-ExtraBoldItalic.svg',
    'fonts/opensans/ExtraBoldItalic/OpenSans-ExtraBoldItalic.ttf',
    'fonts/opensans/ExtraBoldItalic/OpenSans-ExtraBoldItalic.woff',
    'fonts/opensans/ExtraBoldItalic/OpenSans-ExtraBoldItalic.woff2',
    'fonts/opensans/Italic/OpenSans-Italic.eot',
    'fonts/opensans/Italic/OpenSans-Italic.svg',
    'fonts/opensans/Italic/OpenSans-Italic.ttf',
    'fonts/opensans/Italic/OpenSans-Italic.woff',
    'fonts/opensans/Italic/OpenSans-Italic.woff2',
    'fonts/opensans/Light/OpenSans-Light.eot',
    'fonts/opensans/Light/OpenSans-Light.svg',
    'fonts/opensans/Light/OpenSans-Light.ttf',
    'fonts/opensans/Light/OpenSans-Light.woff',
    'fonts/opensans/Light/OpenSans-Light.woff2',
    'fonts/opensans/LightItalic/OpenSans-LightItalic.eot',
    'fonts/opensans/LightItalic/OpenSans-LightItalic.svg',
    'fonts/opensans/LightItalic/OpenSans-LightItalic.ttf',
    'fonts/opensans/LightItalic/OpenSans-LightItalic.woff',
    'fonts/opensans/LightItalic/OpenSans-LightItalic.woff2',
    'fonts/opensans/Regular/OpenSans-Regular.eot',
    'fonts/opensans/Regular/OpenSans-Regular.svg',
    'fonts/opensans/Regular/OpenSans-Regular.ttf',
    'fonts/opensans/Regular/OpenSans-Regular.woff',
    'fonts/opensans/Regular/OpenSans-Regular.woff2',
    'fonts/opensans/Semibold/OpenSans-Semibold.eot',
    'fonts/opensans/Semibold/OpenSans-Semibold.svg',
    'fonts/opensans/Semibold/OpenSans-Semibold.ttf',
    'fonts/opensans/Semibold/OpenSans-Semibold.woff',
    'fonts/opensans/Semibold/OpenSans-Semibold.woff2',
    'fonts/opensans/SemiboldItalic/OpenSans-SemiboldItalic.eot',
    'fonts/opensans/SemiboldItalic/OpenSans-SemiboldItalic.svg',
    'fonts/opensans/SemiboldItalic/OpenSans-SemiboldItalic.ttf',
    'fonts/opensans/SemiboldItalic/OpenSans-SemiboldItalic.woff',
    'fonts/opensans/SemiboldItalic/OpenSans-SemiboldItalic.woff2',
    'fonts/pages-icon/Pages-icon.eot',
    'fonts/pages-icon/Pages-icon.svg',
    'fonts/pages-icon/Pages-icon.ttf',
    'fonts/pages-icon/Pages-icon.woff',
  ], where)

})
