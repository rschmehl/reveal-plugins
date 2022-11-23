# Fullscreen plugin

This is a small Reveal.js plugin to display regular images in fullscreen mode, using the entire available window area, with options `contain` or `cover` mimicking the display behavior of background images.

In Reveal.js, the scaling of [background images](https://revealjs.com/backgrounds/) is controlled by the [data-background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) attribute. The value `contain` uniformly scales the image to the available window area without cropping the image, leaving empty space if the aspect ratios of the image and the available window area are different, while the value `cover` scales the image to the available area, cropping it either vertically or horizontally, if necessary, so that no empty space remains. However, only one background image can be used per slide. In some cases, it can be useful to consecutively display several images of same size in fullscreen mode within one slide, using the [fragment feature](https://revealjs.com/fragments/) of Reveal.js. For example, to add precisely positioned graphical elements on top of a background photo, or to add a fullscreen slide show within one slide.

## Installation

Copy the file `plugin.js` into a subfolder of the plugin folder of your Reveal.js installation, i.e. `plugin/fullscreen` and load the plugin as shown below.

```html
<link rel="stylesheet" href="dist/fullscreen.css">
<script src="plugin/fullscreen/plugin.js"></script>

<script>
    Reveal.initialize({
        // ...
        plugins: [ RevealFullscreen ],
        // ...
    });
</script>
```

After installing the plugin, you need to add the following CSS code to your local css file (typically in folders `dist` or `dist/theme`).

```css
/* Fullscreen images in cover of contain mode */
.reveal img.fullscreen {
  position: absolute;
  top: 50%;
  bottom: auto;
  left: 50%;
  right: auto;
  transform: translate( -50%, -50% ) scale( 100% );
}
```

## Usage

Add the image in the content section of the slide with the `fullscreen` class. To mimic `cover` mode add also the `cover` class, otherwise the image will be displayed in `contain` mode.

```html
<section data-background-image="https://wallpapercave.com/wp/hd9yFNT.jpg" data-background-size="cover">
  <img class="fragment fullscreen cover" src="https://wallpapercave.com/wp/wp3162046.jpg">
  <img class="fragment fullscreen cover" src="https://wallpapercave.com/wp/wp3987071.jpg">
</section>
```

## License

Copyright (C) 2021, Roland Schmehl
