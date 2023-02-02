class Display {
    constructor (displayValuePrev, displayValueActual){
        this.displayValueActual = displayValueActual;
        this.displayValuePrev = displayValuePrev;
        this.calculator = new Calculator();
        this.typeOperator = undefined;
        this.valueActual = '';
        this.valuePrev = '';
        this.sign = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x',
        }
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

    computar(type){
        this.typeOperator !== 'igual' && this.calculate();
        this.typeOperator = type;
        this.valuePrev = this.valueActual || this.valuePrev;
        this.valueActual = '';
        this.printValue();
    }

    addNumber(number) {
        if(number === '.' && this.valueActual.includes('.')) return
        this.valueActual = this.valueActual.toString() + number.toString();
        this.printValue();
    }

    printValue() {
        this.displayValueActual.textContent = this.valueActual;
        this.displayValuePrev.textContent = `${this.valuePrev} ${this.sign[this.typeOperator] || ''}`;
    }

    calculate() {
        const valuePrev = parseFloat(this.valuePrev);
        const valueActual = parseFloat(this.valueActual);

        if(isNaN(valueActual) || isNaN(valuePrev)) return
        this.valueActual = this.calculator[this.typeOperator](valuePrev, valueActual);
    }
}