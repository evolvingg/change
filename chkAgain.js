/*
 * jQuery ReadLessReadMore plugin 1.0.0
 */
(function($) {
 $.fn.ReadLessReadMore = function(settings) {
  var config = {
   showLines: 3,
   moreText: "more",
   lessText: "less",
   buttonTopMar: "marTop_10"
  },
  divHeight;
  if (settings) {
   $.extend(config, settings);
  }
  $(document).off("click", '.morelink');
  $(document).on({
   click: function() {
    var $this = $(this),
    $elem=$this.parents().find(".text-content");
    if ($elem.hasClass("short-text")) {
        $elem.removeClass("short-text");
        $this.html(config.lessText);
        divHeight = $elem.height();
        $elem.css("height","auto");
    } else {
        $elem.addClass("short-text");
        $this.html(config.moreText);
        $elem.css("height",divHeight);
        $elem.css("overflow","hidden");
    }
    return false;
   }
  }, '.morelink');
  return this.each(function() {
   var $this = $(this),divHeight;
   var $content = $this.find(".text-content"),
   lineHeight= $content.css('line-height');
   divHeight= ((config.showLines)*(parseInt(lineHeight, 10)+3)) + "px";
   if($content.hasClass("short-text")){
      $content.css("height","auto");
   }
   else{
    $content.addClass("short-text");
    $content.css("overflow","hidden");
    $content.css("height",divHeight);
    $content.on("focus",function(){
      $(this).attr('aria-hidden', 'false');
    })
   }
   html='<p class="'+config.buttonTopMar+'"><a href="#" class="morelink morelinkStyle">' + config.moreText + '</a></p></span>';
   $this.append(html);
  });
 };
})(jQuery);