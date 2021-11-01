import React from "react";

import "../../styles/admin/admin_list_comp.css";

import arrowIcon from "../../assets/admin/arrow.svg";

function AdminPageListComp({ listData, onClick, isForTitles }) {
  const TitleComp = ({ name, index }) => (
    <div
      className="admin-list-title-item-wrapper"
      onClick={(e) => {
        e.stopPropagation();
        onClick(name, index);
      }}
    >
      <h4> {name}</h4>
      <img src={arrowIcon} alt="arrow" />
    </div>
  );
  const ListWiseDataItemComp = ({ data, index }) => (
    <div
      className="admin-list-title-item-wrapper"
      onClick={(e) => {
        e.stopPropagation();
        onClick(data, index);
      }}
    >
      {Object.values(data)}
      {Object.values(data)?.map((item, i) => (
        <div key={i}>
          <h4> {item}</h4>
          <div> {data[item]}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="admin-list-primary-wrapper">
      {isForTitles
        ? listData.map((item, index) => (
            <TitleComp key={index} name={item} index={index} />
          ))
        : null}
    </div>
  );
}

export default AdminPageListComp;
