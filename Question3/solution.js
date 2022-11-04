function Xbonacci (signature, n) {

  if (signature.length > n){
    return signature.slice(0, n);
  }

  if (signature.length == 1){
    return Array(n).fill(signature[0]);
  }
  
  const lengthOfSignature = signature.length;
  let signatureCopy = signature;

  while (signatureCopy.length < n){
    let newValue = signatureCopy.slice(-lengthOfSignature).reduce((acc, val) => acc + val);
    signatureCopy.push(newValue);
  }

  return signatureCopy;
}
