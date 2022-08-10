function FizzBuzz() {
    // testing
    for (let i = 1; i<= 100; i++) {
        if (i% 7 == 0){
            if (i%5 == 0 && i%3 == 0){
                console.log('FizzBuzzBang')
            } else if (i%3 == 0){
                console.log('FizzBang')
            } else if (i%5 == 0){
                console.log('BuzzBang')
            } else {
                console.log('Bang')
            }

        }
        if (i%5 == 0 && i%3 == 0){
            console.log('FizzBuzz')
        } else if (i%3 == 0){
            console.log('Fizz')
        } else if (i%5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

FizzBuzz()