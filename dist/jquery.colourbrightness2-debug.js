/*
 *  colourBrightness2.js
 *
 *  Copyright 2016, Philippe Assis - http://philippeassis.com
 *  Released under the WTFPL license
 *  http://sam.zoy.org/wtfpl/
 *
 *  Website: https://colourbrightness2.github.io
 *  Github:  https://github.com/PhilippeAssis/colourBrightness2.js.git
 *  Version: 1.0.0
 */

(function($) {
  $.colourBrightness2 = function(verificColor) {
    function getBackgroundColor($el) {
      var bgColor = "";
      while ($el[0].tagName.toLowerCase() != "html") {
        bgColor = $el.css("background-color");
        if (bgColor != "rgba(0, 0, 0, 0)" && bgColor != "transparent") {
          break;
        }
        $el = $el.parent();
      }
      return bgColor;
    }

    var r, g, b, brightness,
      colour = verificColor || getBackgroundColor(this);

    if (colour.match(/^rgb/)) {
      colour = colour.match(/rgba?\(([^)]+)\)/)[1];
      colour = colour.split(/ *, */).map(Number);
      r = colour[0];
      g = colour[1];
      b = colour[2];
    }
    else if ('#' == colour[0] && 7 == colour.length) {
      r = parseInt(colour.slice(1, 3), 16);
      g = parseInt(colour.slice(3, 5), 16);
      b = parseInt(colour.slice(5, 7), 16);
    }
    else if ('#' == colour[0] && 4 == colour.length) {
      r = parseInt(colour[1] + colour[1], 16);
      g = parseInt(colour[2] + colour[2], 16);
      b = parseInt(colour[3] + colour[3], 16);
    }

    brightness = (r * 299 + g * 587 + b * 114) / 1000;

    var isDark = (brightness < 125);

    var $this = this;

    this.isDark = function(callback) {
      if (isDark) {
        callback()
      }
    }

    this.isLight = function(callback) {
      if (!isDark) {
        callback()
      }
    }

    this.then = function(callback) {
      callback(isDark)
    }

    this.setClass = function(darkClass, lightClass) {
      if (isDark) {
        $this.removeClass(lightClass || "light").addClass(darkClass || "dark");
      }
      else {
        $this.removeClass(darkClass || "dark").addClass(lightClass || "light");
      }
    }


    return this;
  }
  $.fn.colourBrightness2 = $.colourBrightness2;
})(jQuery);
