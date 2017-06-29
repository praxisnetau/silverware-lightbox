/* Lightbox
===================================================================================================================== */

import $ from 'jquery';
import 'ekko-lightbox-dist';

$(function() {
  
  // Setup Click Handler for Image Links / Lightbox Toggles:
  
  $(document).on('click', '.image-link.to-file, [data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
  
});
