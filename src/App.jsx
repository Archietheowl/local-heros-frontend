import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//!--- Components
import NavBar from './components/NavBar/NavBar'

//!--- Pages 
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'

import JobIndex from './pages/JobIndex/JobIndex';
import JobForm from './pages/JobForm/JobForm';
import JobShow from './pages/JobIndex/JobIndex';

import HelperList from './pages/HelpersList/HelpersList';
import HelperDetails from './pages/HelperDetails/HelperDetails';
import HelperCreate from './pages/HelperCreate/HelperCreate';
import HelperUpdate from './pages/HelperUpdate/HelperUpdate';

const App = () => {
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/jobs' element={<JobIndex/>} />
        <Route path='/jobs/new' element={<JobForm />} />
        <Route path='/jobs/:jobId' element={<JobShow />} />
        <Route path="/helpers" element={<HelperList />} />
        <Route path="/helpers/:helperId" element={<HelperDetails />} />
        <Route path="/helpers/new" element={<HelperCreate />} />
        <Route path="/helpers/:helperId/edit" element={<HelperUpdate />} />
      </Routes>
    </>
  ) };



export default App;
