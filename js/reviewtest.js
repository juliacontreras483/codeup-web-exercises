// // function average(arr){
// //     let min=Math.min(...arr);
// //     let max=Math.max(...arr);
// //     return (min + max)/2;
// // }
// //
// // console.log(average(1,2,3,4,5,6,7,8,9,10));
// //
// //
// //
// //
// // let arr = {"1, 2 , 3 , 4 ,5, 6, 7,8, 9,10"]
// //
// // function average(arr){
// //     let min=Math.min(...arr);
// //     let max=Math.max(...arr);
// //     return (min + max)/2;
// // }
// //
// // console.log(average);
// //
// //
//
//
// function average(arr){
//     let min=Math.min(...arr);
//     let max=Math.max(...arr);
//     return (min + max)/2;


// function average(arr){
//     let min=Math.min(...arr);
//     let max=Math.max(...arr);
//     return (min + max)/2;
// }
//
// console.log(average )



function mean(seq){
    let count = 0;
    seq.forEach(function(num){
        count += num ++
    });
    return count / seq.length;
}


console.log(mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));