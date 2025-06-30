

"use client"
import { FaMinus, FaPlus } from "react-icons/fa6";
import './accordion.css';

import { data } from "../../constants/accordion";
import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion_h" >
      <div className="flex align-items-center justify-content-center ">
        <div className="fw-bold">
          <div className="text-center text-primary fs-4">
            Frequently Asked Questions
          </div>
          {data.map((item, index) => (
            <div className="accordion_item col-8 col-md-4" key={index}>
              <div className="d-flex justify-content-between align-items-center" onClick={() => handleToggle(index)}>
                {/* accordion icon */}
                <span className="fs-4">
                  {activeIndex === index ? <FaMinus className="fs-6" /> : <FaPlus className="fs-6" />}
                </span>
                {/* accordion title */}
                <span className="text-center accordion_heading fw-light mx-auto">
                  {item.heading}
                </span>
                <div></div>
              </div>
              <div className={`expandable-div ${activeIndex === index ? 'expanded' : ''}`}>
                {activeIndex === index && (
                  <div className="content fw-light">
                    {item.ans}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
