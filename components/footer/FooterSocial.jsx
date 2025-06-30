import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const FooterSocial = () => {
  return (
    <div className="contianer container-fluid form-heading pt-4" >
        <div className="row px-5 px-md-0">
            <div className="col-1" ></div>
            <div className="col-12 col-md-1" >
            <svg version="1.0" className="logo_footer" xmlns="http://www.w3.org/2000/svg" width="1000.000000pt" height="auto" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#1968e9" stroke="none"><path d="M848 6358 c-4 -1634 -4 -1550 11 -1678 92 -758 512 -1447 1146 -1879
                353 -241 726 -392 1136 -461 294 -49 393 -51 2564 -47 l2020 3 95 21 c258 59
                420 127 626 264 132 88 328 280 421 412 406 577 381 1353 -60 1902 -245 304
                -577 508 -967 593 l-115 24 -965 9 c-1753 15 -1607 12 -1675 37 -153 57 -284
                190 -334 338 -95 285 50 571 351 692 40 16 143 17 1378 23 1316 5 1336 6 1433
                27 439 95 787 317 1031 654 64 89 215 373 204 384 -3 3 -889 8 -1969 11 -1440
                4 -1991 3 -2067 -6 -144 -16 -238 -36 -373 -81 -562 -186 -978 -656 -1096
                -1235 -28 -138 -25 -473 5 -611 143 -658 648 -1144 1332 -1280 76 -16 216 -18
                1350 -24 1188 -5 1268 -7 1320 -24 101 -33 173 -77 242 -146 301 -301 151
                -806 -268 -906 -63 -15 -235 -16 -2060 -10 -1258 4 -2032 10 -2105 17 -416 38
                -775 210 -1065 510 -250 259 -387 551 -439 932 -14 101 -16 220 -13 825 3 798
                4 794 -73 1025 -136 409 -428 751 -803 939 -70 35 -197 88 -211 88 -3 0 -6
                -604 -7 -1342z"></path></g></svg>
            </div>
            <div className="col-12 col-md-5">
                <div className="fw-bold" >Do you have questions stuck in your mind? Contact us the way you prefer</div>
                <div className="fw-light" >Our sales team is available Monday to Friday from 10:00 to 17:00 {`(+4 GMT)`}</div>
            </div>
            <div className="col-12  col-md-5">
                <div className="text-secondary my-2 " >Connect</div>
                <div className="d-flex align-items-center gap-4  mb-3" >
                    <FaWhatsapp className=" icon fs-4  " />
                    <CiMail className=" icon fs-4  " />
                    <FaFacebookF className=" icon fs-4  " />
                    <FaInstagram className=" icon fs-4  " />
                    <FaLinkedinIn className=" icon fs-4  " />
                    <FaYoutube className=" icon fs-4  " />
                    <FaTiktok className=" icon fs-4  " />
                </div>
            </div>
        </div>
            <div className="row bg-primary py-2 p-2">
                <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-end align-items-center fw-bold text-white pr-5 border-right border-white" >
                    United Arab Emirates & Other Countries
                    <span className="fw-light mx-2" >+971 50 2008 155</span>
                </div>
                <div className="fw-bold  col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-start align-items-center text-white border-at-right " >
                    Qatar
                    <span className="fw-light mx-2" >+974 5555 8378</span>
                </div>
            </div>
    </div>
  )
}

export default FooterSocial