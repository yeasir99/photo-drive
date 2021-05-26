import {useFormik} from 'formik'
import * as Yup from 'yup'
import TabsButton from './TabButton'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
      userPassword: Yup.string()
        .required('Please provide a password')
        .min(8, 'Password must be at least 8 character'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <div className="py-3">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userEmail">Email</label>
        <input
          className={`authInput ${
            formik.touched.userEmail && formik.errors.userEmail
              ? 'border-red-600'
              : 'border-gray-300'
          }`}
          type="email"
          id="userEmail"
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />

        {formik.touched.userEmail && formik.errors.userEmail ? (
          <div className="text-red-600 mb-2">{formik.errors.userEmail}</div>
        ) : null}

        <label htmlFor="userPassword">Password</label>
        <input
          className={`authInput ${
            formik.touched.userPassword && formik.errors.userPassword
              ? 'border-red-600'
              : 'border-gray-300'
          }`}
          type="password"
          id="userPassword"
          value={formik.values.userPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />

        {formik.touched.userPassword && formik.errors.userPassword ? (
          <div className="text-red-600 mb-2">{formik.errors.userPassword}</div>
        ) : null}

        <TabsButton>
          <FaSignInAlt /> <p className="ml-1">Sign in</p>
        </TabsButton>
      </form>
    </div>
  )
}

export default Login
