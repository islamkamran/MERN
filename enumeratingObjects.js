// Enamurating through objects

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw");
    }
}

const circleObj = new Circle(10);

for(let key in circleObj){
    if (typeof circleObj[key] != 'function'){
        console.log(key, circleObj[key])
    }   
}

const keys = Object.keys(circleObj);
console.log(keys)

// to check if a certain propoety exists in an object
if ('radius' in circleObj)
    console.log('circle has a radius');
