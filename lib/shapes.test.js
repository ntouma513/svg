const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        it('should render a circle with the specified color', () => {
            const circle = new Circle('red');
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
        });
    });

    describe('Triangle', () => {
        it('should render a triangle with the specified color', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should render a square with the specified color', () => {
            const square = new Square('green');
            expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="green" />');
        });
    });
});
