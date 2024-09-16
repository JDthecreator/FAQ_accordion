

// Select all buttons and panels
const buttons = document.querySelectorAll(".panelbutton");
const panels = document.querySelectorAll(".panel1, .panel2, .panel3, .panel4");

// Loop through all buttons and attach a click event
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Toggle the display of the corresponding panel
    const panel = panels[index];
    if (panel.style.display === "none" || panel.style.display === "") {
      panel.style.display = "block"; // Show the panel
    } else {
      panel.style.display = "none"; // Hide the panel
    }
  });
});
