import {Switch,Route,} from "react-router-dom";
import HomePage from "./Components/Routes/HomePage/HomePage";
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Work from "./Components/Routes/Work/Work";
import Services from "./Components/Routes/Services/Services";
import FinancePage from "./Components/Routes/Finance/Finance";
import RemappingPage from "./Components/Routes/Remapping/Remapping";
import ContactUs from "./Components/Routes/ContactUs/ContactUs";

function App() {
  return (
<>
  <Navbar/>
    <Switch>
      <Route exact component={HomePage} path="/"/>
      <Route component={Work} path="/work"/>
      <Route component={Services} path="/services"/>
      <Route component={FinancePage} path="/finance"/>
      <Route component={RemappingPage} path="/remapping"/>
      <Route component={ContactUs} path="/contactUs"/>
    </Switch>
</>
  );
}

export default App;
