var scores = 0, lives = 5, fires= 0, round = 1, high = 0;

function imhere() { // hide and show buttons on the home page
	document.getElementById("imhere").style.display = "inline";
	//document.getElementById("aud").play();
}
var myname;

function start() { // to write the player name and save it in a variable 
		myname = prompt("What's your name", "Player "+ round);
	if (myname !== null) {
		document.getElementById("welcmain").style.display = "none";
		document.getElementById("l1main").style.display = "block";
		document.getElementById("welchead").style.display = "none";
		document.getElementById("l1head").style.display = "block";
		document.getElementById("infor").style.display = "flex";
		document.getElementById("playername").innerHTML = myname;
		document.getElementById("l1back").style.marginRight =0;
		marback = 0;
	} 
	else {alert("Write your name");}
}

var marback = 0;
function back() { // to move the back button
	marback += 20;
	document.getElementById("l1back").style.marginRight = marback + "px";
}

function l1next() { // to pass the first level and confirm the name and a possiplty to change it
	var con = confirm("If you really want to change your name, go to where you brought your ID from. Otherwise press ok to continue");
		if (con == true) {
		document.getElementById("l1main").style.display = "none";
		document.getElementById("l1head").style.display = "none";
		document.getElementById("l2main").style.display = "block";
		document.getElementById("l2head").style.display = "block";
		document.getElementById("level").innerHTML= "2";
		scores += 100;
		document.getElementById("score").innerHTML= scores;
	

		} else {
		document.getElementById("welcmain").style.display = "block";
		document.getElementById("welchead").style.display = "block";
		document.getElementById("l1main").style.display = "none";
		document.getElementById("l1head").style.display = "none";
		document.getElementById("infor").style.display = "none";
	
		}
}

function l2next() {  //to pass the second level and roll dice with two different random number and check if your dice is higher 
	if (lives < 1) {lose();} else {  // to check how many lives rest and die if they are 0
	var ydice = Math.floor(Math.random() * 6) + 1;
	var mdice = Math.floor(Math.random() * 6) + 1;
	
	document.getElementById("dice1").style.display = "none";
	document.getElementById("dice2").style.display = "none";
	
	var vyd1 = document.getElementById("yd1");
	var vyd2 = document.getElementById("yd2");
	var vyd3 = document.getElementById("yd3");
	var vyd4 = document.getElementById("yd4");
	var vyd5 = document.getElementById("yd5");
	var vyd6 = document.getElementById("yd6");
	var vmd1 = document.getElementById("md1");
	var vmd2 = document.getElementById("md2");
	var vmd3 = document.getElementById("md3");
	var vmd4 = document.getElementById("md4");
	var vmd5 = document.getElementById("md5");
	var vmd6 = document.getElementById("md6");

	
	vyd1.style.display="none";
	vyd2.style.display="none";
	vyd3.style.display="none";
	vyd4.style.display="none";
	vyd5.style.display="none";
	vyd6.style.display="none";
	vmd1.style.display="none";
	vmd2.style.display="none";
	vmd3.style.display="none";
	vmd4.style.display="none";
	vmd5.style.display="none";
	vmd6.style.display="none";
	
	
	if (ydice == 1) {vyd1.style.display="block";} 
	else if (ydice == 2) {vyd2.style.display="block";}
	else if (ydice == 3) {vyd3.style.display="block";}
	else if (ydice == 4) {vyd4.style.display="block";}
	else if (ydice == 5) {vyd5.style.display="block";}
	else if (ydice == 6) {vyd6.style.display="block";}
	
	if (mdice == 1) {vmd1.style.display="block";} 
	else if (mdice == 2) {vmd2.style.display="block";}
	else if (mdice == 3) {vmd3.style.display="block";}
	else if (mdice == 4) {vmd4.style.display="block";}
	else if (mdice == 5) {vmd5.style.display="block";}
	else if (mdice == 6) {vmd6.style.display="block";}
	
	if (ydice < mdice) {document.getElementById("result2").innerHTML = "HA HA HA HA"; lives--; scores -= 10;}
	else if (ydice > mdice) { document.getElementById("l2win").style.display = "block"; document.getElementById("result2").style.display="none"; document.getElementById("l2pass").style.display="none";}
	else {document.getElementById("result2").innerHTML = "It is not win win, roll again";}
	document.getElementById("live").innerHTML = lives;
	
	
}	
}

