// MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
// Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 


fs = require('fs');

fs.readFile('planets.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString())
        console.log('I still belive in you pluto')
    };

})

