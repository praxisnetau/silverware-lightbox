/* Lightbox
===================================================================================================================== */

import $ from 'jquery';
import 'ekko-lightbox-dist';

$(function() {
  
  // Setup Click Handler for Image Links / Lightbox Toggles:
  
  $('.image-link.to-file, [data-toggle="lightbox"]').on('click', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
  
});
