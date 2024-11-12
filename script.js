const dogs = [
    { name: 'Barney', age: 8 },
    { name: 'Rubble', age: 1 },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '50px';
    p.style.textAlign = 'center';
    p.style.alignContent = 'center';
}

// interpolated
console.log('Hello I am a %s string!', '💩');

// styled
console.log(
    "%c The King doesn't need a British passport because it's issued in his name.",
    'font-size: 25px; text-shadow: 2.5px 2.5px 0 red'
);

// warning!
console.warn('What a warning!');

// error :|
console.error('Not this error again!');

// info
console.info('London receives less rainfall than Rome, Istanbul or Sydney.');

// testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), "This paragraph does not have a class of 'ouch'");

// clearing
// console.clear();

// viewing DOM Elements
console.log(p, '<--- this is a log');
console.dir(p, '<--- and this is a dir dropdown');

// grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Genadi');
console.count('Genadi');
console.count('Kozarev');
console.count('Kozarev');
console.count('Genadi');
console.count('Kozarev');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/GenadiKozarev')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);
