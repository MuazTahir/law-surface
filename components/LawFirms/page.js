import Image from "next/image";
import "./LawFirms.css";

const LawFirms = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-2 fw-bold">35+ Law Firms & Companies that Trust Us</h1>
      <p className="mb-1">
        These are some of the many law firms that trust us, and we continuously
        work on improving our
      </p>
      <p className="mb-5">platform to keep that trust growing.</p>
      <div id="logoRow" className="row my-4 d-flex align-items-center">
        {/* First Row */}
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/osuslaw.png"
            alt="OSUS Law Firm"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/muayadandassociates.png"
            alt="Muayad & Associates"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/aletefaq.png"
            alt="Aletefaq Law Firm"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/hudaalhamdi-150x124.png"
            alt="Huda Al Hamadi"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/mayed-almarashda-logo.png"
            alt="Mayed Almarashda"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/AlMansoori-Partners.png"
            alt="Al Mansoori & Partners"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div id="logoRow" className="row d-flex align-items-center">
        {/* Second Row */}
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/dubai-insurance-logo-300x155.jpg"
            alt="Dubai Insurance"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/amiraalbastaki-1-150x124.png"
            alt="Dr. Amira Albastaki"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/Final-Logo-300x248.png"
            alt="Ahmed Al Dhaen"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/Baitulhikma-Logo_V3_aa-2-300x140.png"
            alt="Baitul Hikma"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/Baderbalhosh-1-300x118.png"
            alt="Bader Balhosh"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4">
          <Image
            src="/salina-logo-1.jpg"
            alt="Salina Group"
            className="img-fluid"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default LawFirms;
