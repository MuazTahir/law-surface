import React from 'react';

const LawSurfaceFeatures = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Side with Image */}
        <div className="col-lg-6">
          <img src="lawsurface_1_en.png" alt="Law Surface Features" className="img-fluid" />
        </div>

        {/* Right Side with Text and Features */}
        <div className="col-lg-6">
          <h5 className="text-primary">Law Practice Management Platform</h5>
          <h2 className="fw-bold text-primary">Integrated Law Firms Management platform to manage, simplify and organize your office work</h2>
          <p className="mt-3">
            Welcome to the world of streamlined and enhanced professionalism that allows you to get more work done while reducing your attorneys’ time on paperwork and mailing. It is an unparalleled platform you can rely on to complete all lawyers’ tasks with accuracy, professionalism, and organization.
          </p>
          
          {/* Stats Section */}
          <div className="row mt-4">
            <div className="col-6">
              <p className="fw-bold">Increases Productivity</p>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-warning" style={{ width: '60%' }}></div>
              </div>
              <p className="small text-end mt-2">60%</p>
            </div>
            <div className="col-6">
              <p className="fw-bold">Reduces Lawyers Efforts</p>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-danger" style={{ width: '60%' }}></div>
              </div>
              <p className="small text-end mt-2">60%</p>
            </div>
            <div className="col-6">
              <p className="fw-bold">Reduces Human Errors</p>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
              </div>
              <p className="small text-end mt-2">90%</p>
            </div>
            <div className="col-6">
              <p className="fw-bold">Increases Work Professionalism</p>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-primary" style={{ width: '100%' }}></div>
              </div>
              <p className="small text-end mt-2">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LawSurfaceFeatures;