function pass2(){ // to jumb to the next level after winning
	document.getElementById("l2main").style.display = "none";
	document.getElementById("l2head").style.display = "none";
	document.getElementById("l3main").style.display = "block";
	document.getElementById("l3head").style.display = "block";
	document.getElementById("level").innerHTML= "3";
	scores += 100;
	document.getElementById("score").innerHTML= scores;
}
	
function l3next() { // guess the name of the pokemon 
	if (lives < 1) {lose();} else { 
	var guess = prompt("Guess who is this Pokemon", "Pokemon") 
	if (guess == "Charmander" || guess == "charmander") {
	alert("Yes, from now you have a new ability. Charmander can help you to skip a level. Just click the fire icon to use it. ((Keep it for the cold days))");
	document.getElementById("l3main").style.display = "none";
	document.getElementById("l3head").style.display = "none";
	document.getElementById("l4main").style.display = "block";
	document.getElementById("l4head").style.display = "block";
	document.getElementById("level").innerHTML= "4"; 
	fires++; // to get the new ability 
	document.getElementById("firesco").innerHTML= fires;
	scores += 100; // to get scores
	document.getElementById("score").innerHTML= scores;
	
	}
	else {lives--; alert("NO, not this one");
		 	document.getElementById("live").innerHTML = lives;
}
}	
	
}	

function fire4(){ // to pass by useing the ability
	if (fires >= 1 ){
	pass4();
	fires--;	
	document.getElementById("firesco").innerHTML= fires;
} else {alert("You lost this ability")}

}

function pass4(){
	document.getElementById("level").innerHTML= "5";
	document.getElementById("l4main").style.display = "none";
	document.getElementById("l4head").style.display = "none";
	document.getElementById("l5main").style.display = "block";
	document.getElementById("l5head").style.display = "block";
	document.getElementById("fire4").style.display = "none";
	document.getElementById("fire5").style.display = "inline-block";
	document.getElementById("live").innerHTML = lives;
	document.getElementById("score").innerHTML= scores;

}


function l4next() { // here we have some questions that the player need to answer them and get 20 scores for each right answer and he needs 60 to pass or the game ask to repeat or die util the player lose all his lives then he die

var q = 0;	

while (q < 101) {
	if (lives < 1) {lose();break;} else {
var q1 = prompt("What is the name of the Asian food that contain fish and rice?");
if (q1 !== null) { 
	if (q1 == "Sushi" || q1 == "sushi" || q1 == "SUSHI") { q += 20; alert("Good answer your score is " + q + " NEXT dish!!!");} 
	else {alert("Disgusting taste, your score is " + q + " NEXT dish!!!");}} 
else {break; }
	
var q2 = prompt("Do vegan people eat EGGS? ('yes' or 'no')");
if (q2 !== null) { 
	if (q2 == "no" || q2 == "No" || q2 == "NO" ) { q += 20; alert("Good answer your score is " + q + " NEXT dish!!!");} 
	else {alert("Disgusting taste, your score is " + q + " NEXT dish!!!");}} 
else {alert("I'm still hungry, I will eat you"); lives--; document.getElementById("live").innerHTML = lives; break; }
	
var q3 = prompt("What is the most famous food in Italy");
if (q3 !== null) { 
	if (q3 == "Pizza" || q3 == "pizza" || q3 == "PIZZA" ) { q += 20; alert("Good answer your score is " + q + " NEXT dish!!!");} 
	else {alert("Disgusting taste, your score is " + q + " NEXT dish!!!");}} 
else {alert("I'm still hungry, I will eat you"); lives--; document.getElementById("live").innerHTML = lives; break; }

	
var q4 = prompt("Write anyfood");
if (q4 !== null) { 
	if (q4 == "AnyFood" || q4 == "anyfood" || q4 == "Anyfood" || q4 == "ANYFOOD") { q += 20; alert("Good answer your score is " + q + " NEXT dish!!!");} 
	else {alert("Disgusting taste, your score is " + q + " NEXT dish!!!");}} 
else {alert("I'm still hungry, I will eat you"); lives--; document.getElementById("live").innerHTML = lives; break; }	
	
var q5 = prompt("What do you get when you eat a lot");
if (q5 !== null) { 
	if (q5 == "Fat" || q5 == "fat" || q5 == "FAT") { q += 20; alert("Good answer your score is " + q + " I do not want to eat anymore");} 
	else {alert("You get fat, your score is " + q + " I do not want to eat anymore");}} 
else {alert("I'm still hungry, I will eat you"); lives--; document.getElementById("live").innerHTML = lives; break; }		

if (q == 100) {alert("Great job, full stomach means 2 extra lives and extra 100 scores. you pass!"); lives += 2; scores += 200; pass4(); break;}
else if (q >= 60 && q < 100) {alert("Ok, you get one live too. you pass!");lives += 1; scores += q; pass4(); break;}
else {lives--; var conf = confirm("Your scores never let you pass, try again and lose a live"); 
	if (conf == true) { q=0; continue;} else {break;}}
	
}
}	
}	
	

