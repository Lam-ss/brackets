module.exports = function check(str, bracketsConfig) {
  const holder = []
  const openBrackets = bracketsConfig.filter(elem => elem[0] !== elem[1]).map((elem) => {
    return elem[0];
  })
  const closedBrackets = bracketsConfig.filter(elem => elem[0] !== elem[1]).map((elem) => {
    return elem[1];
  })
  const sameBrackets = bracketsConfig.filter(elem => elem[0] === elem[1]).map(elem => elem[0])

  for (let letter of str) { 
      if(sameBrackets.includes(letter)) {
        if(holder[holder.length - 1] === letter) {
          holder.splice(-1,1)
        } else {
          holder.push(letter)
        }
      }
      if(openBrackets.includes(letter)){ 
          holder.push(letter)
      }else if(closedBrackets.includes(letter)){ 
          const openPair = openBrackets[closedBrackets.indexOf(letter)] 
          if(holder[holder.length - 1] === openPair){ 
              holder.splice(-1,1) 
          }else{ 
              holder.push(letter)
              break 
          }
      }
  }
  return (holder.length === 0) 

}
