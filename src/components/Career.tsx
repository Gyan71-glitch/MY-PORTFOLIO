import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Work <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Development Intern</h4>
                <h5>The Dash Media</h5>
              </div>
              <h3>APR 2026 - PRESENT</h3>
            </div>
            <p>
              Designing and developing web & mobile application features for
              live client projects. Contributing to frontend/backend
              components; participating in sprint planning, code reviews, and
              QA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Navodita Infotech</h5>
              </div>
              <h3>MAR 2026 - PRESENT</h3>
            </div>
            <p>
              Building & training ML models using Python and scikit-learn.
              Performing data preprocessing, feature engineering, and EDA using
              Pandas and NumPy. Improving performance through hyperparameter
              tuning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development Intern</h4>
                <h5>Unessa Foundation</h5>
              </div>
              <h3>FEB 2026 - MAR 2026</h3>
            </div>
            <p>
              Built responsive UI with HTML, CSS, and React; integrated REST
              APIs and optimised performance. Debugged cross-browser issues,
              improving application reliability and UX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
