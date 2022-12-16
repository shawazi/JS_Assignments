// i found the push method to work with the array, but I think we aren't supposed to use push() or arrays yet... it is much more visually appealing to use the array than to display the output on 480 separate lines, though

// let result = []

// for(let i = 100; i <= 1000; i++){
    
//     if(i > 1000){
//         break;
//     }
    
//     if(i % 3 && i % 5){
//         result.push(i);
//     }
// }

// console.log(result);



for(let i = 100; i <= 1000; i++){
    
    if(i > 1000){
        break;
    }
    
    if(i % 3 && i % 5){
        console.log(i);
    }
}

