// This is orginal code with error : 

// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Nikhil" });
//         }, 1000);
//     });
// }

// function printUserName() {
//     const user = getUser();
//     console.log(user.name);
// }

// printUserName();






// This is corrected code : 

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Nikhil" });
        }, 1000);
    });
}


// function printUserName() {

//     getUser().then((res) => {
//         console.log(res.name)
//     })
//         .catch((error) => {
//             console.log(error)
//         })
// }

async function printUserName() {

    try {
        const data = await getUser()
        console.log(data.name)
    }

    catch (error) {
        console.log(error)
    }

}

printUserName();