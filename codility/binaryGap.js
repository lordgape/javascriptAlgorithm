/**
 * 
 */

function binaryGap(n) {
    let counter = 0;
    return n.toString(2).split("").reduce((accumulator, currentElement) => {

        if (currentElement == 0) {
            counter++;
        }
        else {

            if (accumulator < counter)
                accumulator = counter;
            counter = 0;
        }

        return accumulator;

    }, 0);


}

//Test case 15, 10, 25,1041

let testCasesInput = [15, 10, 25, 1041, 9, 32]
let expectedOutput = [0, 1, 2, 5, 2, 0];

if (testCasesInput.length !== expectedOutput.length)
    throw Error("Test cases input and expected output is not equal");

testCasesInput.map((element,elementIndex) => {

    console.log(` Input ${element} expected ${expectedOutput[elementIndex]} : got ${binaryGap(element)} - ${(binaryGap(element) == expectedOutput[elementIndex]) ? 'CORRECT' : 'WRONG' }`);
})

//console.log(binaryGap(32));
