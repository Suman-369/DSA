let arr = [[1,0,1], [0,1,0], [1,0,1]];

for(let row of arr){
    for(let i = 0 ; i<Math.floor(row.length +1)/2 ; i++){
        let temp = row[i] ^1
        row[i] = row[row.length -1 -i] ^1
        row[row.length -1 -i] = temp;
    }
}
console.log(arr);

