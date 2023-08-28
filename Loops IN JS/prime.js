let count = 0;  // To keep track of the number of prime numbers found
let num = 2;    // Starting from the first candidate prime number

while (count < 10) {
    let isPrime = true;

    if (num === 2 || num === 3) {
        console.log(num + " prime");
        count++;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num + " prime");
            count++;
        }
    }

    num++;
}
