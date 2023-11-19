(function () {
  var preTag = document.getElementById("donut");
  var debugTag = document.createElement("div"); // Create a new div element for the debug dashboard
  debugTag.style.position = "fixed";
  debugTag.style.bottom = "0";
  debugTag.style.left = "0";
  debugTag.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  debugTag.style.color = "#ffffff";
  debugTag.style.padding = "10px";
  debugTag.style.fontFamily = "monospace";
  document.body.appendChild(debugTag); // Append the debug dashboard to the body

  // Angles, Radius and Constants
  var A = 1;
  var B = 1;
  var R1 = 1;
  var R2 = 2;
  var K1 = 150;
  var K2 = 5;

  // Function to render ASCII frame
  function renderAsciiFrame() {
    var b = []; // Array to store ASCII characters
    var z = []; // Array to store z depth of each character
    var colors = []; // Array to store colors of each character

    var width = 280; // Width of frame
    var height = 160; // Height of frame

    A += 0.07; // Increment angle a
    B += 0.03; // Increment angle b

    // Sine and Cosine of angles
    var cA = Math.cos(A);
    var sA = Math.sin(A);
    var cB = Math.cos(B);
    var sB = Math.sin(B);

    // Initialize arrays with default angles
    for (var k = 0; k < width * height; k++) {
      // Set default ascii char
      b[k] = k % width == width - 1 ? "\n" : " ";
      // Set default depth
      z[k] = 0;
      // Set default color
      colors[k] = "#ffffff"; // white color
    }

    // Generate the ascii frame
    for (var j = 0; j < 6.28; j += 0.07) {
      var ct = Math.cos(j); // Cosine of j
      var st = Math.sin(j); // Sine of j

      for (var i = 0; i < 6.28; i += 0.02) {
        var sp = Math.sin(i); // Sine of i
        var cp = Math.cos(i); // Cosine of i
        var h = ct + 2; // Height calculation
        var D = 1 / (sp * h * sA + st * cA + 5); // Distance calculation
        var t = sp * h * cA - st * sA; // Temporary variable

        // Calculate coordinates of ascii char
        var x = Math.floor(
          width / 2 + (width / 4) * D * (cp * h * cB - t * sB)
        );
        var y = Math.floor(
          height / 2 + (height / 4) * D * (cp * h * sB + t * cB)
        );

        // Calculate the index in the array
        var o = x + width * y;

        // Calculate the ascii char index
        var N = Math.floor(
          8 *
            ((st * sA - sp * ct * cA) * cB -
              sp * ct * sA -
              st * cA -
              cp * ct * sB)
        );

        // Update ascii char, depth, and color if conditions are met
        if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
          z[o] = D;
          // Update ascii char based on the index
          b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          // Update color based on the depth
          colors[o] = getColor(D);
        }
      }
    }

    // Generate the HTML for the colored ASCII frame
    var html = "";
    for (var i = 0; i < b.length; i++) {
      if (b[i] !== " ") {
        html += '<span style="color:' + colors[i] + '">' + b[i] + "</span>";
      } else {
        html += " ";
      }
    }

    // Update html element with the colored ASCII frame
    preTag.innerHTML = html;

    // Update debug dashboard with current values
    debugTag.innerHTML = `
        <div>Angle A: ${A.toFixed(2)}</div>
        <div>Angle B: ${B.toFixed(2)}</div>
        <div>Width: ${width}</div>
        <div>Height: ${height}</div>
        <div>Radius 1: ${R1}</div>
        <div>Radius 2: ${R2}</div>
        <div>Constant K1: ${K1}</div>
        <div>Constant K2: ${K2}</div>
        <div>FPS: ${calculateFPS().toFixed(2)}</div>
    `;
  }

  // Function to start the animation
  function startAsciiAnimation() {
    // Start it by calling renderAsciiAnimation every 50ms
    window.asciiIntervalId = setInterval(renderAsciiFrame, 50);
  }

  // Function to get color based on depth
  function getColor(depth) {
    // Calculate hue value based on depth
    var hue = Math.floor((depth * 360) % 360);
    // Convert hue to RGB color
    var rgb = hsvToRgb(hue, 0.8, 0.8);
    // Convert RGB to hexadecimal color
    var hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    // Return the color
    return hex;
  }

  // Function to convert HSV to RGB
  function hsvToRgb(h, s, v) {
    var c = v * s;
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    var m = v - c;
    var rgb;

    if (h >= 0 && h < 60) {
      rgb = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      rgb = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      rgb = [0, c, x];
    } else if (h >= 180 && h < 240) {
      rgb = [0, x, c];
    } else if (h >= 240 && h < 300) {
      rgb = [x, 0, c];
    } else {
      rgb = [c, 0, x];
    }

    return [
      Math.round((rgb[0] + m) * 255),
      Math.round((rgb[1] + m) * 255),
      Math.round((rgb[2] + m) * 255),
    ];
  }

  // Function to convert RGB to hexadecimal
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  // Function to calculate FPS
  function calculateFPS() {
    var now = performance.now();
    var elapsed = now - window.lastRenderTime;
    var fps = 1000 / elapsed;
    window.lastRenderTime = now;
    return fps;
  }

  renderAsciiFrame(); // Render the first frame

  // Add event listener to start animation when page is loaded
  if (document.all) {
    // For older versions of IE
    window.attachEvent("onload", startAsciiAnimation);
  } else {
    // For modern browsers
    window.addEventListener("load", startAsciiAnimation, false);
  }

  // Add event listener to update ascii frame when window is resized
  window.addEventListener("resize", renderAsciiFrame);
})();
debugTag.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
debugTag.style.color = "#ffffff";
debugTag.style.padding = "10px";
debugTag.style.fontFamily = "monospace";
document.body.appendChild(debugTag); // Append the debug dashboard to the body

