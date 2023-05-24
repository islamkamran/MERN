// getters and setters methods

function Circle(radius){

    this.radius = radius;

    let defaultLocation = {x:0, y:0};
    
    // getter method we get the private values outside just for reading.
    this.getDefaultLocation = function(){
        return defaultLocation; // we accessed local variable from outside :p
    }

    this.draw = function(){
        console.log("Drawing Circle");
    };

    //making properties  object.property
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y){
                throw new Error('Invalid location.');
            }
            defaultLocation = value;
        }
    });

}

const circleObj = new Circle(10);// passing value as constructor
// don't forget the new :P
circleObj.draw();
circleObj.defaultLocation=1;

// console.log(circleObj.getDefaultLocation()); // getter method calling


