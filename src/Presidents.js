import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
``;
import PresidentDetail from "./PresidentDetail";
import useAxiosFetch from "./useAxiosFetch";
import axios from "axios";

const Presidents = ({}) => {
  const {
    data,
    isLoading,
    hasErrored,
    errorMessage,
    updateDataRecord
  } = useAxiosFetch("http://localhost:4000/presidents", []);

  const heartFavoriteHandler = (e, presidentRec) => {
    e.preventDefault();
    const toggledRec = { ...presidentRec, favorite: !presidentRec.favorite };
    axios
      .put(`http://localhost:4000/presidents/${presidentRec.id}`, toggledRec)
      .then(function(response) {
        updateDataRecord(toggledRec);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const presidentsList = isLoading ? [] : data;

  if (hasErrored)
    return (
      <div>
        {errorMessage}&nbsp;"Make sure you have launched "npm run json-server"
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {presidentsList.map(
              ({
                id,
                president,
                wikipediaEntry,
                tookOffice,
                leftOffice,
                party,
                homeState,
                favorite
              }) => {
                return (
                  <PresidentDetail
                    key={id}
                    id={id}
                    president={president}
                    wikipediaEntry={wikipediaEntry}
                    tookOffice={tookOffice}
                    leftOffice={leftOffice}
                    party={party}
                    homeState={homeState}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presidents;
