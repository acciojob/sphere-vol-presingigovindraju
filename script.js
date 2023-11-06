// Function to calculate the volume of a sphere
function volume_sphere() {
  // Get the radius input element
  var radiusInput = document.getElementById("radius");
  
  // Get the volume output element
  var volumeOutput = document.getElementById("volume");

  // Parse the radius as a float
  var radius = parseFloat(radiusInput.value);

  // Check if the input is a valid number
  if (!isNaN(radius)) {
    // Calculate the volume of the sphere using the formula (4/3) * π * r^3
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set the calculated volume in the volume field
    volumeOutput.value = volume.toFixed(2); // Display volume with 2 decimal places
  } else {
    // Display an error message if the input is not a valid number
    volumeOutput.value = "Invalid input";
  }
}

// Add an event listener to the form to call volume_sphere on form submit
document.getElementById("MyForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  volume_sphere(); // Calculate the volume
});
