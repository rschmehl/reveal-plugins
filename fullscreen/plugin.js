/*****************************************************************
** Author: Roland Schmehl, r.schmehl@tudelft.nl
**
** A plugin for displaying fullscreen images in the same way as
** background images are.
**
** Note:
** - addEventListener() method needs to be called for target window
**   and not for target Reveal for dynamic resizing to work.
**
** Version: 1.0
**
** License: MIT license (see file LICENSE)
**
******************************************************************/

window.RevealFullscreen = window.RevealFullscreen || {
    id: 'RevealFullscreen',
    init: function(deck) {
        initFullscreen(deck);
    }
};

const initFullscreen = function(Reveal){

  var ready = false;
  var resize = false;
  var scale = 0;

  window.addEventListener( 'ready', function( event ) {

    // Remove configured margin of the presentation
    var fullscreen = document.getElementsByClassName("fullscreen");

    scale = 1/(1-Reveal.getConfig().margin);

    for (var i = 0; i < fullscreen.length; i++) {
      fullscreen[i].style.transform = 'translate( -50%, -50% ) scale( ' + scale*100 + '% )';
    }

    // Scale images with cover class to mimic backgroundSize cover
    resizeCover();

  });

  window.addEventListener( 'resize', resizeCover );

  function resizeCover() {

    // Scale to mimic backgroundSize cover
    var fullscreen = document.getElementsByClassName("fullscreen cover");
    var xScale = window.innerWidth / Reveal.getConfig().width;
    var yScale = window.innerHeight / Reveal.getConfig().height;
    var s;

    if (xScale > yScale) {
        // The image fits perfectly in x axis, stretched in y
        s = xScale/yScale;
    } else {
        // The image fits perfectly in y axis, stretched in x
        s = yScale/xScale;
    }
    for (var i = 0; i < fullscreen.length; i++) {
      fullscreen[i].style.transform = 'translate( -50%, -50% ) scale( ' + s*scale*100 + '% )';
    }
	}

};
