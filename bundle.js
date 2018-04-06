;(function(document, $) {
  var handler = function () {
    $("g[id^='s']").on('click', function (event) {
      var $this = $(this);
      var selectedStation = $this.attr('metro-station-name');
      console.log('selectedStation', selectedStation);
    })
  };

  $(document).ready(handler);
})(document, jQuery);
