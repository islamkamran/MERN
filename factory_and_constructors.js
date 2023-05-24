// factory function

function createCircle(radius){
    return{
        // radius: radius,// in ES6 we have that is the key and value pair names are same you can use the same word once as below
        radius,// this mean the value it self will be returned
        draw: function(){
            console.log(radius + " : is the size of Radius");
        }
    }
};

// now as the factory is created and we want a custom circle we now make an object of the factory

const circleObj = createCircle(1);
const circleObj2 = createCircle(2);
circleObj.draw();
circleObj2.draw();

// NOW DOING THE SAME WITH CONSTRUCTOR

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Drawing through Constructor");
    }
}; 


const consObj = new Circle(1);// this new key word will create a new empty object as obj = {};
consObj.draw();