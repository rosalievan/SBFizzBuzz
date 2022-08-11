function FizzBuzz() {
    // testing
    for (let i = 1; i<= 100; i++) {
        if (i% 7 == 0){
            if (i%5 == 0 && i%3 == 0){
                console.log('FizzBuzzBang')
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
    }}};
    
    const readline = require('readline').createInterface(
        {input: process.stdin,
        output: process.stdout,},
        
        );
    
    readline.question(`What number do you want to count up to? `, number => {
        FizzBuzz(number);
        readline.close()
    })