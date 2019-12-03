import { cat } from './cat';

describe('cat', () => {

  it('should return a cat emoji', () => {

    expect(cat).toEqual('🐱');

  });

});
