import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@reach/tabs'
import '@reach/tabs/styles.css'
import About from './../components/About'
import Login from './../components/Login'
import SignUp from './../components/SignUp'

const Unauthorizedapp = () => {
  return (
    <div className="unAuthorizedApp">
      <About />
      <div className="max-w-xs ">
        <Tabs className="bg-blue-200 rounded-lg">
          <TabList className="flex text-lg rounded-t-lg">
            <Tab className="w-full outline-none focus:outline-none focus:bg-blue-200 rounded-tl-lg">
              Login
            </Tab>
            <Tab className="w-full outline-none focus:outline-none focus:bg-blue-200 rounded-tr-lg">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels className="px-4">
            <TabPanel className="w-full">
              <Login />
            </TabPanel>
            <TabPanel className="w-full">
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default Unauthorizedapp
