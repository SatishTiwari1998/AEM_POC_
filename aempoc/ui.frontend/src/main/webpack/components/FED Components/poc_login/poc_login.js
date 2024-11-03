// Import profiles from the external file
import { profiles } from "./profiles";

$(document).ready(function () {
  // Only proceed if loginForm exists in the DOM
  if ($("#loginForm").length > 0) {
      // Clear any existing user session when the login page loads
  localStorage.setItem("user", JSON.stringify({
    loggedIn: false,
    details: {
      id: null,
      name: null,
      profileImage: null
    }
  }));
    $("#loginForm").on("submit", function (event) {
      event.preventDefault();

      const enteredId = $("#uniqueId").val().trim();
      const errorMessage = $("#error-message");

      // Find if the entered ID exists in the profiles array
      const matchingProfile = profiles.find(profile => profile.id === enteredId);

      if (matchingProfile) {
        // Store user info with loggedIn status in local storage
        localStorage.setItem("user", JSON.stringify({
          loggedIn: true,
          details: {
            id: matchingProfile.id,
            name: matchingProfile.name,
            profileImage: matchingProfile.profileImage
          }
        }));

        window.location.href = "/content/aempoc/en/home.html?wcmmode=disabled";
      } else {
        errorMessage.show();
        localStorage.setItem("user", JSON.stringify({
          loggedIn: false,
          details: {
            id: null,
            name: null,
            profileImage: null
          }
        }));
      }
    });

    // Handle "Continue without Login" button click
    $(".without-login-button").on("click", function () {
      localStorage.setItem("user", JSON.stringify({
        loggedIn: false,
        details: {
          id: null,
          name: null,
          profileImage: null
        }
      }));

      window.location.href = "/content/aempoc/en/home.html?wcmmode=disabled";
    });
  }
});
