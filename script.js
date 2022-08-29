const toRomanRadio = document.querySelector("#arabicToRoman")
const toArabicRadio = document.querySelector("#romanToArabic")
const input = document.querySelector("#input")
const convertBtn = document.querySelector("#convert")
const output = document.querySelector("#output")
const clearBtn = document.querySelector("#clear")
var operation = 'arabictoRoman'

/* Funções de conversão */

function convertToRoman(num) {
    let char1 = ''
    let char2 = ''
    let char3 = ''
    let char4 = ''
    let string = num.toString()

    switch(string[string.length - 1]) {
        case '1':
            char1 = 'I'
            break;
        case '2':
            char1 = 'II'
            break;
        case '3':
            char1 = 'III'
            break;
        case '4':
            char1 = 'IV'
            break;
        case '5':
            char1 = 'V'
            break;
        case '6':
            char1 = 'VI'
            break;
        case '7':
            char1 = 'VII'
            break;
        case '8':
            char1 = 'VIII'
            break;
        case '9':
            char1 = 'IX'
            break;
    }

    if(string.length >= 2){
        switch(string[string.length - 2]) {
            case '1':
                char2 = 'X'
                break;
            case '2':
                char2 = 'XX'
                break;
            case '3':
                char2 = 'XXX'
                break;
            case '4':
                char2 = 'XL'
                break;
            case '5':
                char2 = 'L'
                break;
            case '6':
                char2 = 'LX'
                break;
            case '7':
                char2 = 'LXX'
                break;
            case '8':
                char2 = 'LXXX'
                break;
            case '9':
                char2 = 'XC'
                break;
        }
    }

    if(string.length >= 3){
        switch(string[string.length - 3]) {
            case '1':
                char3 = 'C'
                break;
            case '2':
                char3 = 'CC'
                break;
            case '3':
                char3 = 'CCC'
                break;
            case '4':
                char3 = 'CD'
                break;
            case '5':
                char3 = 'D'
                break;
            case '6':
                char3 = 'DC'
                break;
            case '7':
                char3 = 'DCC'
                break;
            case '8':
                char3 = 'DCCC'
                break;
            case '9':
                char3 = 'CM'
                break;
        }
    }

    if(string.length === 4){
        switch(string[string.length - 4]) {
            case '1':
                char4 = 'M'
                break;
            case '2':
                char4 = 'MM'
                break;
            case '3':
                char4 = 'MMM'
                break;
        }
    }

    if(string.length >= 5 || num >= 4000){
        return "Só suportamos números arábicos de 0 a 3999!"
    }

    return char4 + char3 + char2 + char1
}

function convertToArabic(romanNum){
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let upperCaseNum = romanNum.toUpperCase()
    let arrayRomans = [...upperCaseNum]
    
    let arabic = 0;

    for(let i = 0; i < arrayRomans.length; i++){

        if(i + 1 === arrayRomans.length){
            arabic += romans[arrayRomans[i]]
        }
        else if(romans[arrayRomans[i]] >= romans[arrayRomans[i + 1]]){
            arabic += romans[arrayRomans[i]]
        }
        else {
            arabic -= romans[arrayRomans[i]]
        };
    };
    if(convertToRoman(arabic) === upperCaseNum){
        return arabic;
    }
    return 'Este número romano está incorreto';
}

/* Limpar input*/

const clear = function() {
    input.value = ''
}

/* EventListener dos botões */

toArabicRadio.addEventListener("click", (event) => {
    input.placeholder = "insira seu número romano";
    operation = 'romanToArabic'
    clear()
})

toRomanRadio.addEventListener("click", (event) => {
    input.placeholder = "insira seu número árabe";
    operation = 'arabictoRoman'
    clear()
})

convertBtn.addEventListener("click", (event) => {
    switch(operation){
        case 'arabictoRoman':
            let arabicOutput = convertToRoman(input.value);
            if(input.value >= 4000){
                output.innerHTML = `${arabicOutput}`;
            }else{
                output.innerHTML = `${input.value} = ${arabicOutput}`;
            }
            break;
        case 'romanToArabic':
            let romanOutput = convertToArabic(input.value);
            output.innerHTML = `${input.value.toUpperCase()} = ${romanOutput}`
            break;
    }
})

clearBtn.addEventListener("click", (event) => { 
    clear()
})
