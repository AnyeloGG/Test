const add = require('./calculator');

test('suma de 3 y 5 debe ser 8', () => {
    // Given
    const num1 = 3;
    const num2 = 5;
    
    // When
    const result = add(num1, num2);
    
    // Then
    expect(result).toBe(8);
});

test('suma de -3 y -5 debe ser -8', () => {
    // Given
    const num1 = -3;
    const num2 = -5;

    // When
    const result = add(num1, num2);

    // Then
    expect(result).toBe(-8);
});