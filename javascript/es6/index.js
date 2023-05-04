//Update var with let/const

// let statuses = [
//     { code: 'OK', response: 'Request successful' },
//     { code: 'FAILED', response: 'There was an error with your request' },
//     { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];

// let message = '';

// const currentCode = 'OK';

// for (let i = 0; i < statuses.length; i++) {
//     if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//     console.log(message);
//     }
// }

// //Refactor the code to use template strings
// const device_id = 25;
// const guid = 654321;
// // const data = '{device_id : ' + device_id + ' , ' + 'guid:' + guid + '}' ;
// const data = (`{ device_id : ${device_id} , guid: ${guid} }`)
// console/console.log(data);
// // result: { device_id : 25 , guid: 654321 }



//Convert below code into es6 format
// function getExamples() {
//     return fetch('https://example.com/')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (response) {
//             return response.data;
//         }).then(function (data) {
//             console.log(data);
//         })
// }

const getExamples = () => {
    fetch('https://example.com/')
        .then(response => response.json())
        .then(response => response.data)
        .then(data => console.log(data));
}
