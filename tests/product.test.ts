import { describe, test, expect } from '@jest/globals';
import { Product } from '../src/product';

describe('Product', () => {

  test('should return undefined when product is created without a description', () => {
    const product = new Product({ id: 1, name: 'Laptop', price: 999 });

    expect(product.description).toBeUndefined();
  });
  test('A test that validates that calling setPrice() with a negative value throws an error',()=>{
    const product = new Product({ id: 1, name: 'Laptop', price: 999 });
 expect(() => {
        product.price = -3;
    }).toThrow('Price cannot be negative.')
  

})})
test('A test that validates that calling setName() with an empty string throws an error', () => {
  const product = new Product({ id: 1, name: 'Laptop', price: 999 });

  expect(() => {
    product.name = '';
  }).toThrow('Name cannot be empty');
});