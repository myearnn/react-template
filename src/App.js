import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Router, Route, Link,Routes} from 'react-router-dom'
import Contact from './pages/contact';
import Home from './pages/Home';
import List from './pages/List';

// BrowserRouter: เป็นคอมโพเนนต์ของ React Router ที่ใช้งาน HTML5 history API (pushState, replaceState, และ popstate event) เพื่อให้ UI ของคุณสอดคล้องกับ URL โดยเป็นคอมโพเนนต์แม่ที่ใช้เก็บคอมโพเนนต์อื่น ๆ ที่เกี่ยวข้องกับการเปลี่ยนเส้นทาง
// Routes: เป็นคอมโพเนนต์ที่ถูกนำเข้ามาในเวอร์ชัน 6 เพื่ออัพเกรดคอมโพเนนต์การนำทางก่อนหน้า (Switch) โดยมีข้อดีหลักคือการเลือกเส้นทางที่ดีที่สุดแทนการท่องไปในลำดับ
// Route ใช้สำหรับกำหนดเส้นทาง (route) ที่จะแสดง component เมื่อ URL ตรงกับเส้นทางที่กำหนด โดยใช้คุณสมบัติ path เพื่อระบุ URL โดย V5 จะใช้ component เพื่อระบุคอมโพเนนต์ที่จะแสดงส่วน V6 จะใช้ element

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/list" element={<List />}></Route>
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>

    // </div>
  );
}

export default App;
