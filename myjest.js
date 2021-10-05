const stringLength = (str) => {
  if(!(str.length > 1)) throw new Error('MIN_LENGTH_ERROR: word starts from two characters');
  if(!(str.length <= 15)) throw new Error('MAX_LENGTH_ERROR: word should be less than 15 characters.');
  return str.length;
};

//  reversing a string

const reverseString = string => [...string].reverse().join('') 

//  to capital letter

const tocapitalize = (string) => {
  return [string[0].toUpperCase(), ...string.slice(1)].join('')
};

//  calculator


function add (x, y){
  if(typeof x === 'string' || typeof y === 'string'){
    throw new Error('only numbers are accepted')
  }
  
  return x + y;

}

function subtract (x,y) {
  if (typeof x === 'string' || typeof y === 'string'){
    throw new error ("only numbers are allowed")
  }
  return x - y
}

function multiplication (x,y) {
  if (typeof x === 'string' || typeof y === 'string'){
    throw new error ("only numbers are allowed")
  }
  return x * y
}

function division (x,y) {
  if (typeof x === 'string' || typeof y === 'string'){
    if (typeof x === "0" || typeof y === "0"){
      throw new error1 ('division by zero cannot go')
    }
    throw new error ("only numbers are allowed")
  }
  return x / y
}


module.exports = {stringLength, reverseString, tocapitalize, add, subtract, multiplication, division}