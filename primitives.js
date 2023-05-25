// using value type

let x = 10;
let y = x;
 x = 20; 

 console.log(x);
 console.log(y);

//  in this case the values are independent of each other that is y is stored on seperate location

// reference type

let k = {value: 10};
let l = k;
k.value = 20;

console.log(k);
console.log(l);

// here in the reference case the data is stored not on the location but someother location and the address is stored in current location so pretty much both the variables point to one location so both have the same value