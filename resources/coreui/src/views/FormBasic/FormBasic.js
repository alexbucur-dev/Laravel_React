/**
 * Created by ciub_ on 06.08.2020.
 */
import React, { Component } from 'react'
import {
    CButton,  CInput
} from '@coreui/react'
class FormBasic extends Component{

    constructor(props){
        super(props);
        this.state = {
            text : 'ABC',
            form:{}
        };
        this.onClickButton = this.onClickButton.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    onClickButton(event){
        this.setState({
           text:'ABCDE'
        });
    }
    onChangeInput(event){
        console.log('Target name : '+event.target.name);
        console.log('Target value : '+ event.target.value);
        this.state.form[event.target.name] = event.target.value;
        this.setState({
            form:this.state.form,
        });
        console.log(this.state.form);
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    componentDidCatch(error, info){
        console.log('componentDidCatch');
    }
    componentDidUpdate(prevProps){
        console.log(prevProps);
    }
    render(){
        return(<div>
            <h2>{this.state.text}</h2>
            <CButton onClick={this.onClickButton} color="primary">Click</CButton>
            <h3>1. {typeof this.state.form.text_input !== 'undefined' ? this.state.form.text_input : 'NO TEXT'}</h3>
            <h3>2. {typeof this.state.form.text_input2 !== 'undefined' ? this.state.form.text_input2 : 'NO TEXT'}</h3>
            <CInput onChange={this.onChangeInput} name="text_input" id="name" placeholder="Enter your name" required />
            <CInput onChange={this.onChangeInput} name="text_input2" id="name" placeholder="Enter your name" required />
        </div>);
    }
}
export default FormBasic;