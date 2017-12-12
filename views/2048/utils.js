export const canMoveLeft = array => {
  let retVal = false
  if( !array.every(item => item === 0) ) {
    let index = array.reduce((prev, item, idx) => {
      if(prev !== -1 && array[prev] > 1) {
        return prev
      } else if(item > 0) {
        return idx
      }
    }, -1)
    console.log(index)
  }
}