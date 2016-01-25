function Vacation(city, country, season, duration, highlights) {
  this.city = city,
  this.country = country,
  this.season = season,
  this.duration = duration,
  this.highlights = highlights
}

Vacation.prototype.placeName =function() {
  return this.city + ', ' + this.country;
}

Vacation.prototype.timeDuration = function() {
  return this.duration + ' days in the ' + this.season.toLowerCase();
}
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#new-vacation").submit(function(event) {
    event.preventDefault();
    var inputtedCity = $("input#new-vacation-city").val();
    var inputtedCountry = $("input#new-vacation-country").val();
    var inputtedSeason = $("input#new-vacation-season").val();
    var inputtedDuration = parseInt($("input#new-vacation-duration").val());
    var inputtedHighlights = $("input#new-vacation-highlights").val();

    var newVacation = new Vacation(inputtedCity, inputtedCountry, inputtedSeason, inputtedDuration, inputtedHighlights);
    console.log(newVacation);
    $("ul#places").append('<li><span class="place">' + newVacation.placeName() + '</span><p><span class="hideme" id="' + newVacation.city + newVacation.duration + '">Visited for </span></p> <p><span class="hideme" id="' + newVacation.city + newVacation.season + '">Recommend: </span></p></li>');

    $("input#new-vacation-city").val("");
    $("input#new-vacation-country").val("");
    $("input#new-vacation-season").val("");
    $("input#new-vacation-duration").val("");
    $("input#new-vacation-highlights").val("");

    $(".place").last().click(function() {
      $(".hideme").hide();
      $(".hideme#" + newVacation.city + newVacation.duration).empty().append(newVacation.timeDuration());
      $(".hideme#" + newVacation.city + newVacation.duration).show();
      $(".hideme#" + newVacation.city + newVacation.season).empty().append(newVacation.highlights);
      $(".hideme#" + newVacation.city + newVacation.season).show();

    });

  });

}); // End document ready function
