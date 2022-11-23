# Attribution plugin

This is a small Reveal.js plugin for displaying attribution texts in an unobtrusive way, sideways along the right edge of the viewport. When resizing the viewport or toggling full screen mode, the attribution text sticks persistently to the right edge of the viewport.

The attribution text can be styled via CSS, can include links, etc.

## Installation

Copy the file `plugin.js` into a subfolder of the plugin folder of your Reveal.js installation, i.e. `plugin/attribution` and load the plugin as shown below.

```html
<link rel="stylesheet" href="dist/attribution.css">
<script src="plugin/attribution/plugin.js"></script>

<script>
    Reveal.initialize({
        // ...
        plugins: [ RevealAttribution ],
        // ...
    });
</script>
```

After installing the plugin, you need to add the following CSS code to your local css file (typically in folders `dist` or `dist/theme`).

```css
/* Attribution plugin: text along the right edge of the viewport */
.attribution{
  position: absolute;
  top: 50%;
  bottom: auto;
  left: 50%;
  right: auto;
  font-size: 0.4em;
  pointer-events: none;
  text-align: center;
  writing-mode: vertical-lr;
  transform: translate( -50%, -50% ) scale( 100% ) rotate(-180deg);
}

/* Attribution plugin: activate pointer events for attribution text only */
.attribution .content{
  pointer-events: auto;
}
```

Note that the plugin automatically wraps `<span class="content">` and `</span>` around the attribution text, which is necessary for reactivating pointer events on the attribution text.

## Usage

Add an attribution to your slide.

```html
<span class="attribution">Photo courtesy of <a href="https://www.britishmuseum.org">British Museum</a></span>
```

## License

Copyright (C) 2021, Roland Schmehl
