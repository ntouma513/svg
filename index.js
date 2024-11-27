const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for your logo:',
                validate: input => input.length <= 3 || 'Text must be up to three characters.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal):',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for the logo:',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal):',
            }
        ]);

        const { text, textColor, shape, shapeColor } = answers;

        let shapeInstance;
        switch (shape) {
            case 'Circle':
                shapeInstance = new Circle(shapeColor);
                break;
            case 'Triangle':
                shapeInstance = new Triangle(shapeColor);
                break;
            case 'Square':
                shapeInstance = new Square(shapeColor);
                break;
        }

        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeInstance.render()}
                <text x="150" y="100" font-size="30" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
            </svg>
        `;

        fs.writeFileSync('./logo.svg', svgContent.trim());
        console.log('Generated logo.svg');
    } catch (err) {
        console.error('Error generating logo:', err);
    }
}

generateLogo();
