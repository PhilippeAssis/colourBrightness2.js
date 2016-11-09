# colourBrightness2.js

Fork of [colourBrightness.js](https://github.com/jamiebrittain/colourBrightness.js), the Colour Brightness 2 offers additional features to the plugin.

A lightweight and easy-to-use jQuery plugin that determines if the background colour of an element is light or dark.

### Demo
Look [colourbrightness2.github.io](https://colourbrightness2.github.io)

## Install

#### NPM
```shell
npm install colourBrightness2
```

#### Bower
```shell
bower install colourBrightness2
```

### Additional resources:
 - **isDark:** Performs a callback, if it is dark.
 - **isLigth:** Performs a callback, if it is clear.
 - **then:** Performs a callback for both cases, receiving **true** dark case and **false** clear case.
 - **setClass:** The classic! Adds the light and dark class to the element.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.colourBrightness2.js"></script>
<script>
  $(document).ready(function(){
    $('.lightbox').colourBrightness2().setClass();// .dark, .light
    
    $('.lightbox').colourBrightness2().isDark(function(){
      alert('It\'s dark!')
    });
    
    $('.lightbox').colourBrightness2().isLight(function(){
      alert('It\'s light!')
    });
    
    $('.lightbox').colourBrightness2().then(function(isDark){
      if(isDark){
        alert('It\'s dark!')
      }
      else{
        alert('It\'s light!')  
      }
    });
    
    /**
    * check color
    **/
    $.colourBrightness2("#FFFFFF").then(function(isDark){
      if(isDark){
        alert('It\'s dark!')
      }
      else{
        alert('It\'s light!')  
      }
    })
  });
</script>
```

### Check color directly
Using `$.colourBrightness2` you can check the color without depending on an element, passing directly as a parameter. You can use all methods.
```javascript
  $.colourBrightness2("#FFFFFF").then(function(isDark){
        if(isDark){
          alert('It\'s dark!')
        }
        else{
          alert('It\'s light!')  
        }
      })
```

### .then(cb)
Execute a callback passing true to dark and false to light as parameter

### .isDark(cb), .isLight(cb)
Executes a callback if the dark (in Dark) or clear (in isLight)

### .setClass()
It'll grab the background colour of that element and uses a small algorithm to determine the brightness of the colour and will add the class `light` if the colour is light and `dark` if the colour is dark.
From there, you can add what colour you'd like to display depending on the background in your CSS.

```css
// Dark text
.light {
  color: #000;
}

// Light text
.dark {
  color: #fff;
}
```
