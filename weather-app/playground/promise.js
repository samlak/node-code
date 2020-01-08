var asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }else{
                reject("Arguments must be number");
            }
        }, 1500);
    });
};

asyncAdd(5, 6).then((result)=>{
    console.log(result);
    return asyncAdd(result, 20);
}).then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
});
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hey Baba don come");
//         reject("Unable to fulfil promise");
//     }, 2500);
// });
// somePromise.then((message) => {
//     console.log(`Success: ${message}`);
// }, (errorMessage) => {
//     console.log(`Error: ${errorMessage}`);
// })