let triple = require('../triple');

describe("Triple", function() {
  it("should equals three times the argument", function() {
    expect(triple(2)).toEqual(6);
    expect(triple(0)).toEqual(0);
    expect(triple(1)).toEqual(3);
    expect(triple(3)).toEqual(9);
  });
});
