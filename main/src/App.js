import React from 'react';
import ColorModeSwitcher from './ColorModeSwitcher';
import Login from './components/Login';
import Home from './components/Home.jsx';
import Master from './components/Master.jsx';
import Transaction from './components/Transaction.jsx';
import MasterReport from './components/MasterReport.jsx';
import TransactionReport from './components/TransactionReport.jsx';
import Loader from './components/Loader.jsx';
import DetectorCreate from './components/Master/Detector/DectectorCreate.jsx';
import DetectorDisplay from './components/Master/Detector/DetectorDisplay.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RDC from './components/transaction/RDC.jsx';
import LocationCreate from './components/Master/Location/LocationCreate.jsx';
import ExecuteDectector from './components/transaction/ExecuteDectector.jsx';
import ReceiveReport from './components/transaction/ReceiveReport.jsx';

const App = () => {
  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/master' element={<Master />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/master-report' element={<MasterReport />} />
        <Route path='/transaction-report' element={<TransactionReport />} />
        <Route path='/loader' element={<Loader />} />
        <Route path='/pdmaster' element={<DetectorCreate />} />
        <Route path='/pdmreport' element={<DetectorDisplay />} />
        <Route path='/rdcreceive' element={<RDC />} />
        <Route path='/locationcreate' element={<LocationCreate />} />
        <Route path='/execute-detector' element={<ExecuteDectector />} />
        <Route path='/receive-report' element={<ReceiveReport />} />
      </Routes>
    </Router>
  );
};

export default App;
