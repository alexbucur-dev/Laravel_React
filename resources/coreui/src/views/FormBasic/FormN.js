import React, { Component } from 'react'
import axios from 'axios'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CLabel,
    CSelect,
    CRow
} from '@coreui/react'
class FormN extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
            form:{}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.state.form[event.target.name] = event.target.value;
        this.setState({
            form:this.state.form
    });
        console.log(this.state.form);
    }

    handleSubmit(event)
        {
        //alert('Datele au fost completate cu succes: ' + this.state.value);
        event.preventDefault();

            var qs = require('qs');
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            axios.post(window.Laravel.BASE_URL + '/formN', qs.stringify(this.state.form), config)
                .then(res => {
                    console.log(res.data);
                }).catch(error => {
                    console.log(error);
            });
    };

    render()
        {
        return (
            <div>
                <CCard>
                    <CForm encType="multipart/form-data" className="form-horizontal">
                    <CCardHeader>
                        Credit Card
                        <small> Form</small>
                    </CCardHeader>

                        <CRow>
                            <CCol xs="12">
                                <CFormGroup>
                                    <CLabel htmlFor="name">Name</CLabel>
                                    <CInput id="name" name="name" placeholder="Enter your name" required onChange={this.handleChange}/>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs="12">
                                <CFormGroup>
                                    <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                                    <CInput id="ccnumber" name="ccnumber" placeholder="0000 0000 0000 0000" required onChange={this.handleChange}/>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs="4">
                                <CFormGroup>
                                    <CLabel htmlFor="ccmonth">Month</CLabel>
                                    <CSelect custom name="ccmonth" id="ccmonth" onChange={this.handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="4">
                                <CFormGroup>
                                    <CLabel htmlFor="ccyear">Year</CLabel>
                                    <CSelect custom name="ccyear" id="ccyear" onChange={this.handleChange}>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                    </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="4">
                                <CFormGroup>
                                    <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                                    <CInput id="cvv" name="cvv" placeholder="123" required onChange={this.handleChange}/>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="8">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Ataseaza o imagine</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInputFile
                                            id="file-multiple-input"
                                            name="file-multiple-input"
                                            multiple
                                            custom
                                        />
                                        <CLabel htmlFor="file-multiple-input" variant="custom-file">
                                            Choose Files...
                                        </CLabel>
                                    </CCol>

                                </CFormGroup>
                            </CCol>
                        </CRow>

                        <CCardFooter>
                            <CButton color="primary" onClick={this.handleSubmit}> Trimite datele</CButton>
                        </CCardFooter>
                    </CForm>
                </CCard>

            </div>
        );
    }
}
export default FormN;