function kilometerToMeter(distance) {
    if(distance>0) {
    var meter = distance*1000;
    console.log("Meter = "+meter);
    }
    else {
    console.log("Distance shouldn't negative number,please provdie the correct number.");
    }
   return distance;
 }
 console.log(kilometerToMeter(-1));