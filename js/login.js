/**
 * Login form - confirmation popup on submit
 */

$(document).ready(function () {
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    var username = $("#username").val().trim();
    var password = $("#password").val().trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    $("#popupUsername").text(username);
    $("#loginPopup").addClass("show");
  });

  $("#closePopup, #popupOkBtn").on("click", function () {
    $("#loginPopup").removeClass("show");
  });

  $("#loginPopup").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("show");
    }
  });
});
