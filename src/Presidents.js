import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";``
import PresidentDetail from "./PresidentDetail";
import useAxiosFetch from "./useAxiosFetch";
import axios from 'axios';

const Speakers = ({}) => {
  const {data, isLoading, hasErrored, errorMessage, updateDataRecord
    } = useAxiosFetch("http://localhost:4000/presidents", []);

  const heartFavoriteHandler = (e, speakerRec) => {
    e.preventDefault();
    // const toggledRec = { ...speakerRec, favorite: !speakerRec.favorite };
    // axios.put(`http://localhost:4000/presidents/${speakerRec.id}`, toggledRec)
    //   .then(function(response) {
    //     updateDataRecord(toggledRec);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  debugger;
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
              ({ id, president, homeState,favorite }) => {
                return (
                  <PresidentDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    president={president}
                    homeState={homeState}
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

export default Speakers;
