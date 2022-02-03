function scuberGreetingForFeet(ride){ 
let feet = ride
if (feet <= 400){
  return 'This one is on me!'
  }
else if (feet >= 2000 && feet <= 2500){
  return 'I will gladly take your thirty bucks.'
  }
else {
  return 'No can do.'
  }
}
function ternaryCheckCity(city){
let ct = city
  if (ct === `NYC`){
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}
function switchOnCharmFromTip(tip){
const generous = tip
switch (generous) {
  case "the tip is generous":
    console.log("Thank you so much.");
    break;
  case "the tip is not as generous":
    console.log("Thank you.");
    break;
  default:
    console.log("Bye.");
    break;
  }
}