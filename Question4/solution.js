function gravityFlip (direction, arr) {
  if(direction == 'L'){
    return arr.sort((a, b) => (a > b ? -1 : 1));
  } else {
    return arr.sort((a, b) => (a > b ? 1 : -1));
  }
}