function l5next() { // build a random number between 1-3 and compare it to the player choices (rock - paper - scissor) and then win or lose depending on the possipility 
			if (lives < 1) {lose();} else { 

	var jhand = Math.floor(Math.random() * 3) + 1;
	var mhand = prompt("Write one of those (rock) (paper) (scissors) in small letters"); 
	
	var jsci = document.getElementById("sci");
	var jroc = document.getElementById("roc");
	var jpap = document.getElementById("pap");
	
	var plsci = document.getElementById("psci");
	var plroc = document.getElementById("proc");
	var plpap = document.getElementById("ppap");

	jsci.style.display="none";
	jroc.style.display="none";
	jpap.style.display="none";
	plsci.style.display="none";
	plroc.style.display="none";
	plpap.style.display="none";
	
	
	if (jhand == 1) {jsci.style.display="block";} 
	else if (jhand == 2) {jroc.style.display="block";}
	else if (jhand == 3) {jpap.style.display="block";}
	
	if (mhand == "scissors") {plsci.style.display="block";} 
	else if (mhand == "rock") {plroc.style.display="block";}
	else if (mhand == "paper") {plpap.style.display="block";}

if (mhand == "scissors" || mhand == "rock" || mhand == "paper") {
	if (jhand == 1 && mhand == "scissors") {document.getElementById("result5").innerHTML = "It is not win win, play again";}
	else if (jhand == 2 && mhand == "scissors") {document.getElementById("result5").innerHTML = "HA HA HA HA"; lives--; scores -=20; document.getElementById("live").innerHTML = lives;document.getElementById("score").innerHTML= scores;}
	else if (jhand == 3 && mhand == "scissors") { document.getElementById("l5win").style.display = "block"; document.getElementById("result5").style.display="none"; document.getElementById("l5pass").style.display="none";}
	else if (jhand == 1 && mhand == "rock") { document.getElementById("l5win").style.display = "block"; document.getElementById("result5").style.display="none"; document.getElementById("l5pass").style.display="none";}
	else if (jhand == 2 && mhand == "rock") {document.getElementById("result5").innerHTML = "It is not win win, play again";}
	else if (jhand == 3 && mhand == "rock") {document.getElementById("result5").innerHTML = "HA HA HA HA"; lives--; scores -=20; document.getElementById("live").innerHTML = lives; document.getElementById("score").innerHTML= scores;}
	else if (jhand == 1 && mhand == "paper") {document.getElementById("result5").innerHTML = "HA HA HA HA"; lives--; scores -=20; document.getElementById("live").innerHTML = lives; document.getElementById("score").innerHTML= scores;}
	else if (jhand == 2 && mhand == "paper") { document.getElementById("l5win").style.display = "block"; document.getElementById("result5").style.display="none"; document.getElementById("l5pass").style.display="none";}
	else if (jhand == 3 && mhand == "paper") {document.getElementById("result5").innerHTML = "It is not win win, play again";}
} else {alert("Play it write ;) . Come back soon!!!");}	
		
		
		
		
}		
}
function fire5(){
	if (fires >= 1 ){
	pass5();
	fires--;	
	document.getElementById("firesco").innerHTML= fires;
} else {alert("You lost this ability")}
}
function pass5(){
	document.getElementById("level").innerHTML= "6";
	document.getElementById("l5main").style.display = "none";
	document.getElementById("l5head").style.display = "none";
	document.getElementById("l6main").style.display = "block";
	document.getElementById("l6head").style.display = "block";
	document.getElementById("fire5").style.display = "none";
	document.getElementById("fire6").style.display = "inline-block";
	document.getElementById("score").innerHTML= scores;

}


function covid1() { // hide the picture on click 
	document.getElementById("l6pass").style.zIndex = "1";
	document.getElementById("covid1").style.visibility = "hidden";
}

