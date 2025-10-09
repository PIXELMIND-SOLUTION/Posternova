import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import PrivacyAndPolicy from './pages/PrivacyandPolicy'
import TermsandConditions from './pages/TermsAndConditions'
import CancellationRefundPolicy from './pages/CancellationRefund';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyAndPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
        <Route path='/cancel-refund' element={<CancellationRefundPolicy />} />
      </Routes>
    </>
  )
}

export default App
