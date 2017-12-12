export const throttling = function(func, delay) {
  let previous = 0

  var later = function() {
    func()
  }

  return function() {
    let now = Date.now()

    let remaining = wait - (now - previous)
    if(remainging <= 0 || remaining > wait) {

    }
  }
}

export const debounce = (func, delay) => {
  var timer = null

  return function() {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func()
    }, delay)

  }
}