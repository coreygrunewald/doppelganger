function doSubmit() { 

   		context.font = 'BlackoutMidnight';





		// NAME WRITING
   		var myName = document.getElementById("name").value;
   		context.fillStyle = "black";	
   		context.font = '48px BlackoutMidnight';
   		context.textAlign = "left";
		context.textBaseline = "bottom";
		context.fillText("I am " + myName, 10, 590); 
		
		
		// FAVORITE NUMBER 
		
		var myNum = eval(document.getElementById("target").favNumber.value);
   		context.fillStyle = "rgba(0,0,0,.8)";	
   		context.font = '600px BlackoutMidnight';
   		context.textAlign = "right";
		context.textBaseline = "top";
		context.fillText(myNum, 800, 0); 
		
		// Height DRAW
		
	
		var dx = eval(document.getElementById("target").height.value);
		
		var col = Math.floor(Math.random()*256);
	    var col2 = Math.floor(Math.random()*256);
		var col3 = Math.floor(Math.random()*256);
		        
		for (var x = 0; x < 800; x+=50)
		for (var y = 0; y < 600; y+=50)
		{
		context.fillStyle = "rgba("+col+","+col2+","+col3+", .3)";
		context.fillRect(x,y,dx,dx);
		}

		// ANIMALS
		
		// SLOTH
		
		var anim = document.getElementById("animal").value;
		
		if (anim == "sloth") {
		var sloth = new Image();
  		sloth.src = "animals/sloth.png";
  		sloth.onload = function () {
  		for (var x = 0;x < 800;x += 50) 
  		for (var y = 0;y < 600;y += 50)
  		{context.drawImage(sloth, x, y, 50, 50);}		
  		};
  		}
		
		// DOG
		
		if (anim == "dog") {
  		var dog = new Image();
  		dog.src = "animals/dog.png";
  		dog.onload = function () {
  		for (var x = 0;x < 800;x += 50) 
  		for (var y = 0;y < 600;y += 50)
  		{context.drawImage(dog, x, y, 50, 50);}
  		};
		}
		
		// CAT
		
		if (anim == "cat") {
  		var cat = new Image();
  		cat.src = "animals/cat.png";
  		cat.onload = function () {
  		for (var x = 0;x < 800;x += 50) 
  		for (var y = 0;y < 600;y += 50)
  		{context.drawImage(cat, x, y, 50, 50);}
  		};
		}
		
		// BEAR
		
		if (anim == "bear") {
		var bear = new Image();
  		bear.src = "animals/bear.png";
  		bear.onload = function () {
  		for (var x = 0;x < 800;x += 50) 
  		for (var y = 0;y < 600;y += 50)
  		{context.drawImage(bear, x, y, 50, 50);}
  		};
  		}

		
		// MANATEE
		
		if (anim == "manatee") {
  		var manatee = new Image();
  		manatee.src = "animals/manatee.png";
  		manatee.onload = function () {
  		for (var x = 0;x < 800;x += 50) 
  		for (var y = 0;y < 600;y += 50)
  		{context.drawImage(manatee, x, y, 50, 50);}
  		};
		}
		
		
		
		// DOODLE.JS -- Age DRAW
		
		(function(oo) {
		
		var color = document.getElementById("color").value;
		
		if (color == "red") {
		var favColor = 'red';
		}
		if (color == "blue") {
		var favColor = 'blue';
		}
		if (color == "green") {
		var favColor = 'green';
		}
		if (color == "yellow") {
		var favColor = 'yellow';
		}
		if (color == "orange") {
		var favColor = 'orange';
		}
		if (color == "purple") {
		var favColor = 'purple';
		}

    oo.canvas('#grid');
    var cx = 0; //oo.canvas().width/2;  //horizontal center of canvas
    var cy = 0;//oo.canvas().height/2; //vertical center of canvas
    
    var xx = eval(document.getElementById("target").age.value);


    var dot = oo.circle({x:cx, y:cy, radius:10, fill:(favColor)});
    dot.draw(); //initial red circle in the center

    var r = 0; //radius of our outside circle
    var a = 0;   //angle of rotation in degrees

    //function to convert degrees to radians
    var radians = function (deg) { return deg * Math.PI/180; };


    //a traditional for-loop, called 24 times
    for(var i=0; i < 24; i++) {
    r = xx*4
        //give dot some new coordinates and a random color
        dot.modify({x: cx + Math.cos(radians(a)) * r,
                    y: cy + Math.sin(radians(a)) * r,
                    fill:(favColor), radius:20});
        dot.draw(); //draw to canvas
        a += 40; //increment angle by 15 degrees
    }
    for(var i=0; i < 24; i++) {
    r = xx*9
        //give dot some new coordinates and a random color
        dot.modify({x: cx + Math.cos(radians(a)) * r,
                    y: cy + Math.sin(radians(a)) * r,
                    fill:(favColor), radius:30});
        dot.draw(); //draw to canvas
        a += 30; //increment angle by 15 degrees
    }
    for(var i=0; i < 24; i++) {
    r = xx*14;
        //give dot some new coordinates and a random color
        dot.modify({x: cx + Math.cos(radians(a)) * r,
                    y: cy + Math.sin(radians(a)) * r,
                    fill:(favColor), radius:40});
        dot.draw(); //draw to canvas
        a += 20; //increment angle by 15 degrees
    }     
    for(var i=0; i < 24; i++) {
    r = xx*21;
        //give dot some new coordinates and a random color
        dot.modify({x: cx + Math.cos(radians(a)) * r,
                    y: cy + Math.sin(radians(a)) * r,
                    fill:(favColor), radius:50});
        dot.draw(); //draw to canvas
        a += 20; //increment angle by 15 degrees
    }     	
 })($doodle);
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		// DOODLE.JS -- GENDER DRAW
  		
  		(function(pp) {
  		
  		var sex = document.getElementById("sex").value;
  		
  		if (sex == "male") {
  		    pp.canvas('#grid');
            var triangles = [];
            var tri_shape = function() {
                pp.gfx.fillStyle = 'rgba(10, 200, 30, 0.3)'; 
                pp.gfx.beginPath();
                pp.gfx.moveTo(100,100);
                pp.gfx.lineTo(50,0);
                pp.gfx.lineTo(0,100);
                pp.gfx.lineTo(100,100);
                pp.gfx.strokeStyle = "black";
                pp.gfx.stroke();
                pp.gfx.fill();
            };

            for(var i = 0; i < 20; i++) {
                for(var j = 0; j < 20; j++) {
                    var tri = pp.sprite({x: i * 50,
                                         y: j * 50,
                                         shape:tri_shape,
                                         scale:0.5});
                    triangles.push(tri);
                }
            };
          
          var length = triangles.length;
          var i = length;
          while(--i > -1) {triangles[i].draw();};
          }
          
          
          if (sex == "female") {
  		            pp.canvas('#grid');
            var triangles = [];
            var tri_shape = function() {
                pp.gfx.fillStyle = 'rgba(10, 10, 220, 0.3)'; 
                pp.gfx.beginPath();
                pp.gfx.moveTo(0,0);
                pp.gfx.lineTo(100,0);
                pp.gfx.lineTo(50,100);
                pp.gfx.lineTo(0,0);
                pp.gfx.strokeStyle = "black";
                pp.gfx.stroke();
                pp.gfx.fill();
            };

            for(var i = 0; i < 20; i++) {
                for(var j = 0; j < 20; j++) {
                    var tri = pp.sprite({x: i * 50,
                                         y: j * 50,
                                         shape:tri_shape,
                                         scale:0.5});
                    triangles.push(tri);
                }
            };
          
          var length = triangles.length;
          var i = length;
          while(--i > -1) {triangles[i].draw();};
          }
       
        })($doodle);
      	
		
} // end of function doSubmit()
		
		
// SAVE CANVAS	
		
		
function doSave()
{
	window.open(grid_canvas.toDataURL('image/png'),'mywindow');
}


// CLEAR CANVAS

function clearCanvas() {
	context.clearRect(0, 0, 800, 600);
	
	context.fillStyle = "#fff";
	context.fillRect(0,0,800,600);
	
	for (var x = 0.5; x < 800; x += 10) {
  				context.moveTo(x, 0);
  				context.lineTo(x, 600);
			}

			for (var y = 0.5; y < 600; y += 10) {
  				context.moveTo(0, y);
  				context.lineTo(800, y);
			}
			context.strokeStyle = "#eee";
			context.stroke();
			
}

// Email a Friend

var initialsubj="Doppelganger"
var good;
function checkEmailAddress(field) {

var goodEmail = field.value.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\.info)|(\.sex)|(\.biz)|(\.aero)|(\.coop)|(\.museum)|(\.name)|(\.pro)|(\..{2,2}))$)\b/gi);
if (goodEmail) {
good = true;
}
else {
alert('Please enter a valid address.');
field.focus();
field.select();
good = false;
   }
}
u = window.location;
function mailThisUrl() {
good = false
checkEmailAddress(document.eMailer.email);
if (good) {

window.location = "mailto:"+document.eMailer.email.value+"?subject="+initialsubj   }
}




