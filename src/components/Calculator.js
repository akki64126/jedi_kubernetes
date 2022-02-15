import React, {Component} from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './ans';
import Keypad from './Keypad';

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }
    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } 
        catch (e) {
            this.setState({data: 'error'})
        }
    }

    click = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        return(
            <div className="Calculator">
                <h1>Calculator</h1>
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.click} label="C" value="clear" />
                    <Button onClick={this.click} label="7" value="7" />
                    <Button onClick={this.click} label="4" value="4" />
                    <Button onClick={this.click} label="1" value="1" />
                    <Button onClick={this.click} label="0" value="0" />

                    <Button onClick={this.click} label="÷" value="/" />
                    <Button onClick={this.click} label="8" value="8" />
                    <Button onClick={this.click} label="5" value="5" />
                    <Button onClick={this.click} label="2" value="2" />
                    <Button onClick={this.click} label="." value="." />

                    <Button onClick={this.click} label="x" value="*" />
                    <Button onClick={this.click} label="9" value="9" />
                    <Button onClick={this.click} label="6" value="6" />
                    <Button onClick={this.click} label="3" value="3" />
                    <Button onClick={this.click} label="" value="null" />

                    <Button onClick={this.click} label="-" value="-" />
                    <Button onClick={this.click} label="+" size="2" value="+" />
                    <Button onClick={this.click} label="=" size="2" value="equal" />
                </Keypad>
            </div>
        );
    }
}
export default Calculator;