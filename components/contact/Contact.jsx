import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='mt-5 mx-auto' >
        {/* direct contact */}
        <div className='text-center mx-auto' >
            <div className='text-primary pt-5 fs-2 fw-bold' >
                Direct Contact
            </div>
            <div className='mb-2' >Whether you are curious about features, a free trial, or have any questions, Contact us directly, and we are ready to answer any questions and inquiries.</div>
            <div className='fw-bold' >Our Sales team is available</div>
            <div>Monday to Friday from 10:00 to 17:00 {`(+4 GMT)`}</div>
        </div>

        {/* UAE contact */}
        <div className='text-center mx-auto mt-4' >
            <div className='text-primary fs-3 fw-bold' >
                United Arab Emirates & Other Countries
            </div>
            <div className='fw-bold' >LS Cloud Service.</div>
            <div className="d-flex justify-content-center align-items-center" >
                <LuPhone className="mx-2" />
                +971 50 2008 155
            </div>
            <div className="d-flex align-items-center justify-content-center" >
                <FaWhatsapp className="mx-2" />
                +971 50 2008 155
            </div>
            <div className="d-flex align-items-center justify-content-center" >
                <CiMail className="mx-2" />
                sales@lawsurface.com
            </div>
        </div>
        {/* Qatar */}
        <div className='text-center mx-auto mt-4' >
            <div className='text-primary fs-3 fw-bold' >
                Qatar
            </div>
            <div className='fw-bold' >Rowwad Business Solutions L.L.C.</div>
            <div className="d-flex align-items-center justify-content-center" >
                <LuPhone className="mx-2" />
                +974 5555 8378
            </div>
            <div className="d-flex align-items-center justify-content-center" >
                <FaWhatsapp className="mx-2" />
                +974 5555 8378
            </div>
            <div className="d-flex align-items-center justify-content-center" >
                <CiMail className="mx-2" />
                info@rowwad.qa
            </div>
        </div>

        {/* Follow us */}
        <div className="mt-5 mx-auto" >
            <div className="fs-2 pt-5 fw-bold text-primary text-center" >Follow Us</div>
            <div className="mx-auto d-flex justify-content-center mt-2 flex-wrap gap-2" >
                <div className="bg-success px-3 fs-4 rounded-1"  ><FaWhatsapp className="text-white" /></div>
                <div className="bg-primary px-3 fs-4 rounded-1"  ><FaFacebookF className="text-white" /></div>
                <div className="bg-danger px-3 fs-4 rounded-1"  ><FaInstagram className="text-white" /></div>
                <div className="bg-dark px-3 fs-4 rounded-1"  ><FaTiktok className="text-white" /></div>
                <div className="bg-primary px-3 fs-4 rounded-1"  ><FaLinkedinIn className="text-white" /></div>
                <div className="bg-danger px-3 fs-4 rounded-1"  ><FaYoutube className="text-white" /></div>
            </div>
        </div>
    </div>
  )
}

export default Contact