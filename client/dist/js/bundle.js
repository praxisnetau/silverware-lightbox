!function(t){function e(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/resources/vendor/silverware/lightbox/client/dist/",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,i){i(2),i(3)},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),a=i.n(o),n=i(4);i.n(n),a()(function(){a()(document).on("click",'.image-link.to-file, [data-toggle="lightbox"]',function(t){t.preventDefault(),a()(this).ekkoLightbox()})})},function(t,e,i){(function(t){!function(e){"use strict";var i=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();!function(e){var o="ekkoLightbox",a=e.fn[o],n={title:"",footer:"",maxWidth:9999,maxHeight:9999,showArrows:!0,wrapping:!0,type:null,alwaysShowClose:!1,loadingMessage:'<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',leftArrow:"<span>&#10094;</span>",rightArrow:"<span>&#10095;</span>",strings:{close:"Close",fail:"Failed to load image:",type:"Could not detect remote target type. Force the type using data-type"},doc:document,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}},s=function(){function o(i,a){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this._config=e.extend({},n,a),this._$modalArrows=null,this._galleryIndex=0,this._galleryName=null,this._padding=null,this._border=null,this._titleIsShown=!1,this._footerIsShown=!1,this._wantedWidth=0,this._wantedHeight=0,this._touchstartX=0,this._touchendX=0,this._modalId="ekkoLightbox-"+Math.floor(1e3*Math.random()+1),this._$element=i instanceof t?i:e(i),this._isBootstrap3=3==e.fn.modal.Constructor.VERSION[0];var l='<h4 class="modal-title">'+(this._config.title||"&nbsp;")+"</h4>",r='<button type="button" class="close" data-dismiss="modal" aria-label="'+this._config.strings.close+'"><span aria-hidden="true">&times;</span></button>',d='<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header'+(this._config.title||this._config.alwaysShowClose?"":" hide")+'">'+(this._isBootstrap3?r+l:l+r)+'</div><div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div><div class="modal-footer'+(this._config.footer?"":" hide")+'">'+(this._config.footer||"&nbsp;")+"</div></div></div>";e(this._config.doc.body).append('<div id="'+this._modalId+'" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">'+d+"</div>"),this._$modal=e("#"+this._modalId,this._config.doc),this._$modalDialog=this._$modal.find(".modal-dialog").first(),this._$modalContent=this._$modal.find(".modal-content").first(),this._$modalBody=this._$modal.find(".modal-body").first(),this._$modalHeader=this._$modal.find(".modal-header").first(),this._$modalFooter=this._$modal.find(".modal-footer").first(),this._$lightboxContainer=this._$modalBody.find(".ekko-lightbox-container").first(),this._$lightboxBodyOne=this._$lightboxContainer.find("> div:first-child").first(),this._$lightboxBodyTwo=this._$lightboxContainer.find("> div:last-child").first(),this._border=this._calculateBorders(),this._padding=this._calculatePadding(),this._galleryName=this._$element.data("gallery"),this._galleryName&&(this._$galleryItems=e(document.body).find('*[data-gallery="'+this._galleryName+'"]'),this._galleryIndex=this._$galleryItems.index(this._$element),e(document).on("keydown.ekkoLightbox",this._navigationalBinder.bind(this)),this._config.showArrows&&this._$galleryItems.length>1&&(this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">'+this._config.leftArrow+'</a><a href="#">'+this._config.rightArrow+"</a></div>"),this._$modalArrows=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first(),this._$lightboxContainer.on("click","a:first-child",function(t){return t.preventDefault(),s.navigateLeft()}),this._$lightboxContainer.on("click","a:last-child",function(t){return t.preventDefault(),s.navigateRight()}),this.updateNavigation())),this._$modal.on("show.bs.modal",this._config.onShow.bind(this)).on("shown.bs.modal",function(){return s._toggleLoading(!0),s._handle(),s._config.onShown.call(s)}).on("hide.bs.modal",this._config.onHide.bind(this)).on("hidden.bs.modal",function(){return s._galleryName&&(e(document).off("keydown.ekkoLightbox"),e(window).off("resize.ekkoLightbox")),s._$modal.remove(),s._config.onHidden.call(s)}).modal(this._config),e(window).on("resize.ekkoLightbox",function(){s._resize(s._wantedWidth,s._wantedHeight)}),this._$lightboxContainer.on("touchstart",function(){s._touchstartX=event.changedTouches[0].screenX}).on("touchend",function(){s._touchendX=event.changedTouches[0].screenX,s._swipeGesure()})}return i(o,null,[{key:"Default",get:function(){return n}}]),i(o,[{key:"element",value:function(){return this._$element}},{key:"modal",value:function(){return this._$modal}},{key:"navigateTo",value:function(t){if(t<0||t>this._$galleryItems.length-1)return this;this._galleryIndex=t,this.updateNavigation(),this._$element=e(this._$galleryItems.get(this._galleryIndex)),this._handle()}},{key:"navigateLeft",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(0===this._galleryIndex){if(!this._config.wrapping)return;this._galleryIndex=this._$galleryItems.length-1}else this._galleryIndex--;return this._config.onNavigate.call(this,"left",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"navigateRight",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(this._galleryIndex===this._$galleryItems.length-1){if(!this._config.wrapping)return;this._galleryIndex=0}else this._galleryIndex++;return this._config.onNavigate.call(this,"right",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"updateNavigation",value:function(){if(!this._config.wrapping){var t=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");0===this._galleryIndex?t.find("a:first-child").addClass("disabled"):t.find("a:first-child").removeClass("disabled"),this._galleryIndex===this._$galleryItems.length-1?t.find("a:last-child").addClass("disabled"):t.find("a:last-child").removeClass("disabled")}}},{key:"close",value:function(){return this._$modal.modal("hide")}},{key:"_navigationalBinder",value:function(t){return 39===(t=t||window.event).keyCode?this.navigateRight():37===t.keyCode?this.navigateLeft():void 0}},{key:"_detectRemoteType",value:function(t,e){return!(e=e||!1)&&this._isImage(t)&&(e="image"),!e&&this._getYoutubeId(t)&&(e="youtube"),!e&&this._getVimeoId(t)&&(e="vimeo"),!e&&this._getInstagramId(t)&&(e="instagram"),(!e||["image","youtube","vimeo","instagram","video","url"].indexOf(e)<0)&&(e="url"),e}},{key:"_isImage",value:function(t){return t&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)}},{key:"_containerToUse",value:function(){var t=this,e=this._$lightboxBodyTwo,i=this._$lightboxBodyOne;return this._$lightboxBodyTwo.hasClass("in")&&(e=this._$lightboxBodyOne,i=this._$lightboxBodyTwo),i.removeClass("in show"),setTimeout(function(){t._$lightboxBodyTwo.hasClass("in")||t._$lightboxBodyTwo.empty(),t._$lightboxBodyOne.hasClass("in")||t._$lightboxBodyOne.empty()},500),e.addClass("in show"),e}},{key:"_handle",value:function(){var t=this._containerToUse();this._updateTitleAndFooter();var e=this._$element.attr("data-remote")||this._$element.attr("href"),i=this._detectRemoteType(e,this._$element.attr("data-type")||!1);if(["image","youtube","vimeo","instagram","video","url"].indexOf(i)<0)return this._error(this._config.strings.type);switch(i){case"image":this._preloadImage(e,t),this._preloadImageByIndex(this._galleryIndex,3);break;case"youtube":this._showYoutubeVideo(e,t);break;case"vimeo":this._showVimeoVideo(this._getVimeoId(e),t);break;case"instagram":this._showInstagramVideo(this._getInstagramId(e),t);break;case"video":this._showHtml5Video(e,t);break;default:this._loadRemoteContent(e,t)}return this}},{key:"_getYoutubeId",value:function(t){if(!t)return!1;var e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return!(!e||11!==e[2].length)&&e[2]}},{key:"_getVimeoId",value:function(t){return!!(t&&t.indexOf("vimeo")>0)&&t}},{key:"_getInstagramId",value:function(t){return!!(t&&t.indexOf("instagram")>0)&&t}},{key:"_toggleLoading",value:function(t){return(t=t||!1)?(this._$modalDialog.css("display","none"),this._$modal.removeClass("in show"),e(".modal-backdrop").append(this._config.loadingMessage)):(this._$modalDialog.css("display","block"),this._$modal.addClass("in show"),e(".modal-backdrop").find(".ekko-lightbox-loader").remove()),this}},{key:"_calculateBorders",value:function(){return{top:this._totalCssByAttribute("border-top-width"),right:this._totalCssByAttribute("border-right-width"),bottom:this._totalCssByAttribute("border-bottom-width"),left:this._totalCssByAttribute("border-left-width")}}},{key:"_calculatePadding",value:function(){return{top:this._totalCssByAttribute("padding-top"),right:this._totalCssByAttribute("padding-right"),bottom:this._totalCssByAttribute("padding-bottom"),left:this._totalCssByAttribute("padding-left")}}},{key:"_totalCssByAttribute",value:function(t){return parseInt(this._$modalDialog.css(t),10)+parseInt(this._$modalContent.css(t),10)+parseInt(this._$modalBody.css(t),10)}},{key:"_updateTitleAndFooter",value:function(){var t=this._$element.data("title")||"",e=this._$element.data("footer")||"";return this._titleIsShown=!1,t||this._config.alwaysShowClose?(this._titleIsShown=!0,this._$modalHeader.css("display","").find(".modal-title").html(t||"&nbsp;")):this._$modalHeader.css("display","none"),this._footerIsShown=!1,e?(this._footerIsShown=!0,this._$modalFooter.css("display","").html(e)):this._$modalFooter.css("display","none"),this}},{key:"_showYoutubeVideo",value:function(t,e){var i=this._getYoutubeId(t),o=t.indexOf("&")>0?t.substr(t.indexOf("&")):"",a=this._$element.data("width")||560,n=this._$element.data("height")||a/(560/315);return this._showVideoIframe("//www.youtube.com/embed/"+i+"?badge=0&autoplay=1&html5=1"+o,a,n,e)}},{key:"_showVimeoVideo",value:function(t,e){var i=this._$element.data("width")||500,o=this._$element.data("height")||i/(560/315);return this._showVideoIframe(t+"?autoplay=1",i,o,e)}},{key:"_showInstagramVideo",value:function(t,e){var i=this._$element.data("width")||612,o=i+80;return t="/"!==t.substr(-1)?t+"/":t,e.html('<iframe width="'+i+'" height="'+o+'" src="'+t+'embed/" frameborder="0" allowfullscreen></iframe>'),this._resize(i,o),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showVideoIframe",value:function(t,e,i,o){return i=i||e,o.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+e+'" height="'+i+'" src="'+t+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this._resize(e,i),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showHtml5Video",value:function(t,e){var i=this._$element.data("width")||560,o=this._$element.data("height")||i/(560/315);return e.html('<div class="embed-responsive embed-responsive-16by9"><video width="'+i+'" height="'+o+'" src="'+t+'" preload="auto" autoplay controls class="embed-responsive-item"></video></div>'),this._resize(i,o),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_loadRemoteContent",value:function(t,i){var o=this,a=this._$element.data("width")||560,n=this._$element.data("height")||560,s=this._$element.data("disableExternalCheck")||!1;return this._toggleLoading(!1),s||this._isExternal(t)?(i.html('<iframe src="'+t+'" frameborder="0" allowfullscreen></iframe>'),this._config.onContentLoaded.call(this)):i.load(t,e.proxy(function(){return o._$element.trigger("loaded.bs.modal")})),this._$modalArrows&&this._$modalArrows.css("display","none"),this._resize(a,n),this}},{key:"_isExternal",value:function(t){var e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol||"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host}},{key:"_error",value:function(t){return console.error(t),this._containerToUse().html(t),this._resize(300,300),this}},{key:"_preloadImageByIndex",value:function(t,i){if(this._$galleryItems){var o=e(this._$galleryItems.get(t),!1);if(void 0!==o){var a=o.attr("data-remote")||o.attr("href");return("image"===o.attr("data-type")||this._isImage(a))&&this._preloadImage(a,!1),i>0?this._preloadImageByIndex(t+1,i-1):void 0}}}},{key:"_preloadImage",value:function(t,i){var o=this;i=i||!1;var a,n=new Image;return i&&(a=setTimeout(function(){i.append(o._config.loadingMessage)},200),n.onload=function(){a&&clearTimeout(a),a=null;var t=e("<img />");return t.attr("src",n.src),t.addClass("img-fluid"),t.css("width","100%"),i.html(t),o._$modalArrows&&o._$modalArrows.css("display",""),o._resize(n.width,n.height),o._toggleLoading(!1),o._config.onContentLoaded.call(o)},n.onerror=function(){return o._toggleLoading(!1),o._error(o._config.strings.fail+"  "+t)}),n.src=t,n}},{key:"_swipeGesure",value:function(){return this._touchendX<this._touchstartX?this.navigateRight():this._touchendX>this._touchstartX?this.navigateLeft():void 0}},{key:"_resize",value:function(t,i){i=i||t,this._wantedWidth=t,this._wantedHeight=i;var o=t/i,a=this._padding.left+this._padding.right+this._border.left+this._border.right,n=this._config.doc.body.clientWidth>575?20:0,s=this._config.doc.body.clientWidth>575?0:20,l=Math.min(t+a,this._config.doc.body.clientWidth-n,this._config.maxWidth);t+a>l?(i=(l-a-s)/o,t=l):t+=a;var r=0,d=0;this._footerIsShown&&(d=this._$modalFooter.outerHeight(!0)||55),this._titleIsShown&&(r=this._$modalHeader.outerHeight(!0)||67);var h=this._padding.top+this._padding.bottom+this._border.bottom+this._border.top,g=parseFloat(this._$modalDialog.css("margin-top"))+parseFloat(this._$modalDialog.css("margin-bottom")),c=Math.min(i,e(window).height()-h-g-r-d,this._config.maxHeight-h-r-d);i>c&&(t=Math.ceil(c*o)+a),this._$lightboxContainer.css("height",c),this._$modalDialog.css("flex",1).css("maxWidth",t);var _=this._$modal.data("bs.modal");if(_)try{_._handleUpdate()}catch(t){_.handleUpdate()}return this}}],[{key:"_jQueryInterface",value:function(t){var i=this;return t=t||{},this.each(function(){var a=e(i),n=e.extend({},o.Default,a.data(),"object"==typeof t&&t);new o(i,n)})}}]),o}();e.fn[o]=s._jQueryInterface,e.fn[o].Constructor=s,e.fn[o].noConflict=function(){return e.fn[o]=a,s._jQueryInterface}}(t)}()}).call(e,i(0))}]);