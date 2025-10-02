$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 200, 200, 20, "red"); // dark red for a finished platform

    // Corrected: Added a height (e.g., 20) and removed the extra comma.
    createPlatform(450, 500, 150, 90, "orange"); // bright orange for a finished platform

    createPlatform(600, 20, 10, 300, "yellow"); // bright yellow for a finished platform

    // Corrected: Removed the trailing comma.
    createPlatform(500, -350, 40, 20, "green"); // dark green for a finished platform
    createPlatform(00, 600, 200, 20, "cyan"); // light blue for a finished platform
    createPlatform(740, 500, 100, 30, "blue"); // dark blue for finished platform
    createPlatform(400, 610, 101, 40, "indigo"); // dark purple for finished platform
    createPlatform(200, 320, 50, 420, "violet"); // light purple for finished platform
    createPlatform(600, 300, 101, 20, "black"); // black for a finished platform

    // TODO 3 - Create Collectables
    createCollectable("steve", 800, 700);
    createCollectable("diamond", 200, 170);
    createCollectable("grace", 390, 400);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);
    createCannon("right", 300, 1000);
    createCannon("bottom", 1000, 705);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
