// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
// var led1 = tessel.led(0).output(1);

tessel.button.on('press', function (time) {
    tessel.led[0].toggle();
    console.log('the button was pressed!', time);
});

tessel.button.on('release', function (time) {
    tessel.led[1].toggle();
    console.log('button was released', time);
});

tessel.led[1].toggle();
    setInterval(function () {
}, 500);

/*
var led1 = tessel.led(1),
    keypad = require('tessel-matrix-keypad'),
    gpio = tessel.port['GPIO'].pin,
    modD = tessel.port['D'].pin;

setInterval(function() {
    led1.toggle();
}, 100);
*/


var Keypad = require('tessel-matrix-keypad'),
    gpio = tessel.port['GPIO'].pin,
    modD = tessel.port['D'].pin;

// console.log(tessel.port['GPIO']);
// console.log(tessel.port['GPIO'].pin);

var keypad = new Keypad({
        keys: [
            ['1', '2', '3', 'A',],
            ['4', '5', '6', 'B',],
            ['7', '8', '9', 'C',],
            ['*', '0', '#', 'D',],
        ],
        rows: [gpio.G1, gpio.G2, gpio.G3, gpio.G4],
        cols: [gpio.G5, gpio.G6, modD.G1, modD.G2],
        scan: 'row',
        poll: false,
    });

keypad.on('change', function(key, val){
    console.log(key);
});

keypad.on('keydown', function(key){
    console.log(key);

});

keypad.on('keyup', function(key){
    console.log(key);

});
