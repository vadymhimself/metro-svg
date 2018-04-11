;(function(document, $) {
  var handler = function () {
    $("g[id^='s']").on('click', function (event) {
      var $this = $(this);
      var selectedStation = $this.attr('metro-station-name');
      console.log('selectedStation', JSON.stringify(stations[selectedStation]));
    })
  };

  $(document).ready(handler);
})(document, jQuery);
