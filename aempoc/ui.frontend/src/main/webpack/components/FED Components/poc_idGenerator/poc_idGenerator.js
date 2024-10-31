// Array to store existing unique IDs
const existingIds = ["ABC123", "XYZ789", "DEF456"]; // Example existing IDs

document.getElementById("generateIdBtn").addEventListener("click", function () {
  const username = document.getElementById("usernameInput").value;

  if (!username.trim()) {
    alert("Please enter your name.");
    return;
  }

  let uniqueId = generateUniqueId();

  // Check if the generated ID already exists, and regenerate until it is unique
  while (existingIds.includes(uniqueId)) {
    uniqueId = generateUniqueId();
  }

  // Add the new unique ID to the existingIds array
  existingIds.push(uniqueId);

  // Show the welcome message and unique ID in the modal
  document.getElementById("welcomeMessage").textContent = `Hello, ${username}!`;
  document.getElementById("uniqueId").textContent = uniqueId;

  // Show the modal (using vanilla JS)
  showModal();
});

function generateUniqueId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  const randomLetters = Array.from({ length: 3 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
  const randomNumbers = Array.from({ length: 3 }, () => numbers[Math.floor(Math.random() * numbers.length)]).join("");

  return randomLetters + randomNumbers;
}

function showModal() {
  const modal = document.getElementById("idModal");
  modal.style.display = "block";
  modal.classList.add("show");

  // Add event listeners for closing the modal
  document.querySelectorAll('[data-dismiss="modal"]').forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      closeModal(modal);
    });
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

function closeModal(modal) {
  modal.style.display = "none";
  modal.classList.remove("show");
}