// Angles, Radius and Constants
var A = 1;
var B = 1;
var R1 = 1;
var R2 = 2;
var K1 = 150;
var K2 = 5;

// Particle effect variables
var particles = []; // Array to store particles
var numParticles = 100; // Number of particles
var particleSizeRange = [1, 5]; // Range of particle sizes
var particleSpeedRange = [0.01, 0.05]; // Range of particle speeds

// Function to create a particle
function createParticle() {
  var particle = {
    x: Math.random() * width, // Random x position
    y: Math.random() * height, // Random y position
    size:
      Math.random() * (particleSizeRange[1] - particleSizeRange[0]) +
      particleSizeRange[0], // Random size
    speed:
      Math.random() * (particleSpeedRange[1] - particleSpeedRange[0]) +
      particleSpeedRange[0], // Random speed
    angle: Math.random() * 2 * Math.PI, // Random angle
    color: getRandomColor(), // Random color
  };
  particles.push(particle);
}

// Function to render particles
function renderParticles() {
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];

    // Calculate new position based on angle and speed
    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    // Wrap particles around the screen
    if (particle.x < 0) particle.x = width;
    if (particle.x > width) particle.x = 0;
    if (particle.y < 0) particle.y = height;
    if (particle.y > height) particle.y = 0;

    // Draw particle
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Function to update particles based on donut movement
function updateParticles() {
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];

    // Calculate new angle based on donut movement
    var donutX = Math.floor(
      width / 2 +
        (width / 4) *
          (1 / (Math.sin(particle.angle) * Math.cos(particle.angle) + 5))
    );
    var donutY = Math.floor(
      height / 2 +
        (height / 4) *
          (1 / (Math.sin(particle.angle) * Math.sin(particle.angle) + 5))
    );
    var dx = donutX - particle.x;
    var dy = donutY - particle.y;
    particle.angle = Math.atan2(dy, dx);

    // Update particle size based on donut depth
    var depth = z[Math.floor(particle.x) + width * Math.floor(particle.y)];
    particle.size =
      depth * (particleSizeRange[1] - particleSizeRange[0]) +
      particleSizeRange[0];
  }
}

// Function to render ASCII frame
function renderAsciiFrame() {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Render particles
  renderParticles();

  // Donut rendering code...

  // Update particles
  updateParticles();

  // Generate the HTML for the colored ASCII frame...

  // Update html element with the colored ASCII frame...

  // Update debug dashboard with current values...
}

// Function to start the animation
function startAsciiAnimation() {
  // Start it by calling renderAsciiAnimation every 50ms
  window.asciiIntervalId = setInterval(renderAsciiFrame, 50);
}

// Function to get a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add particles to the array
for (var i = 0; i < numParticles; i++) {
  createParticle();
}

renderAsciiFrame(); // Render the first frame

// Add event listener to start animation when page is loaded...

// Add event listener to update ascii frame when window is resized...

// Rest of the code...
