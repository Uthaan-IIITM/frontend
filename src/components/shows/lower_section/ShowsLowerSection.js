import React, { useState, useEffect } from "react";

import "../../../styles/shows/lower_section/shows_lower_section.css";

import { useStateValue } from "./../../../StateProvider";

import { showData, shows } from "./../../../services/shows.service";

import ShowsCard from "./ShowsCard";
import roughPhoto from "../../../assets/_rough/shows_thumbnail.svg";
import ShowsLowerLeftSubSection from "./left_sub_sec/ShowsLowerLeftSubSection";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import parseShowData from "./helpers/show_data_obj_constructor";

function ShowsLowerSection() {
  const [{ active_show }, dispatch] = useStateValue();

  const [showsData, setShowsData] = useState([]);
  const [activeShowData, setActiveShowData] = useState([]);

  useEffect(() => {
    fetchShowsData();
  }, []);

  useEffect(() => {
    fetchActiveShowData(active_show?.playlistIDs);
  }, [active_show]);

  useEffect(() => {
    dispatch({
      type: "UPDATE_ACTIVE_SHOW",
      show: showsData[0],
    });
  }, [showsData]);

  async function fetchShowsData() {
    try {
      const loadedData = await shows();
      setShowsData(loadedData.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchActiveShowData(playlistID) {
    let teamArr = [];
    try {
      for (let index = 0; index < playlistID.length; index++) {
        const loadedData = await showData(
          playlistID[playlistID.length - index - 1]
        );
        const parsedData = parseShowData(loadedData).reverse();
        teamArr = teamArr.concat(parsedData);
      }
    } catch (error) {
      console.error(error);
    }
    console.log(teamArr);
    setActiveShowData(teamArr);
  }

  return (
    <>
      <div className="shows-lower-section-wrapper">
        <ShowsLowerLeftSubSection showsTitlesList={showsData} />
        <div className="shows-lower-section-cards-wrapper">
          {activeShowData.map((show, index) => {
            return (
              <ShowsCard key={index} show={show} roughPhoto={roughPhoto} />
            );
          })}
        </div>
      </div>
      <SecondaryFooter />
    </>
  );
}

export default ShowsLowerSection;
