cordova-plugin-plusonebutton
------------------------

This is a plugin for showing a native +1 button

To install

`cordova plugin add cordova-plugin-plusonebutton`

To use it:

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
