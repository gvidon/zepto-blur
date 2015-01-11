# Zepto CSS blur plugin

Apply CSS blur effect to element depending on scroll position.

## Install

Simply include this code before your ```</body>``` tag:
```html
<script type="text/javascript" src="zepto.min.js"></script>
<script type="text/javascript" src="zepto.blur.min.js"></script>
```

## Usage and examples

Zepto-blur will apply CSS blur to element depending on scroll position and blur boundaries provided in options. It means that element will have blur decreased when it top gets to the upper bound and will have blur increased when its bottom gets to the lower bound. By default element is fully blured out.

```javascript
// Smoothly unblur #foo when it gets to the 700px from top of the browser
// window and blur it back when it gets to the 200px from browser top
$('#foo').blur({edge: 700, bottomEdge: 200});
```

## Options

* **edge** — integer. Upper boundary. Remove blur when element gets here.
* **bottomEdge** — integer. Lower boundary. Apply blur back here.
* **smoothness** — integer. Default is 100. How far from boundaries blur will start changing from 0 to max blur value.
* **max** — integer. Maximum blur value.