// ==UserScript==
// @name        test-exif
// @namespace   quin
// @include     http://geocaches.rausleben.de/exiftest/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     http://geocaches.rausleben.de/exif.js
// allow pasting
// @version     1
// @grant       none
// ==/UserScript==
var $ = unsafeWindow.jQuery;
$(document).ready(function () {
  $('img').each(function () {
//    $(this).hide();
    EXIF.getData(this, function () {
      var LONG = EXIF.getTag(this, 'GPSLongitude');
      var LAT = EXIF.getTag(this, 'GPSLatitude');
      //alert(LONG + ' ' + ALT);
      $('p').append('<br><p> N/S ' + LAT + ' :: ' + 'E/W' + LONG + '</p>');
    });
  });
});
