import { Route, Routes } from "react-router-dom"

import ApplyJob from "./Pages/ApplyJob"
import Application from "./Pages/Application"
import Home from "./Pages/HOme"
import RecruiterLogin from "./Component/RecruiterLogin"
import { useContext } from "react"
import { AppContext } from "./context/Appcontext"
import ViewAppliation from "./Pages/ViewAppliation"
import ManageJobs from "./Pages/ManageJobs"
import DashBoard from "./Pages/DashBoard"
import AddJob from "./Pages/AddJob"
import 'quill/dist/quill.snow.css'

function App() {

  const {showRecruiterLogin}=useContext(AppContext)
  
  return (
  <div>
    {showRecruiterLogin && <RecruiterLogin/>}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/apply-job/:id" element={<ApplyJob/>}/>
      <Route path="/application" element={<Application/>}/>
  <Route path="/dashboard" element={<DashBoard/>}>
    <Route path="manage-jobs" element={<ManageJobs/>}/>  
      <Route path="view-application" element={<ViewAppliation/>}/>
      <Route path="add-job" element={<AddJob />}/>
  </Route>
    </Routes>

  </div>
  )
}

export default App
