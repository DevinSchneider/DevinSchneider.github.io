/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////



  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walker ={
    x:0,
    y:0,
    speedX:0,
    speedY:0
    }
  var walker2 ={
    x: $("#board").width() - 50,
    y: $("#board").height() - 50,
    speedX:0,
    speedY:0
    
  }
  // Game Item Objects
const KEY = {
  ENTER: 13,
  A: 65,
  W: 87,
  D: 68,
  S: 83,

  LEFT_CLICK: 1,
  MIDDLE_CLICK: 2,
  Q:81,
  E:69,
  
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  $(document).mousedown(
  function(event) {
  if (event.which === 1) {
    $("#walker").css("background-color", "purple");
  } 
  else if (event.which === 2) {
    $("#walker").css("background-color", "black");
  } 
  if (event.which === 1) {
    $("#walker2").css("background-color", "white");
  } 
  else if (event.which === 2) {
    $("#walker2").css("background-color", "goldenrod");
  } 
}
);
$(document).mouseup(
  function(event) {
    if (event.which === 1) {
    $("#walker").css("background-color", "rgb(77, 77, 77)");
  } 
  else if (event.which === 2) {
    $("#walker").css("background-color", "rgb(77, 77, 77)");
  } 
  if (event.which === 1) {
    $("#walker2").css("background-color", "rgb(31, 31, 31)");
  } 
  else if (event.which === 2) {
    $("#walker2").css("background-color", "rgb(31, 31, 31)");
  } 
}
);
  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);    
  $(document).on('keyup', handleKeyUp);                      

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    wallCollision()
    taged()
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should srename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */

  function handleKeyDown(event) {
   if (event.which === KEY.A) {
    walker.speedX = -5
}
    else if (event.which === KEY.D) {
    walker.speedX = 5
}
    else if (event.which === KEY.W) {
    walker.speedY = -5
    }
    else if (event.which === KEY.S) {
    walker.speedY = 5   
}
    else if (event.which === KEY.ENTER) {
    console.log("enter pressed");
}

if (event.which === KEY.LEFT) {
    walker2.speedX = -5
}
    else if (event.which === KEY.RIGHT) {
    walker2.speedX = 5
}
    else if (event.which === KEY.UP) {
    walker2.speedY = -5
}
    else if (event.which === KEY.DOWN) {
    walker2.speedY = 5   
}
    else if (event.which === KEY.ENTER) {
    console.log("enter pressed");
}
  }
  function handleKeyUp (event) {
   if (event.which === KEY.A) {
    walker.speedX = 0
}
    else if (event.which === KEY.D) {
  walker.speedX = 0
}
    else if (event.which === KEY.W) {
    walker.speedY = 0
}
    else if (event.which === KEY.S) {
    walker.speedY = 0 
}
    else if (event.which === KEY.ENTER) {
    console.log("enter pressed");
}

if (event.which === KEY.LEFT) {
    walker2.speedX = 0
}
    else if (event.which === KEY.RIGHT) {
    walker2.speedX = 0
}
    else if (event.which === KEY.UP) {
    walker2.speedY = 0
}
    else if (event.which === KEY.DOWN) {
    walker2.speedY = 0 
}
    else if (event.which === KEY.ENTER) {
    console.log("enter pressed");
}


  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.x = walker.speedX + walker.x;
    walker.y = walker.speedY + walker.y;
    walker2.x = walker2.speedX + walker2.x;
    walker2.y = walker2.speedY + walker2.y;
  }
  
  function redrawGameItem() {
    $("#walker").css("left", walker.x)
    $("#walker").css("top", walker.y)
    $("#walker2").css("left", walker2.x)
    $("#walker2").css("top", walker2.y)
  }
  function wallCollision() {
    if (walker.x < 0) {
    walker.x -= walker.speedX;
    }
    else if (walker.y < 0) {
   walker.y -= walker.speedY;
    }
    else if (walker.x > $("#board").width()-50) {
     walker.x -= walker.speedX;
    }
    else if (walker.y > $("#board").height()-50) {
      walker.y -= walker.speedY; 
    }


    if (walker2.x < 0) {
    walker2.x -= walker2.speedX;
    }
    else if (walker2.y < 0) {
    walker2.y -= walker2.speedY;
    }
    else if (walker2.x > $("#board").width() - 50) {
      walker2.x -= walker2.speedX;
    }
    else if (walker2.y > $("#board").height() - 50) {
      walker2.y -= walker2.speedY; 
    }
  }

 




  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
