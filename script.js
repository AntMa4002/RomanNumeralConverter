const romanNumerals1 = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

const romanNumerals2 = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

//conversion to integer
function convertToInt(string)   {

    let wrongNum = false;
    let values = [];
    let total = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.length >= 4) {
            if (i+3 <= string.length)   {
                if (string.charAt(i) == string.charAt(i+1) && string.charAt(i) == string.charAt(i+2) && string.charAt(i) == string.charAt(i+3)) {
                    wrongNum = true;
                    break;
                }
            }
            else    {
                wrongNum = false;
                break;
            }
        }
    }

    if (wrongNum == false)   {
        for (let j = 0; j < string.length; j++) {
            values[j] = romanNumerals1[string.charAt(j)];
        }

        for (let k = 0; k < values.length; k++) {
            if (values)
            if (values[k+1] !== undefined && values[k] < values[k+1])  {
                values[k] = -values[k];
            }

            total += values[k];
        }
        return total;
    }

    else    {
        return 'INVALID ROMAN NUMERAL';
    }
    
}

//conversion to roman numeral
function convertToString(num)   {
    let str = '';
    if (num > 3999) {
        str = 'INVALID NUMBER';
    }
    else    {
        for (const pair of romanNumerals2) {
            while (num >= pair.value) {
                str += pair.numeral;
                num -= pair.value;
            }
        }
    }
    return str;
    
}
console.log(convertToString(1377));


let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let inputBox = document.getElementById('enter-box');
let b1 = document.getElementById('S1');
let b2 = document.getElementById('S2');
let b3 = document.getElementById('S3');
let b4 = document.getElementById('S4');
let b5 = document.getElementById('S5');
let b6 = document.getElementById('S6');
let thirdRow = document.getElementById('extra');
let b7 = document.getElementById('S7');
let b8 = document.getElementById('S8');
let b9 = document.getElementById('S9');
let b10 = document.getElementById('S10');
let enter = document.getElementById('enter-button');
let result = document.getElementById('result');
let changeConverter = document.getElementById('change');
let changeBack = document.getElementById('change-back');
changeBack.hidden = true;

function inputValue(buttons)   {
    inputBox.value += buttons.innerHTML+'';
}

function removeValue()  {
    inputBox.value = inputBox.value.slice(0,-1);
}

function clearValue()  {
    inputBox.value = '';
    result.innerHTML = '';
}

function conversionChangeTo() {
    title1.innerHTML = 'Roman Numeral to Number';
    title2.innerHTML = 'Converts up to MMMCMXCIX!';
    thirdRow.hidden = true;
    b1.innerHTML = 'I';
    b2.innerHTML = 'V';
    b3.innerHTML = 'X';
    b4.innerHTML = 'L';
    b5.innerHTML = 'C';
    b6.innerHTML = 'D';
    b10.innerHTML = 'M';
    changeConverter.hidden = true;
    changeBack.hidden = false;
    clearValue();
}

function conversionChangeBack() {
    title1.innerHTML = 'Number to Roman Numeral';
    title2.innerHTML = 'Converts up to 3999!';
    thirdRow.hidden = false;
    b1.innerHTML = '1';
    b2.innerHTML = '2';
    b3.innerHTML = '3';
    b4.innerHTML = '4';
    b5.innerHTML = '5';
    b6.innerHTML = '6';
    b10.innerHTML = '0';
    changeConverter.hidden = false;
    changeBack.hidden = true;
    clearValue();
}

function sendValue(input)    {
    if (changeConverter.hidden == false)    {
        result.innerHTML = convertToString(inputBox.value);
    }
    else    {
        result.innerHTML = convertToInt(inputBox.value);
    }

}