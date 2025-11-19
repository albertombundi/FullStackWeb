import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();


function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name);
}

// Registrar ouvintes de eventos
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'John');    // Saída: Hello, world.
myEmitter.emit('goodbye', 'John');  // Saída: Goodbye world

// Error handling
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});

// Simulate an error
myEmitter.emit('error', new Error('Something went wrong!'));