// Find volume of a box
class Cube {
    constructor(side) {
        this.side = side;
    }
    
    get volume() {
        return this.volumeFormula();
    }
    
    get surfaceArea() {
        return this.surfaceAreaFormula();
    }

    get diagonalBox() {
        return this.diagonalBoxFormula();
    }
    
    volumeFormula() {
        return Math.pow(this.side, 3);
    }
    
    surfaceAreaFormula() {
        let a2 = Math.pow(this.side, 2);
        return 6 * a2;
    }

    diagonalBoxFormula() {
        return Math.sqrt(3) * this.side;
    }
}

console.log("Oppgave volume");
const cubeYes = new Cube(5);
console.log(cubeYes.volume);

console.log("Oppgave surface-area")
const surfaceAreaVolume = new Cube(1);
console.log(surfaceAreaVolume.surfaceArea);

console.log("Oppgave diganola body");
const diagnoalBody = new Cube(5);
console.log(diagnoalBody.diagonalBox);


console.log("Check palindrome");

const checkPalindrome = (str) => {

    const stringValues = str.split("");

    const reverseStringValues = stringValues.reverse();

    const reversedString = reverseStringValues.join("");


    // console.log(str.slice(0, -1) + reversedString);

    return str === reversedString ? console.log("It is a palindrome") : console.log(`${str} is not a palindrome, but this is ${str.slice(0, -1) + reversedString}`);

} 

// cnst reversePalindrome = (str) => {

// }

checkPalindrome("victor");