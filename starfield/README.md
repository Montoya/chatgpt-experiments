# Starfield

> Write a p5.js script that looks like flying through a starfield

Here is a script for p5.js that looks like flying through a starfield:

```JavaScript
let stars = [];

function setup() {
  // Create a canvas
  createCanvas(400, 400);

  // Set the stroke weight and noFill
  strokeWeight(2);
  noFill();

  // Generate random stars
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(-width, width),
      y: random(-height, height),
      z: random(width)
    });
  }
}

function draw() {
  // Clear the canvas
  clear();

  // Set the center of the canvas as the origin
  translate(width / 2, height / 2);

  // Loop through the stars
  for (let i = 0; i < stars.length; i++) {
    // Calculate the new position of the star
    let star = stars[i];
    star.z -= 4;
    if (star.z < 1) {
      star.z = width;
    }

    // Map the 3D position of the star to the 2D canvas
    let x = map(star.x / star.z, 0, 1, 0, width);
    let y = map(star.y / star.z, 0, 1, 0, height);

    // Draw the star
    ellipse(x, y, 4, 4);
  }
}
```

This script generates a random set of stars and animates them to give the illusion of flying through a starfield. The 3D position of each star is mapped to the 2D canvas using the map() function, and the stars are drawn as circles. The z coordinate of each star is decreased on each frame to give the illusion of movement.

To use this script in p5.js, you will need to include the p5.js library in your HTML page, create a canvas element, and call the setup() and draw() functions in your script. Here is an example HTML page that uses the above script:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Starfield</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"></script>
  </head>
  <body>
    <h1>Starfield</h1>

    <canvas id="canvas"></canvas>

    <script>
      // The p5.js script goes here

      let stars = [];

      function setup() {
        // Create a canvas
        createCanvas(400, 400);

        // Set the stroke weight and noFill
        strokeWeight(2);
        noFill();

        // Generate random stars
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: random(-width, width),
            y: random(-height, height),
            z: random(width)
          });
```

> Give me the example code for an anchor tag that will take the user up one level in the site path

Here is an example of an `a` element, or anchor tag, that can be used to take the user up one level in the site path:

```HTML
<a href="../">Up one level</a>
```