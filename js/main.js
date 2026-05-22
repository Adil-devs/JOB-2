/**
 * Daily News Portal - Main JavaScript
 * Date & Time, Breaking News Ticker
 */

$(document).ready(function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  initNewsTicker();
});

function updateDateTime() {
  var now = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  var formatted = now.toLocaleString("en-US", options);
  $("#datetime-display").text(formatted);
}

/**
 * jQuery News Ticker - cycles through breaking news items
 */
function initNewsTicker() {
  var $items = $("#news-ticker li");
  if ($items.length === 0) return;

  var current = 0;
  $items.hide().removeClass("active");
  $items.eq(0).show().addClass("active");

  setInterval(function () {
    $items.eq(current).fadeOut(400, function () {
      $(this).removeClass("active");
      current = (current + 1) % $items.length;
      $items.eq(current).fadeIn(400).addClass("active");
    });
  }, 4000);
}