function covid2() {
	document.getElementById("covid2").style.visibility = "hidden";
}
function covid3() {
	document.getElementById("covid3").style.visibility = "hidden";
}
function covid4() {
	document.getElementById("covid4").style.visibility = "hidden";
}
function covid5() {
	document.getElementById("covid5").style.visibility = "hidden";
}
function covid6() {
	document.getElementById("covid6").style.visibility = "hidden";
}
function covid7() {
	document.getElementById("covid7").style.visibility = "hidden";
}

function fire6(){
	if (fires >= 1 ){
	scores -=100;
	l6next();
	fires--;
	document.getElementById("firesco").innerHTML= fires;
} else {alert("You lost this ability")}
	}

function l6next(){
	document.getElementById("level").innerHTML= "7";
	document.getElementById("l6main").style.display = "none";
	document.getElementById("l6head").style.display = "none";
	document.getElementById("l7main").style.display = "block";
	document.getElementById("l7head").style.display = "block";
	document.getElementById("fire6").style.display = "none";
	document.getElementById("fire7").style.display = "inline-block";
	scores += 100;
	document.getElementById("score").innerHTML= scores;
}

function charma() { //special level to use the ability to pass, this function is included in another one to run it
			document.getElementById("level").innerHTML= "?";
			document.getElementById("live").innerHTML= lives ;
			scores += 100;
			document.getElementById("score").innerHTML= scores;	
			document.getElementById("l7main").style.display = "none";
			document.getElementById("l7head").style.display = "none";
			document.getElementById("l8main").style.display = "block";
			document.getElementById("l8head").style.display = "block";
			document.getElementById("fire7").style.display = "none";
			document.getElementById("fire8").style.display = "inline-block";
			document.getElementById("charma").style.display = "none";
			fires--; document.getElementById("firesco").innerHTML = fires;
}
	
function fire7(){ 
	if (fires >= 1 ){
		document.getElementById("charma").style.display = "block";
		setTimeout(charma, 2500);
	} else {alert("You lost this ability")}
}
	
function l7next(){ //lose lives for the special to pass instead the ability
	if (lives > 2) {
		lives -= 2; 
	document.getElementById("level").innerHTML= "?";
	document.getElementById("live").innerHTML= lives ;
	scores += 100;
	document.getElementById("score").innerHTML= scores;	
	document.getElementById("l7main").style.display = "none";
	document.getElementById("l7head").style.display = "none";
	document.getElementById("l8main").style.display = "block";
	document.getElementById("l8head").style.display = "block";
	document.getElementById("fire7").style.display = "none";
	document.getElementById("fire8").style.display = "inline-block";
	} else {alert("You do not have them!!")}
}
function l7nextsco(){ //lose scores for the special to pass instead the ability
	if (scores > 500) {
		scores -= 500; 
	document.getElementById("level").innerHTML= "?";
	document.getElementById("live").innerHTML= lives ;
	document.getElementById("score").innerHTML= scores;	
	document.getElementById("l7main").style.display = "none";
	document.getElementById("l7head").style.display = "none";
	document.getElementById("l8main").style.display = "block";
	document.getElementById("l8head").style.display = "block";
	document.getElementById("fire7").style.display = "none";
	document.getElementById("fire8").style.display = "inline-block";	
	} else {alert("You do not have them!!")}

}

function l7nextdie(){ //die button
	
	lose();
}



function fire8(){
	if (fires >= 1 ){
	document.getElementById("level").innerHTML= "9";
	document.getElementById("score").innerHTML= scores;	
	document.getElementById("l8main").style.display = "none";
	document.getElementById("l8head").style.display = "none";
	document.getElementById("l9main").style.display = "block";
	document.getElementById("l9head").style.display = "block";
	document.getElementById("fire8").style.display = "none";
	document.getElementById("fire9").style.display = "inline-block";				  
	fires--;
	document.getElementById("firesco").innerHTML= fires;
} else {alert("You lost this ability")}
}	
	
