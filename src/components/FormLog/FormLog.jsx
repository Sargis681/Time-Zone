import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"
import "./FormLog.css"
function FormLog({ data, setPage, setCurrentUserName }) {
    const [bool, setBool] = useState(false)
    const validationSchema = yup.object().shape({
        name: yup.string().typeError("petq e lini tox").required("partadir e"),
        password: yup.string().typeError("petq e lini tox").required("partadir e"),
    })
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    password: "",
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    if (data.some(el => el.name === values.name && el.password === values.password)) {
                        setCurrentUserName(values.name)
                        setPage('/')
                    }
                    resetForm()
                }}

                validateOnBlur
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

                    <div className="form">
                        <form className="form-body" onSubmit={handleSubmit}>
                            <h1 className="main_title">Login</h1>

                            <input
                                className="form__input"
                                type={"text"}
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder=""
                            />
                            {touched.name && errors.name && <p style={{
                                color: "red",
                                fontSize: '15px'
                            }}>{errors.name}</p>}<br />


                            <label className="form__label">first name</label><br />
                            <input
                                className="form__input"
                                type={"text"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder=""
                            />
                            {touched.password && errors.password && <p style={{
                                color: "red",
                                fontSize: '15px'
                            }}>{errors.password}</p>}<br />
                            {bool && <h1 style={{ color: 'white' }}>Wrong Name or Password</h1>}

                            <label className="form__label">password</label><br />
                            <button className="btn" type="submit" disabled={!isValid || !dirty}>Log</button>
                        </form>
                        <Link to='/registr'> <button className="registr" onClick={() => setPage('reg')}>Registr </button></Link>
                    </div>
                )}
            </Formik>

        </>
    )
}
export default FormLog