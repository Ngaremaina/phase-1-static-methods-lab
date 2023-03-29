class Formatter {
  //add static methods here
  static capitalize (str){
    return str[0].toUpperCase() + str.substring(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(str){
    let sentence = str[0].toUpperCase()
    let word = str.split(" ").map( value => {

      if (value === "the" || value === "a" || value === 'an' || value === 'but'
      || value === 'of'|| value ==='and'|| value ==='for'|| value === 'at'|| value ==='by'
      || value === 'from'){
        return value.charAt(0).toLowerCase() + value.substring(1)
      }
      
      return value.charAt(0).toUpperCase() + value.substring(1)

  }).join(" ")

  return sentence + word.substring(1)
  }
  
}