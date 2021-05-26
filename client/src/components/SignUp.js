import {useFormik} from 'formik'
import * as Yup from 'yup'
import TabsButton from './TabButton'
import {HiUserAdd} from 'react-icons/hi'

const SignUp = () => {
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
      console.log(values)
      //handle async task
    },
  })
  return (
    <div className="py-3">
      <form onSubmit={formik.onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="authInput"
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          className="authInput"
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="authInput"
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="authInput"
          type="password"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm Password"
        />
        <TabsButton>
          <HiUserAdd /> <p className="ml-1">Sign Up</p>
        </TabsButton>
      </form>
    </div>
  )
}

export default SignUp
