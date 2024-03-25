import React from "react";
import { Formik, Form, Field } from 'formik';
import {  useNavigate } from "react-router-dom";


const ColorForm = ({handleSubmit}) => {  
    const navigate = useNavigate();        

    const initialValues = {
        colorName: '',
        colorValue:'#ffc0cb'
    }

    const fieldsToValidate = ['colorName']


    return(
        <div >
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    fieldsToValidate.forEach(field => {
                        if(!values[field]) {
                            errors[field] = 'required'
                        }
                        
                    })
                    return errors;
                }} onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values); 
                    setSubmitting(false); 
                    navigate('/colors'); 
                  }}>
                {({isSubmitting})=> (
                    <Form className="color-form">
                    <label htmlFor="colorName">Color name:</label>
                    <Field type="text" id="colorName" name="colorName" />
                  
                    <label htmlFor="colorValue">Pick a color:</label>
                    <Field type="color" id="colorValue" name="colorValue" />
                  
                    <button type="submit" disabled={isSubmitting} >
                      Submit
                    </button>
                  </Form>
                )}
            </Formik>

        </div>
    )



}

export default ColorForm;
