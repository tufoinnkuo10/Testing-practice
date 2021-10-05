const { stringLength, reverseString } = require('./myjest.js');

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



