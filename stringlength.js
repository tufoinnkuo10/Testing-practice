const stringLength = (str) => {
  if(!(str.length > 1)) throw new Error('MIN_LENGTH_ERROR: word starts from two characters');
  if(!(str.length <= 15)) throw new Error('MAX_LENGTH_ERROR: word should be less than 15 characters.');
  return str.length;
};
module.exports = stringLength;