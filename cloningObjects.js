const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};

// const another = {};

// for (let key in circle){
//     another[key] = circle[key];
// }//way one to clone

// const another = Object.assign({
//     color:'yellow',
// }, circle);// way two to clone

const another = { ...circle}; // way three spread operator another easy way to clone an object
console.log(another);