function l8next(){
				if (lives < 1) {lose();} else { 

	var level8 = prompt("D'oh!!! Do you remember?");
	if (level8 == 8) { alert("WHOO-HOO!!!!!!!!!!");
	document.getElementById("level").innerHTML= "9";
	scores += 100;
	document.getElementById("score").innerHTML= scores;	
	document.getElementById("l8main").style.display = "none";
	document.getElementById("l8head").style.display = "none";
	document.getElementById("l9main").style.display = "block";
	document.getElementById("l9head").style.display = "block";
	document.getElementById("fire8").style.display = "none";
	document.getElementById("fire9").style.display = "inline-block";				  
	} 
	else {lives--; 	document.getElementById("live").innerHTML = lives;				  
alert("No, try again. Remember before you lose all your lives");}
}
}
	
	
	function fire9(){
	if (fires >= 1 ){
	scores -=100;
	timer();
	fires--;
	document.getElementById("firesco").innerHTML= fires;
} else {alert("You lost this ability")}
}		
		
function timer() {
	document.getElementById("level").innerHTML= "10";
	scores += 100;
	document.getElementById("score").innerHTML= scores;	
	document.getElementById("l9main").style.display = "none";
	document.getElementById("l9head").style.display = "none";
	document.getElementById("l10main").style.display = "block";
	document.getElementById("l10head").style.display = "block";
	document.getElementById("fire9").style.display = "none";
	document.getElementById("fire10").style.display = "inline-block";
	
}

function l9next(){
	document.getElementById("l9pass").style.display = "none";
	document.getElementById("kiss").style.display = "block";
	document.getElementById("heart").style.display = "block";
	setTimeout(timer, 7000);
	
}

	function fire10(){
	alert("I need you to put a grade!!!!")
}	

function grademe() {
	var graded = document.getElementById("inputgrade").value;
	var grade = Number(graded);
	if (grade < 6) { alert("I'm a greedy person. Try higher.");}
	else {document.getElementById("l10main").style.display = "none";
	document.getElementById("l10head").style.display = "none";
	document.getElementById("infor").style.display = "none";
	document.getElementById("fire10").style.display = "none"; 
	document.getElementById("l11main").style.display = "block";
	document.getElementById("l11head").style.display = "block";
	scores += 100;
	document.getElementById("score").innerHTML= scores;
	document.getElementById("end").innerHTML = "Congrates!!!";
	document.getElementById("away").innerHTML = "You have Passed, ";
	document.getElementById("congame").innerHTML = " Congrates!!!";
	document.getElementById("gameover").style.display = "none";
	document.getElementById("winner").style.display = "block"; 
	var ol = document.getElementById("board");
	var li = document.createElement("li");
		  if (scores > high) {
		high = scores;
	}
	li.appendChild(document.createTextNode( myname +" Won -------- Scores : " + scores + " Highest score is " + high));
	ol.appendChild(li);
 }
}


