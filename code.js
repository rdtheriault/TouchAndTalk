$(document).ready(function() {

    var counter = parseInt("1");
	  var catID = "#btn";
	  var rowID = "#c";	
    
    $(document).keydown(function(e){//space
    	if (e.keyCode == 32 ) {
          change("next");
    	}
    });
    
    $(document).keydown(function(e){//up
	    if (e.keyCode == 38 ) {
	      play("up"); 
	     }         
	});
	$(document).keydown(function(e){//down
	    if (e.keyCode == 40 ) {
	      play( "down" );  
	     }        
	});
	$(document).keydown(function(e){//right
	    if (e.keyCode == 39 ) {
	      play("right"); 
	     }         
	});
	$(document).keydown(function(e){//left
	    if (e.keyCode == 37 ) {
	      play( "left" );  
	     }        
	});
    
    $("#next").click(function(){
        change("next");
    });
    
    $("#btn1").click(function(){
        change(1);
    });
    $("#btn2").click(function(){
    	  change(2);
    });
    $("#btn3").click(function(){
        change(3);
    });
    $("#btn4").click(function(){
    	  change(4);
    });
    
    //listen for button clicks by class (all up,down,left,right) to send to audio function. Exp - all up class buttons send "up" to function
    $(".up").click(function(){
    	play("up");
    });
    $(".down").click(function(){
    	play("down");
    });
    $(".right").click(function(){
    	play("right");
    });
    $(".left").click(function(){
    	play("left");
    });
    
    //Changes the viewable buttons (show/hide) and sets global variable counter accordingly.
    function change(count){
      if (count == "next"){counter++; if (counter === 5){counter = 1;}} //up counter if you have more than 4 categories
      else {counter = parseInt(count);}
		
      if (counter === 1){updateShow ("1");}else{ updateHide("1");}
    	if (counter === 2){updateShow ("2");}else{ updateHide("2");}
    	if (counter === 3){updateShow ("3");}else{ updateHide("3");}
    	if (counter === 4){updateShow ("4");}else{ updateHide("4");}
    }
	
	function updateShow(count){
		var catIDa = catID.concat(count);
		var rowIDa = rowID.concat(count);
		$(rowIDa).show();
		$(catIDa).css("border-color", "red"); 
	}
	
	function updateHide(count){
		var catIDa = catID.concat(count);
		var rowIDa = rowID.concat(count);
		$(rowIDa).hide();
		$(catIDa).css("border-color", "white");
	}
    
    //Builds the ID of the audio file from direction sent by clicking or using arrow keys and global variable counter. Then plays corresponding audio.
    function play(dir){
        var audio;
        var id = dir.concat(counter);
        switch(id){
      case "up1":
                audio = new Audio('files/yes.mp3');
                break;
      case "down1":
                audio = new Audio('files/test.mp3');
                break;
			case "right1":
                audio = new Audio('files/test.mp3');
                break;
            case "left1":
                audio = new Audio('files/test.mp3');
                break;
			case "up2":
                audio = new Audio('files/no.mp3');
                break;
            case "down2":
                audio = new Audio('files/test.mp3');
                break;
			case "right2":
                audio = new Audio('files/test.mp3');
                break;
            case "left2":
                audio = new Audio('files/test.mp3');
                break;
			case "up3":
                audio = new Audio('files/test.mp3');
                break;
            case "down3":
                audio = new Audio('files/test.mp3');
                break;
			case "right3":
                audio = new Audio('files/test.mp3');
                break;
            case "left3":
                audio = new Audio('files/test.mp3');
                break;	
			case "up4":
                audio = new Audio('files/test.mp3');
                break;
            case "down4":
                audio = new Audio('files/test.mp3');
                break;
			case "right4":
                audio = new Audio('files/test.mp3');
                break;
            case "left4":
                audio = new Audio('files/test.mp3');
                break;
        }
        audio.play();
    }

});
