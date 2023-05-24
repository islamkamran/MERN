// adding property to objects on need

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw");
    }
}

const circleObj = new Circle(10);
//  

// now we can add properties to this object

circleObj.location = {loc : 1};
// or we can add by circleObj['location'] bracket method.

// delete circleObj.password; for deleting  

