class Display {
    constructor (displayValuePrev, displayValueActual){
        this.displayValueActual = displayValueActual;
        this.displayValuePrev = displayValuePrev;
        this.calculator = new Calculator();
        this.valueActual = '';
        this.valuePrev = '';
    }

    addNumber(number) {
        if(number === '.' && this.valueActual.includes('.')) return
        this.valueActual = this.valueActual.toString() + number.toString();
        this.printValue();
    }

    printValue() {
        this.displayValueActual.textContent = this.valueActual;
        this.displayValuePrev.textContent = this.valuePrev;
    }
}