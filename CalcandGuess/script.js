
function calc() {
        var y = document.getElementById("input3").value;
        var f = document.getElementById("input1").value;
        var g = document.getElementById("input2").value;

    if ((/^[+-]?\d+(\.\d+)?$/.test(f)) && (/^[+-]?\d+(\.\d+)?$/.test(g))){

         // RegEx (regular expression) ctrl if strings contains only numbers (including +/- and "." )

             var a = parseFloat(document.getElementById("input1").value);

             var z = parseFloat(document.getElementById("input2").value);

         switch (y) {
                 
            case "+" :{
                document.getElementById("showText").innerHTML = "Answer: " + (a + z);
                break;
            }

            case "-" :{
                document.getElementById("showText").innerHTML = "Answer: " + (a - z);
                break;
            }

            case "/" :{
                if (z === 0){
                    document.getElementById("showText").innerHTML = "ERROR: divide by zero";
                    break;
                }
                else{
                    document.getElementById("showText").innerHTML = "Answer: " + (a / z);
                    break;
                }
            }

            case "*":{
                document.getElementById("showText").innerHTML = "Answer: " + (a * z);

                break;
            }
                 case "x":{
                document.getElementById("showText").innerHTML = "Answer: " + (a * z);

                break;
            }

            case "^":{
                document.getElementById("showText").innerHTML = "Answer: " + (Math.pow(a, z));
                break;
            }
            
             case "%":{
                document.getElementById("showText").innerHTML = "Answer: " + (a % z);
                break;
            }
                 
            default: {
                document.getElementById("showText").innerHTML = "Sorry you need to type in a right operator";
            }

                }
            }
    
    else {
        document.getElementById("showText").innerHTML = "Sorry you need to type using only numbers";
    }
    
}


//-----------------------------------------------------------------------------------------------
// guessing game code

                
$('#help').attr('disabled','disabled');
$('#sub').attr('disabled','disabled');
                

$(document).ready(function() {      
    $('#ddt').click(function() {
        $(this).attr('disabled','disabled');
    });    
});

var points = 0;
var questions = ["Question 1: What's 2+2x5/10?", "Question 2: What's the full name of batman's butler?","Question 3: Which fictional city is the home of Batman?"];
var answers = ["3","alfred pennyworth","gotham city"];


function guessingGame() {
                    $('#help').removeAttr('disabled');
                    $('#sub').removeAttr('disabled');
    
    if (questions.length > 0){
            document.getElementById("questions").innerHTML = questions.shift();
            document.getElementById("hint").innerHTML = "";
        }
      
    
    else {
        document.getElementById("questions").innerHTML = "You finished the game with total points of " + points + " out of 3";
        document.getElementById("hint").innerHTML = "Press \"restart game\" to play again.";
        $('#help').attr('disabled','disabled');
        $('#sub').attr('disabled','disabled');
    }
}
function hint(){
	
		switch (questions.length) {
            
        case 2:{
            
            document.getElementById("hint").innerHTML = "Do the addition last";
            break;
        }
        case 1: {
			document.getElementById("hint").innerHTML = "First name starts with an \"A\" and his last name starts with a \"P\"";
            break;
        }
        case 0:{
			document.getElementById("hint").innerHTML = "Starts with a \"G\",";   
            break;
        }
      }
	}

function answer() {
      
        if (((document.getElementById("answerBox").value).toLowerCase() == answers.shift()))    {
            points++;
        }
            document.getElementById("answerBox").value = "";
            document.getElementById("points").innerHTML = "Points: " + points;
            guessingGame();
        }
    
       
        
        
       

//---------------------------------------------------------------------------------------------
//-------List




