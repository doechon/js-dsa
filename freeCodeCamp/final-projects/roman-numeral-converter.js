function convertToRoman(num) {
    const translator = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    let res = '';
    while (num > 0) {
        for (let i of [1000,900,500,400,100,90,50,40,10,9,5,4,1]) {
            while (num - i > -1) {
                num -= i;
                res += translator[i];
            }
        }
    }
    return res;
}

console.log(convertToRoman(2014));