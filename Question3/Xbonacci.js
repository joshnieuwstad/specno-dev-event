function Xbo(sig,n){
    let outputArray=sig
    for(let i=0; i<n; i++){
        let nextSum=0;
        for(let j=i; j<i+sig.length; j++){ 
            nextSum+=outputArray[j]
            if(j==outputArray.length-1){
                outputArray.push(nextSum)
                break;
            }
        }
        if(outputArray.length===n){
            break
        }
    }
    return outputArray
    
}
console.log(Xbo([1], 5));