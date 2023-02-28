import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup"
import './FormReg.css'

function FormReg({data,setData, setPage}){
  
    const validationSchema = yup.object().shape({
        name:yup.string().typeError("petq e lini tox").required("partadir e"),
        email:yup.string().typeError("petq e lini tox").email("greq chisht email").required("partadir e"),
        password:yup.string().typeError("petq e lini tox").required("partadir e"),
        confirmPassword:yup.string().typeError("petq e lini tox").oneOf([yup.ref("password")], "chi hamapatasxanum").required("partadir e"),
    })
    return(

        <Formik
        initialValues={{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        }}
        onSubmit={(values, {resetForm})=> {
            console.log(values);
            setData([
                ...data,
                {
                    ...values,
                }
            ])
            setPage('log')
           resetForm()
        //    console.log(data);//1 hat ushacumova grancum
        }}
        
        validateOnBlur
        validationSchema={validationSchema}
        >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (

            <div className="form">
                <form className="form-body" onSubmit={handleSubmit}>
                    <h1 className="main_title">Registration</h1>


                    <input
                        className="form__input"
                        type={"text"}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder=""
                    />
                    {touched.name && errors.name && <p  style={{
                        color:"white",
                        fontSize:'15px'
                    }}>{errors.name}</p>}<br/>

                    <label className="form__label">first name</label><br/>

                    <input 
                        className="form__input"
                        type={"text"}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder=""
                    />
                    {touched.email && errors.email && <p  style={{
                        color:"white",
                        fontSize:'15px'
                    }}>{errors.email}</p>}<br/>

                    <label className="form__label">email</label><br/>

                    <input 
                        className="form__input"
                        type={"text"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder=""
                    />
                    {touched.password && errors.password && <p  style={{
                        color:"white",
                        fontSize:'15px'
                    }}>{errors.password}</p>}<br/>

                    <label className="form__label">password</label><br/>

                    <input 
                        className="form__input"
                        type={"text"}
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder=""
                    />
                    {touched.confirmPassword && errors.confirmPassword && <p style={{
                        color:"white",
                        fontSize:'15px'
                    }}>{errors.confirmPassword}</p>}
                 <Link to='/login'>   <button type="submit" className="btntwo" disabled={!isValid || !dirty}>Reg</button></Link>
                </form>
                    <label className="form__label">confirmPassword</label><br/>
                    
            </div>
        )}
        </Formik>

    )
}
export default FormReg