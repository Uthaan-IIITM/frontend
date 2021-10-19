import React from "react";
import { Link } from "react-router-dom";

import "../../styles/error/error_page.css";

import { errorPageContent } from "../../utils/GeneralConstants";

import errorPagePrimaryGraphic from "../../assets/error/graphic.png";
import { ReactComponent as UthaanLogo } from "../../assets/uthaan_logo/uthaan_logo.svg";

function ErrorPage() {
  return (
    <div className="error-page-primary-wrapper">
      <Link to="/" className="error-page-uthaan-logo-wrapper">
        <UthaanLogo className="error-page-uthaan-logo" />
      </Link>
      <dv className="error-page-content-wrapper">
        <div className="error-page-content-top-wrapper">
          <p className="error-page-content-top-left-text error-page-text-basic">
            {errorPageContent.topLeft}
          </p>
          <p className="error-page-content-top-right-text">
            {errorPageContent.errorCode}
          </p>
        </div>
        <p className="error-page-content-bottom-text error-page-text-basic">
          {errorPageContent.bottomContent}
        </p>
      </dv>
      <div className="error-page-graphic-wrapper">
        <img
          src={errorPagePrimaryGraphic}
          alt="Error Page Primary Graphic"
          className="error-page-primary-grpahic"
        />
      </div>
      <div className="error-page-home-redirect-link-wrapper">
        <h4 className="error-page-home-redirect-link-lable-text error-page-home-redirect-link-text">
          Return to
        </h4>
        <Link to="/" className="error-page-home-redirect-link">
          <h3 className="error-page-home-redirect-link-highlighted-text error-page-home-redirect-link-text">
            Home page
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
