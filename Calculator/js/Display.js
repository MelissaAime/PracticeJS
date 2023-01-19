class Display {
    constructor (displayValuePrev, displayValueActual){
        this.displayValueActual = displayValueActual;
        this.displayValuePrev = displayValuePrev;
        this.calculator = new Calculator();
        this.typeOperator = undefined;
        this.valueActual = '';
        this.valuePrev = '';
    }

    delete(){
        this.valueActual = this.valueActual.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll(){
        this.valueActual = '';
        this.valuePrev = '';
        this.typeOperator = undefined;
        this.printValue();
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