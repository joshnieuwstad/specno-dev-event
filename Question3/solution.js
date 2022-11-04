function Xbonacci (signature, n) {

  // edge case in example 3
  if (signature.length > n){
    return signature.slice(0, n);
  }

  // edge case in example 5
  if (signature.length == 1){
    return Array(n).fill(signature[0]);
  }
  
  // rest of the scenarios
  const lengthOfSignature = signature.length;
  let signatureCopy = signature;

  while (signature.length < n){
    let newValue = signature.slice(-lengthOfSignature).reduce((acc, val) => acc + val);
    signature.push(newValue);
  }

  return signature;
}
