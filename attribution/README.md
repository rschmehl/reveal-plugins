# Attribution plugin

This is a small Reveal.js plugin for displaying attribution texts in an unobtrusive way, sideways along the right edge of the viewport. When resizing the viewport or toggling full screen mode, the attribution text sticks persistently to the right edge of the viewport.

The attribution text can be styled via CSS, can include links, etc.

## Installation

Copy the file `plugin.js` into a subfolder of the plugin folder of your Reveal.js installation, i.e. `plugin/fullscreen`, and copy the file `attribution.css` into the `dist` subfolder of your Reveal.js installation. Load the plugin as shown below.

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

Alternatively to loading the CSS styles as a separate file, you can add the content of file `attribution.css` directly to your local cases file (typically in folders `dist` or `dist/theme`).

Note that the plugin automatically wraps `<span class="content">` and `</span>` around the attribution text, which is necessary for reactivating pointer events on the attribution text.

## Usage

Add an attribution to your slide.

```html
<span class="attribution">Photo courtesy of <a href="https://www.britishmuseum.org">British Museum</a></span>
```

## Known issues

- [Issue #2](): On Chromium, the attribution text is not properly placed at the right border of the display. Works fine on Chrome and Firefox.

## License

Copyright (C) 2021, Roland Schmehl
