const wordSearch = (letters, word) => {
    // Joining each row into a string
    const horizontalJoin = letters.map((ls) => ls.join(""));
  
    //console.log(horizontalJoin);
    let verticalJoin = "";
  
    for (const l of horizontalJoin) {
      //console.log(l);
      if (l.includes(word)) {
        return true;
      }
    }
  
    for (let i = 0; i < letters[0].length; i++) {
      //vertical index
      let tempArr = [];
      //columns
      for (let k = 0; k < letters.length; k++) {
        tempArr.push(letters[k][i]);
        // Joining each column into a string
      }
      let verticalJoin = tempArr.join("");
  
      for (const j of verticalJoin) {
        if (j.includes(word)) {
          return true;
        }
      }
    }
    return false;
  };
  
  module.exports = wordSearch;