function reset(){
	round++;
	var vyd1 = document.getElementById("yd1");
	var vyd2 = document.getElementById("yd2");
	var vyd3 = document.getElementById("yd3");
	var vyd4 = document.getElementById("yd4");
	var vyd5 = document.getElementById("yd5");
	var vyd6 = document.getElementById("yd6");
	var vmd1 = document.getElementById("md1");
	var vmd2 = document.getElementById("md2");
	var vmd3 = document.getElementById("md3");
	var vmd4 = document.getElementById("md4");
	var vmd5 = document.getElementById("md5");
	var vmd6 = document.getElementById("md6");

	var jsci = document.getElementById("sci");
	var jroc = document.getElementById("roc");
	var jpap = document.getElementById("pap");
	
	var plsci = document.getElementById("psci");
	var plroc = document.getElementById("proc");
	var plpap = document.getElementById("ppap");
	scores = 0; 
	lives = 5;
	fires = 0;
	document.getElementById("firesco").innerHTML= fires;
	document.getElementById("fire10").style.display = "none";
	document.getElementById("fire9").style.display = "none";
	document.getElementById("fire8").style.display = "none";
	document.getElementById("fire7").style.display = "none";
	document.getElementById("fire6").style.display = "none";
	document.getElementById("fire5").style.display = "none";
	document.getElementById("fire4").style.display = "inline-block";
	document.getElementById("imhere").style.display = "none";
	document.getElementById("l11main").style.display = "none";
	document.getElementById("l11head").style.display = "none";
	document.getElementById("l10main").style.display = "none";
	document.getElementById("l10head").style.display = "none";
	document.getElementById("l9main").style.display = "none";
	document.getElementById("l9head").style.display = "none";
	document.getElementById("l8main").style.display = "none";
	document.getElementById("l8head").style.display = "none";
	document.getElementById("l7main").style.display = "none";
	document.getElementById("l7head").style.display = "none";
	document.getElementById("l6main").style.display = "none";
	document.getElementById("l6head").style.display = "none";
	document.getElementById("l5main").style.display = "none";
	document.getElementById("l5head").style.display = "none";
	document.getElementById("l4main").style.display = "none";
	document.getElementById("l4head").style.display = "none";
	document.getElementById("l3main").style.display = "none";
	document.getElementById("l3head").style.display = "none";
	document.getElementById("l2main").style.display = "none";
	document.getElementById("l2head").style.display = "none";
	document.getElementById("l1main").style.display = "none";
	document.getElementById("l1head").style.display = "none";
	document.getElementById("welchead").style.display = "block";
	document.getElementById("welcmain").style.display = "block";
	document.getElementById("l1back").style.marginRight = "0px";
	document.getElementById("dice1").style.display = "inline-block";
	document.getElementById("dice2").style.display = "inline-block";
	vyd1.style.display="none";
	vyd2.style.display="none";
	vyd3.style.display="none";
	vyd4.style.display="none";
	vyd5.style.display="none";
	vyd6.style.display="none";
	vmd1.style.display="none";
	vmd2.style.display="none";
	vmd3.style.display="none";
	vmd4.style.display="none";
	vmd5.style.display="none";
	vmd6.style.display="none";
	document.getElementById("result2").innerHTML = "";
	document.getElementById("l2win").style.display = "none"; 
	document.getElementById("result2").style.display="block"; 
	document.getElementById("l2pass").style.display="block";
	jsci.style.display="none";
	jroc.style.display="none";
	jpap.style.display="none";
	plsci.style.display="none";
	plroc.style.display="none";
	plpap.style.display="none";
	document.getElementById("result5").innerHTML = "";
	document.getElementById("l5win").style.display = "none"; 
	document.getElementById("kiss").style.display = "none"; 
	document.getElementById("result5").style.display="block"; 
	document.getElementById("l5pass").style.display="block";
	document.getElementById("covid1").style.visibility = "visible";
	document.getElementById("covid2").style.visibility = "visible";
	document.getElementById("covid3").style.visibility = "visible";
	document.getElementById("covid4").style.visibility = "visible";
	document.getElementById("covid5").style.visibility = "visible";
	document.getElementById("covid6").style.visibility = "visible";
	document.getElementById("covid7").style.visibility = "visible";
	document.getElementById("l6pass").style.zIndex = "-1";
	document.getElementById("l9pass").style.display = "block";
	document.getElementById("heart").style.display = "none";
	document.getElementById("score").innerHTML= scores;
	document.getElementById("inputgrade").value = "";
	document.getElementById("level").innerHTML= "1";
	document.getElementById("live").innerHTML = lives;
	
	
}

function lose() {
	document.getElementById("infor").style.display = "none";
	var ol = document.getElementById("board");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode( myname +" Lost -------- Scores : " + scores + " Highest score is " + high));
	ol.appendChild(li);
	document.getElementById("end").innerHTML = "GAME OVER!!!";
	document.getElementById("away").innerHTML = "You have Passed away,";
	document.getElementById("congame").innerHTML = "GAME OVER!!!";
	document.getElementById("gameover").style.display = "block";
	document.getElementById("winner").style.display = "none";
	document.getElementById("l11main").style.display = "block";
	document.getElementById("l11head").style.display = "block";
	document.getElementById("l10main").style.display = "none";
	document.getElementById("l10head").style.display = "none";
	document.getElementById("l9main").style.display = "none";
	document.getElementById("l9head").style.display = "none";
	document.getElementById("l8main").style.display = "none";
	document.getElementById("l8head").style.display = "none";
	document.getElementById("l7main").style.display = "none";
	document.getElementById("l7head").style.display = "none";
	document.getElementById("l6main").style.display = "none";
	document.getElementById("l6head").style.display = "none";
	document.getElementById("l5main").style.display = "none";
	document.getElementById("l5head").style.display = "none";
	document.getElementById("l4main").style.display = "none";
	document.getElementById("l4head").style.display = "none";
	document.getElementById("l3main").style.display = "none";
	document.getElementById("l3head").style.display = "none";
	document.getElementById("l2main").style.display = "none";
	document.getElementById("l2head").style.display = "none";
	document.getElementById("l1main").style.display = "none";
	document.getElementById("l1head").style.display = "none";
	document.getElementById("welchead").style.display = "none";
	document.getElementById("welcmain").style.display = "none";
}







