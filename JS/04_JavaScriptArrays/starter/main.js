let quote =['I','am','your','friend'];
console.log(quote[2]);

quote.pop(quote.length - 1);
quote.push('father');

console.log(quote);

quote.unshift('Luke');

console.log(quote);

let erroneousWord = 'Le';
let lukeIsHere = quote.find(n => { return n === erroneousWord});

let lukeIsAt

if(lukeIsHere == erroneousWord){
lukeIsAt = quote.findIndex(n => { return n === erroneousWord})

    if (lukeIsHere) {
        lukeIsAt = quote.findIndex(n => {
            return n === erroneousWord
        });
        quote[lukeIsAt] = "No";
    }
} else {
    quote.shift();
    quote.unshift('No');
}

let output = '';

for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}

console.log(output)