//not actually included in project, just practice
//callbacks
// function firstFunction(parameters, callback) {
//     //do stuff
//     callback();
// }

// //callback hell - lost in multiple functions?
// firstFunction(parameters, function(){
//     //do stuff
//     secondFunction(parameters, function(){
//         thirdFunction (parameters, function(){

//         })
//     })
// })

//promise

//3 states Pending, Fulfilled, Rejected

//const set to false vvv
// const myPromise = new Promise((resolve, reject) => {
//     const error= false; 
//     if (!error) {
//      resolve("Yes! Resolved the promise.");
//     } else {
//      reject("No! Rejected the promise.");
//     }
// });

// console.log(myPromise);

// myPromise.then(value => {
// return value + "This new value"
// }).then((newValue => {
//     console.log(newValue);
// }));






///const set to true
/*
const myPromise = new Promise((resolve, reject) => {
    const error= true; 
    if (!error) {
     resolve("Yes! Resolved the promise.");
    } else {
     reject("No! Rejected the promise.");
    }
});

console.log(myPromise);

myPromise.then(value => {
return value + "This new value";
}).then((newValue) => {
    console.log(newValue);
}).catch((err) => {
    console.log(err);
});


const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved")
    }, 3000);
    });

    myNextPromise.then((value) => {
        console.log(value);
    });

    myPromise.then(value => {
        console.log(value);
    });



//shows windows methods vvv
console.log(this);


//pending

const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
    return response.json()
    })
    .then((data) => {
        data.forEach((user) => {
            console.log(user);
        });
});

*/

//async & await

const myUsers = {
    userList: [], 
};

const myFun = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
};

const anotherFun = async () => {
    const data = await myFun();
    myUsers.userList = data;
    console.log(myUsers.userList);
};

anotherFun();
