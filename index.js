function scuberGreetingForFeet(x) {
  // Write your code here!
 
  if (x<= 400){
    return `This one is on me!`; 

   } else if  (x >400 && x <2000) {
    return"That will be twenty bucks.";
 } else if (x>2000 && x <2500){
  return "I will gladly take your thirty bucks.";
} else {
  return "No can do.";
}

}
function ternaryCheckCity(z) {
 
 return (z=="NYC"? "Ok, sounds good.": "No go.");

}
function switchOnCharmFromTip(t){
return (t=="generous"? "Thank you so much." : t== "not as generous"?"Thank you.": "Bye.");
}
// return "thank for everything"
