function Gflip(d,box){
    if(d === "L"){
        return box.sort(function(a, b){return b-a});
    }
    return box.sort(function(a, b){return a-b});

 
}
console.log(Gflip("R", [3, 2, 1, 2]))
console.log(Gflip('L', [1, 1, 5, 4, 3]))

