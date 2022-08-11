function FizzBuzz(inputnumber) {
    let array = []
        for (let i = 1; i<= inputnumber; i++) {
            array = []
    
            // not sure i need to initiate these additionstrings externally
            let sevenaddition = ""
            if (i%7 == 0){sevenaddition = 'Bang'}
    
            let thirteenaddition = ""
            if (i%13 == 0){thirteenaddition = 'Fezz'}
    
            if (i%11 == 0){
                array.push(thirteenaddition, "Bong")
            } else if (i%5 == 0 && i%3 == 0){
                array.push('Fizz', thirteenaddition, 'Buzz', sevenaddition)
            } else if (i%3 == 0){
                array.push('Fizz', thirteenaddition, sevenaddition)
            } else if (i%5 == 0){
                array.push('Buzz', thirteenaddition, sevenaddition)
            } else {
                let numberstring = i.toString()
                array.push(numberstring)
            }
    
            if (i%17 == 0){array.reverse()}
        
        let string = array.join("")
    
        console.log(string)
    }};
    
    const readline = require('readline').createInterface(
        {input: process.stdin,
        output: process.stdout,},
        
        );
    
    readline.question(`What number do you want to count up to? `, number => {
        FizzBuzz(number);
        readline.close()
    })