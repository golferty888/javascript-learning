const _startFizzBuzz = require('../thoughtworks/fizzBuzz')

describe('test fizzBuzz function', () => {
    test('max is 1 : 1', () => {
      expect(_startFizzBuzz(1)).toEqual([1])
    });
  });