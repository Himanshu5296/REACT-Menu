// import logo from './logo.svg';
import './App.css';
import Contact from './DAY1/ContactUs';
import Download from './DAY1/Download';
import Heading from './DAY1/Heading';
import Help from './DAY1/Help';
import Home from './DAY1/Home';
import Join from './DAY1/JoinUs';
import List from './DAY1/List';
import Login from './DAY1/Login';
import Search from './DAY1/Search';
import Setting from './DAY1/Setting';


function App() {
  const OperatingData = ["Android","Blackberry","iPhone","Windows Phone"]
  const ManufacturingData = ["Samsung","HTC","Micromax","Apple"]
  return (
     <>
     <Heading heading={"Mobile Operating System"}/>
     <List data = {OperatingData}/>
     <Heading heading={"Mobile Manufacturers"}/>
     <List data={ManufacturingData}/>
     <div id='container'>
       <Join name="JOIN US"/>
       <Setting name="SETTINGS" />
       <Login name="LOGIN"/>
       <Contact name="CONTACT US"/>
       <Search name="SEARCH" />
       <Help name ="HELP"/>
       <Home name = "HOME"/>
       <Download name="DOWNLOAD"/>
     </div>
     </>
     
  );
}

export default App;
