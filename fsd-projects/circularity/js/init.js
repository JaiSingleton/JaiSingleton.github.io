var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#ff0000ff');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
    var circles = [];


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#3700ffff", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        } 


        // TODO 3 : Call the drawCircle() function
    drawCircle()
    drawCircle()
    drawCircle()
    drawCircle()
    drawCircle()

        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++) {
        game.drawCircle(circles[i]); 
}




        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
           
            
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
        
      

            // TODO 8 / TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++) {
            physikz.updatePosition(circles[1]);
            game.checkCirclePosition(circles[4]);
           }
            
           }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
        // Right Boundary (example provided in instructions):
  if (circle.x > CANVAS_WIDTH) {
    circle.x = 0;
  }

  // Left Boundary:
  // When the x position moves off the left side (circle.x < 0),
  // set circle.x to the right edge (CANVAS_WIDTH).
  if (circle.x < 0) {
    circle.x = CANVAS_WIDTH;
  }

  // Top Boundary:
  // When the y position moves off the top edge (circle.y < 0),
  // set circle.y to the bottom edge (CANVAS_HEIGHT).
  if (circle.y < 0) {
    circle.y = CANVAS_HEIGHT;
  }

  // Bottom Boundary:
  // When the y position moves off the bottom edge (circle.y > CANVAS_HEIGHT),
  // set circle.y to the top edge (0).
  if (circle.y > CANVAS_HEIGHT) {
    circle.y = 0;
  }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
