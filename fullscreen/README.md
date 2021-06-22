# Fullscreen plugin

This is a small Reveal.js plugin to display regular images in fullscreen mode, using the entire available window area, with options `contain` or `cover` mimicking the display behavior of background images.

In Reveal.js, the scaling of [background images](https://revealjs.com/backgrounds/) is controlled by the [data-background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) attribute. The value `contain` uniformly scales the image to the available window area without cropping the image, leaving empty space if the aspect ratios of the image and the available window area are different, while the value `cover` scales the image to the available area, cropping it either vertically or horizontally, if necessary, so that no empty space remains. However, Reveal.js accommodates only one background image per slide. In some cases it can be useful to consecutively display several images of same size in fullscreen mode within one slide, using the [fragment feature](https://revealjs.com/fragments/) of Reveal.js. For example, to add precisely positioned graphical elements on top of a background photo, or to add a fullscreen slide show within one slide.

## Installation

Copy the file `plugin.js` into the plugin folder of your reveal.js presentation, i.e. `plugin/fullscreen` and load the plugin as shown below.

```html
<link rel="stylesheet" href="plugin/fullscreen/plugin.js">
<script src="plugin/fullscreen/plugin.js"></script>

<script>
    Reveal.initialize({
        // ...
        plugins: [ RevealFullscreen ],
        // ...
    });
</script>
```

After installing the plugin, you need to add the following CSS code to your local css file.

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

Note that you do not need to explicitly have to include a class `.cover` in your local css file.

Example for using cover

## Use


This plugin allows adding fullscreen images with display options `contain` or `cover`, within the content section of a slide.

Simply add the images with the `.fullscreen` class and additionally mark images that should mimic `cover` mode with the `.cover` class.

```md
# Title {data-background-image="dir/background-image.jpg" data-background-size="cover"}
![](dir/image-overlay.svg){.fragment .fullscreen .cover}
```

## License

Copyright (C) 2021, Roland Schmehl
