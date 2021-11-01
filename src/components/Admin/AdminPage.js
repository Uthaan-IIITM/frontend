import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/admin/admin.css";

import uthaanLogo from "../../assets/uthaan_logo/uthaan_logo.svg";

import { useStateValue } from "./../../StateProvider";

import PopUp from "./../_general/popup/PopUp";
import AdminAuthPopUp from "./AdminAuthPopUp";
import AdminPageListComp from "./AdminPageListComp";
import { primaryDataList } from "../../utils/AdminPageUtils";

function AdminPage() {
  const [{ admin_token }, dispatch] = useStateValue();

  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(
    admin_token == null
  );

  const [currentActiveDataIndex, setCurrentActiveData] = useState(0);
  const [secondaryDataList, setSecondaryDataList] = useState([]);
  const [thirdDataList, setThirdDataList] = useState([]);
  const [fourthDataList, setFourthDataList] = useState([]);

  useEffect(() => {
    if (currentActiveDataIndex != null) {
      // fetchAndSetCurrentActiveData(
      //   currentActiveDataIndex,
      //   setSecondaryDataList,
      //   setThirdDataList,
      //   setFourthDataList
      // );
    }
  }, [currentActiveDataIndex]);

  function handleAuthFormSubmit(elements) {
    console.log(elements.username.value, elements.password.value);
    dispatch({
      type: "UPDATE_ADMIN_TOKEN",
      token: "IDK",
    });
    setIsSignInPopupOpen(false);
  }

  return (
    <div className="admin-page-primary-wrapper">
      <div className="admin-page-header">
        <Link to="/">
          <img
            src={uthaanLogo}
            alt="Uthaan Logo"
            className="uthaan-logo-admin-page"
          />
        </Link>
      </div>
      <div className="admin-page-body">
        <AdminPageListComp
          listData={primaryDataList}
          onClick={(name, index) => {
            console.log(name, index);
          }}
          isForTitles={true}
        />
        <AdminPageListComp
          listData={primaryDataList}
          onClick={(name, index) => {
            console.log(name, index);
          }}
          isForTitles={true}
        />
        <AdminPageListComp
          listData={primaryDataList}
          onClick={(name, index) => {
            console.log(name, index);
          }}
          isForTitles={true}
        />
        {/* <AdminPageListComp
          listData={primaryDataList}
          onClick={(name, index) => {
            console.log(name, index);
          }}
          isForTitles={true}
        /> */}
      </div>

      <PopUp
        isOpen={isSignInPopupOpen}
        isClosable={false}
        ContentComp={
          <AdminAuthPopUp hadleAdminFormSubmit={handleAuthFormSubmit} />
        }
      />
    </div>
  );
}

export default AdminPage;
