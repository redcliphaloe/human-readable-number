module.exports = function toReadable (number) {
    const textValues = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    let result = '';
    let subNumber;
    if (number > 1000000000) {
        subNumber = Math.floor(number / 1000000000);
        if (subNumber >= 100) {
            result += textValues[('' + subNumber)[0]] + ' hundred';
            if (subNumber >= 200) {
                result += 's';
            }
            result += ' ';
            subNumber = subNumber % 100;
        }    
        if (subNumber >= 20) {
            result += textValues[subNumber - subNumber % 10];
            if (subNumber % 10) {
                result += ' ' + textValues[subNumber % 10];
            }
            result += ' billions'; 
        } else {
            if (subNumber >= 10) {
                result += textValues[subNumber] + ' billions';
            } else {
                result += textValues[subNumber] + ' billion';
            }
        }
        result += ' ';
        number = number - Math.floor(number / 1000000000) * 1000000000;
    }

    if (number > 1000000) {
        subNumber = Math.floor(number / 1000000);
        if (subNumber >= 100) {
            result += textValues[('' + subNumber)[0]] + ' hundred';
            if (subNumber >= 200) {
                result += 's';
            }
            result += ' ';
            subNumber = subNumber % 100;
        }       
        if (subNumber >= 20) {
            result += textValues[subNumber - subNumber % 10];
            if ((subNumber % 10)) {
                result += ' ' + textValues[subNumber % 10];
            }
            result += ' millions'; 
        } else {
            if (subNumber >= 10) {
                result += textValues[subNumber] + ' millions';
            } else {
                result += textValues[subNumber] + ' million';
            }
        }
        result += ' ';    
        number = number - Math.floor(number / 1000000) * 1000000;
    }

    if (number > 1000) {
        subNumber = Math.floor(number / 1000);
        if (subNumber >= 100) {
            result += textValues[('' + subNumber)[0]] + ' hundred';
            if (subNumber >= 200) {
                result += 's';
            }
            result += ' ';
            subNumber = subNumber % 100;
        }       
        if (subNumber >= 20) {
            result += textValues[subNumber - subNumber % 10];
            if ((subNumber % 10)) {
                result += ' ' + textValues[subNumber % 10];
            }
            result += ' thousands'; 
        } else {
            if (subNumber >= 10) {
                result += textValues[subNumber] + ' thousands';
            } else {
                result += textValues[subNumber] + ' thousand';
            }
        }
        result += ' ';  
        number = number - Math.floor(number / 1000) * 1000; 
    }

    subNumber = number;
    if (subNumber >= 100) {
        result += textValues[('' + subNumber)[0]] + ' hundred';
        // if (subNumber >= 200) {
        //     result += 's';
        // }
        result += ' ';
        subNumber = subNumber % 100;
    }       
    if (subNumber >= 20) {
        result += textValues[subNumber - subNumber % 10];
        if ((subNumber % 10)) {
            result += ' ' + textValues[subNumber % 10];
        }
    } else {
        if (subNumber >= 10) {
            result += textValues[subNumber];
        } else if (subNumber > 0) {
            result += textValues[subNumber];
        }
    }    
    return result.trim() || 'zero';
}

// console.log(toReadable(11012015001));
