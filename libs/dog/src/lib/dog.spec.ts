import { dog } from "./dog";

describe('dog', () => {

  it('should return a dog emoji', () => {

    expect(dog).toEqual('🐶');

  });

});
