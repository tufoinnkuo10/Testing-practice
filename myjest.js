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

const validate = (a, b) => {
  if(typeof a !== 'number' || typeof b != 'number'){
    throw new Error('only accepts numbers as arguments')
  }
}

module.exports = {stringLength, reverseString, tocapitalize}