// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    if (number > 42){
      return number- 42
    }else if (number < 42){
      return 42 - number
    }
  }

   
  function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) * 264;
  }

  
  function distanceTravelledInBlocks(start, end){
    if (start > end){
      return start - end
    } else if (start < end){
      return end - start
    }
  }

  function distanceTravelledInFeet(start, destination) {
    return distanceTravelledInBlocks(start, destination) * 264
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <=400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {;
      return .02 * (distance-400);
    } else if (distance> 2000 && distance < 2500){
      return 25;
    }  else {
      return "cannot travel that far"
    }
  }