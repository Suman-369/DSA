
// leet code 1832 // check a sentence is pangram or not 

let sentence = 'abcdefghijklmnopqrstuvwxyz'

let set = new Set()

for(let i = 0 ; i<sentence.length;i++){
    let ch = sentence.charAt(i)
    set.add(ch)
}

if(set.size==26){
    console.log(true);
    
}
else{
    console.log(false);
    
}

//out put  true
