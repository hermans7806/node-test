const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils. square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    })
  });
});



it('should verify first name & last name are sets', () => {
  var user = {age: 37, location: 'Singapore'};
  var res = utils.setName(user, 'Herman Sutanto');

  expect(res).toInclude({
    firstName: 'Herman',
    lastName: 'Sutanto'
  });
});

// it('should expect some values', () => {
//   expect({
//     name: "Herman",
//     age: 37
//   }).toInclude({
//     age: 37
//   });
// });
