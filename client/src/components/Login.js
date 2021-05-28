import {useFormik} from 'formik'
import * as Yup from 'yup'
import TabsButton from './TabButton'
import {FaSignInAlt} from 'react-icons/fa'
import useAuth from './../utils/useAuth'
import {loginUser} from '../context/auth/authAction'
import Spinner from './Spinner'

const Login = () => {
  const [{loading}, authDispatch] = useAuth()

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
      loginUser(authDispatch, {data: values}, formik.resetForm)
    },
  })
  return (
    <div className="py-3">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userEmail">Email</label>
        <input
          className={`authInput ${
            formik.touched.userEmail && formik.errors.userEmail
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="email"
          id="userEmail"
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />
        <label htmlFor="userPassword">Password</label>
        <input
          className={`authInput ${
            formik.touched.userPassword && formik.errors.userPassword
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="password"
          id="userPassword"
          value={formik.values.userPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />
        <TabsButton>
          <FaSignInAlt /> <p className="ml-1">Sign in</p>
          {loading ? <Spinner className="text-xl ml-2" /> : ''}
        </TabsButton>
      </form>
    </div>
  )
}

export default Login
