//Leet Code  question no 832 Fliping an image 

// intiution :-  reverse the array and replace the 0 to 1 and 1 to 0 of the arrays elements

let arr = [[1,0,1], [0,1,0], [1,0,1]];

for(let row of arr){
    for(let i = 0 ; i<Math.floor(row.length +1)/2 ; i++){
        let temp = row[i] ^1
        row[i] = row[row.length -1 -i] ^1
        row[row.length -1 -i] = temp;
    }
}
console.log(arr);

//OUT PUT  [ [ 0, 1, 0 ], [ 1, 0, 1 ], [ 0, 1, 0 ] ]
