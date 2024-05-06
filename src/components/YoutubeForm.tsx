import React from 'react'
import { useFormik } from 'formik'


interface FormValues {
    name: string;
    email: string;
    channel: string;
}

const initialValues = {
    name: '',
    email: '',
    channel: '',
}


const onSubmit =
    (values: FormValues) => {
        console.log('Form Values', values);
    }

const validate = (values: FormValues) => {
    // let errors={}
    let errors: Partial<FormValues> = {};



    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email='Invalid Email address'
    }

    if (!values.channel) {
            errors.channel = 'Required'
        }

    return errors
}




const YoutubeForm = () => {

    const formik = useFormik<FormValues>({
        initialValues,
        onSubmit,
        validate
    })

    console.log("Form Errors", formik.errors)


    return (
        <>
            <form action="" className='form-Container' onSubmit={formik.handleSubmit}>

            <div>
            <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name  ? <div className='error'  >{formik.errors.name}</div>:null}
            </div>
                
                
              <div>
              <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email?<div className='error'  >{formik.errors.name}</div>:null}
              </div>
                
               <div>
               <label htmlFor="channel">Channel</label>
                <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
                {formik.errors.channel ?<div className='error'  >{formik.errors.channel}</div> :null }
               </div>

                <button type='submit'  >Submit</button>
            </form>
        </>
    )
}

export default YoutubeForm