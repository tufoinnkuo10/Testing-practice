const { stringLength, reverseString, tocapitalize, add, subtract, multiplication, division} = require('./myjest.js');

test('return the length of a word', () => {
    expect(stringLength('fish')).toBe(4);
    expect(stringLength('egg')).toBe(3);
    expect(stringLength('congratulations')).toBe(15);
    expect(stringLength('development')).toBe(11);
});

test('throws exception on empty string', () => {
    expect(() => {stringLength('')}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength(new String())}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength("")}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength(``)}).toThrow(/MIN_LENGTH_ERROR/);
});

test('counts special characters as well', () => {
    expect(() => {stringLength('zerumbet-platrier')}).toThrow(/MAX_LENGTH_ERROR/);
    expect(stringLength("!sdopn&osà")).toBe(10);
    expect(stringLength("éàldsq?")).toBe(7);
});

test('is not case sensitive', () => {
    expect(stringLength('femmE')).toBe(5);
    expect(() => {stringLength("yAtOUT. Il faut COMMandER.")}).toThrow(/MAX_LENGTH_ERROR/);
    expect(stringLength("camelCase")).toBe(9);
    expect(stringLength("cApiTaL")).toBe(7);
    expect(stringLength("ALLCAPS")).toBe(7);
});

//  reverse string
  
  test('returns string in lower case', () => {
    const string = 'tufoin';
    const result = reverseString(string);
    expect(result).toBe('niofut');
  })

  test('return string in upper case', () => {
    const string = 'XMAS';
    const result = reverseString(string);
    expect(result).toBe('SAMX');
  })

// test capitalization

test('string letter capitalization', () => {
  const string = 'boss';

  const changeto = tocapitalize(string);

  expect(changeto).toBe('Boss')
})

// add two numbers

test('adding two numbers', () => {
  const x=4, y=6;
  const sum = add(x,y);
  expect (sum).toBe(10)

})

// subtract two numbers
test ('difference between two numbers', () => {
  const x = 10, y=5;
  const minus = subtract (x, y);
  expect(minus).toBe(5)
} )

// multiply numbers

test ('multiply two numbers', () => {
  const x = 10, y= 10;
  const multiply = multiplication(x,y);
  expect(multiply).toBe(100)
})

// division of numbers excluding zero
test ('divide two numbers', ()=>{
  const x = 100, y=20;
  const divide = division(x,y);
  expect(divide).toBe(5)
})



