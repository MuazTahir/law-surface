"use client"
import { useEffect, useRef, useState } from "react"
import Information from "../Information/Info";
import Office from "../Office/page";
import Logo from "../Logo/page";
import "./Header.css";
import Whatsapp from "../Whatsapp/page";

export default function Header(){


  const [color, setColor] = useState('#1d6732');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');
  const [color4, setColor4] = useState('black');
  const [borderBottom, setBorderBottom] = useState('2px solid #1d6732');
  const [borderBottom2, setBorderBottom2] = useState('');
  const [borderBottom3, setBorderBottom3] = useState('');
  const [borderBottom4, setBorderBottom4] = useState('');
  const colorChange = () => {
    setColor('#1d6732');
    setBorderBottom('4px solid #1d6732');
    // Reset other tabs
    setColor2('black');
    setBorderBottom2('');
    setColor3('black');
    setBorderBottom3('');
    setColor4('black');
    setBorderBottom4('black');
  };

  const colorChange2 = () => {
    setColor2('#1d6732');
    setBorderBottom2('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor3('black');
    setBorderBottom3('');
    setColor4('black');
    setBorderBottom4('');
  };
  const colorChange3 = () => {
    setColor3('#1d6732');
    setBorderBottom3('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor2('black');
    setBorderBottom2('');
    setColor4('black');
    setBorderBottom4('');
  };
  const colorChange4 = () => {
    setColor4('#1d6732');
    setBorderBottom4('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor3('black');
    setBorderBottom3('');
    setColor2('black');
    setBorderBottom2('');
  };

 

//   useEffect(()=>{

//     var triggerTabList = [].slice.call(document.querySelectorAll('myTab a'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })

//   })

  const [activeTab, setActiveTab] = useState('Office Information');
return <div>
   <div id="header" className="row mt-4 pt-4 rounded p-3 bg-white">
  <div className="col-12">
    <>
      {/* Tabs navs */}
      <ul className="nav nav-tabs mb-3 justify-content-center justify-content-md-start" id="ex1" role="tablist">
        <li onClick={colorChange} style={{ borderBottom: borderBottom }} className="nav-item" role="presentation">
          <button
            style={{ color: color}}
            className={`border-0 mx-2 btn-tab ${activeTab === 'Office Information' ? 'active' : ''}`}
            id="tab-The Case Facts"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Office Information')}
          >
            Office Information
          </button>
        </li>
        <li onClick={colorChange2} style={{ borderBottom: borderBottom2 }} className="nav-item" role="presentation">
          <button
            style={{ color: color2 }}
            className={`border-0 mx-2  btn-tab ${activeTab === 'Office Latterhead' ? 'active' : ''}`}
            id="tab-The Counseling"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Office Latterhead')}
          >
            Office Latterhead
          </button>
        </li>
        <li onClick={colorChange3} style={{ borderBottom: borderBottom3 }} className="nav-item" role="presentation">
          <button
            style={{ color: color3}}
            className={`border-0 mx-2 btn-tab ${activeTab === 'Logo & Stamp' ? 'active' : ''}`}
            id="tab-File Attachment"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Logo & Stamp')}
          >
            Logo & Stamp
          </button>
        </li>
        <li onClick={colorChange4} style={{ borderBottom: borderBottom4 }} className="nav-item" role="presentation">
          <button
            style={{ color: color4 }}
            className={`border-0 mx-2 btn-tab ${activeTab === 'Whatsapp Services' ? 'active' : ''}`}
            id="tab-File Attachment"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Whatsapp Services')}
          >
            Whatsapp Services
          </button>
        </li>
      </ul>

      {/* Tabs content */}
      <div className="myBorder">
        <div className="tab-content" id="ex1-content">
          <div
            className={`tab-pane fade ${activeTab === 'Office Information' ? 'show active' : ''}`}
            id="tab-The Case Facts"
            role="tabpanel"
          >
            <Information />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'Office Latterhead' ? 'show active' : ''}`}
            id="tab-The Counseling"
            role="tabpanel"
          >
            <Office />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'Logo & Stamp' ? 'show active' : ''}`}
            id="tab-File Attachment"
            role="tabpanel"
          >
            <Logo />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'Whatsapp Services' ? 'show active' : ''}`}
            id="tab-File Attachment"
            role="tabpanel"
          >
            <Whatsapp />
          </div>
        </div>
      </div>
    </>
  </div>
</div>

</div>
}