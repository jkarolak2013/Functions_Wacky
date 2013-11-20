//Functions-variable scope
//This wacky code is about when you swim either too many or too few laps.
//This code is a counter to determine that factor
function poolLaps(){
	var SunLaps = 53;
	var MonLaps = 50;
	var TuesLaps = 49;
	var WedLaps = 65;
	var ThurLaps = 44;
	var FriLaps = 35;
	//ACCUMULATION OF LAPS
	var TotalLaps = SunLaps+MonLaps+TuesLaps+WedLaps+ThurLaps+FriLaps;
	//Average laps calculated
	var averageLaps = TotalLaps / 6;


	console.log("You swam "+averageLaps+" laps per day averaged over a 6 day period. With a total of " +TotalLaps+" laps accumulated over the past 6 days!");

}

poolLaps();