import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllFeedback } from './components/AllFeedback';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Use } from './components/Use';
import { InterviewListAsGraph } from './components/InterviewListAsGraph';
import { SearchOnSkill } from './components/SearchOnSkill';
import { HiringDecisionChart } from './components/HiringDecisionChart';
import { ShowFeedbackMonthWise } from './components/ShowFeedbackMonthWise';
import OrdersList from './components/OrdersList';
import AddOrder from './components/AddOrder';
import { ShowAllByDateRange } from './components/ShowAllByDateRange';



function App() {

  return (
    <>
    <Header/>
    {/* <Main/> */}
    {/* <AllFeedback/> */}



    <Routes >
     <Route exact path='/InterviewListAsGraph' element={<InterviewListAsGraph/>}>
     </Route>
     <Route exact path='/SearchOnSkill' element={<SearchOnSkill/>}>
     </Route>
     <Route exact path='/AllFeedback' element={<AllFeedback/>}>
     </Route>
     <Route exact path='/HiringDecisionChart' element={<HiringDecisionChart/>}>
     </Route>
     <Route exact path='/ShowFeedbackMonthWise' element={<ShowFeedbackMonthWise/>}>
     </Route>
     <Route exact path='/ShowAllByDateRange' element={<ShowAllByDateRange/>}>
     </Route>
     <Route path="/ordersList" element={<OrdersList />}   />
     <Route path="/AddOrder" element={<AddOrder />}  />
 
     </Routes>
    
    </>
  );
}

export default App;
