;(function(document, $) {
  var handler = function () {
    $("g[id^='s']").on('click', function (event) {
      var $this = $(this);
      var selectedStation = $this.attr('metro-station-name');
      var coords = stations[selectedStation];
      // call to the app
      App.selectStation(selectedStation, coords.lat, coords.lng);
      console.log(JSON.stringify(stations[selectedStation]));
    })
  };

  $(document).ready(handler);
})(document, jQuery);
