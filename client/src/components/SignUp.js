import {useFormik} from 'formik'
import * as Yup from 'yup'
import TabsButton from './TabButton'
import {HiUserAdd} from 'react-icons/hi'
import useAuth from './../utils/useAuth'
import {registerUser} from '../context/auth/authAction'
import Spinner from './Spinner'

const SignUp = () => {
  const [{loading}, authDispatch] = useAuth()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
      ),
    }),
    onSubmit: values => {
      registerUser(authDispatch, {data: values}, formik.resetForm)
    },
  })

  return (
    <div className="py-3">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={`authInput ${
            formik.touched.name && formik.errors.name
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          className={`authInput ${
            formik.touched.email && formik.errors.email
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          className={`authInput ${
            formik.touched.password && formik.errors.password
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={`authInput ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? 'border-2 border-red-600'
              : 'border border-gray-300'
          }`}
          type="password"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm Password"
        />
        <TabsButton>
          <HiUserAdd /> <p className="ml-1">Sign Up </p>
          {loading ? <Spinner className="text-xl ml-2" /> : ''}
        </TabsButton>
      </form>
    </div>
  )
}

export default SignUp
