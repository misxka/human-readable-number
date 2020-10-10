module.exports = function toReadable(number) {
    let underTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let underTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = [];
    let counter = 0;
    let surpluses = [];
    let surplus = 0;

    if(number == 0) {
        return 'zero';
    }

    while (number > 0) {
        surplus = number % 10;
        surpluses.push(surplus);
        if (counter == 0) {
            result.push(underTen[surplus]);
        } else if (counter == 1) {
            if (surplus == 1) {
                result[counter - 1] = underTwenty[surpluses[0]];
            } else if (surplus !== 0) {
                result.push(decades[surplus - 2]);
            }
        } else if (counter == 2) {
            result.push(underTen[surplus] + " hundred");
        }
        number /= 10;
        number = Math.floor(number);
        counter++;
    }

    let resultStr = '';
    for (let i = result.length - 1; i >= 0; i--) {
        resultStr = resultStr.concat(result[i]);
        if(i !== 0 && result[i - 1] !== '') {
            resultStr = resultStr.concat(" ");
        }
    }

    return resultStr;
}
