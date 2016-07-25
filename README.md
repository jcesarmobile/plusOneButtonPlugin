cordova-plugin-plusonebutton
------------------------

This is a plugin for showing a native +1 button

To install

`cordova plugin add cordova-plugin-plusonebutton`

To use it:

Show the button
===============

```
var params = {};

params.url = "http://www.example.com";

params.size = 2;

params.annotation = 1;

params.position = {x:100,y:100};

plusOneButton.show(params);
```

Or

`plusOneButton.show("http://www.example.com");`

You can use Show to move the button changing the position params.


Hide the button
===============
`plusOneButton.hide();`

Listen for click event
======================

```
document.addEventListener("plusOneButtonClicked", onOneButtonClicked, false);
function onOneButtonClicked(){
    console.log('clicked');
}
```
