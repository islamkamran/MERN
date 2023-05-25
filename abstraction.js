function Circle(radius){
    // let color = 'red';// local variable 
    // instead of defining things as property of objects we define them as local variables

    this.radius = radius;
    
    // this.location = {x:0, y:0}; // changing this
    let location = {x:0, y:0};
    
    // this.computeOptimumLocation = function(){
    //     // ...
    //     console.log("computing");
    // }// also this

    let computeOptimumLocation = function(){
        // ...
        console.log("computing");
    }

    this.draw = function(){
        // this.computeOptimumLocation();// now you can access without this
        computeOptimumLocation();
        console.log("Drawing Circle");
    }
}

const circleObj = new Circle(10);
circleObj.draw();

