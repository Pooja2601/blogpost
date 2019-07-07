import React from 'react';
import { withFormik } from 'formik';

const Formik=({values})=>{
  return <div>
  <input name="email" placeholder="Email" type="email" value={values.email}/>
  
  
  </div>  
}

export default FormikApp=withFormik({
    mapPropsToValues(){
        email:"Enter Email"
    }
})(Formik)