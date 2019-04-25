const PresidentDetail = ({
  id,
  president,
  wikipediaEntry,
  tookOffice,
  leftOffice,
  party,
  homeState,
  favorite,
  onHeartFavoriteHandler
}) => {
  return (
    <div className="card col-4 cardmin">
      <span>
        {president}
        <br /> Home State: {homeState}
      </span>
      <img
        className="card-img-top"
        src={`/static/presidents/${id}.jpg`}
        alt={president}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-id={id}
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={e => {
              onHeartFavoriteHandler(e, {
                id,
                president,
                wikipediaEntry,
                tookOffice,
                leftOffice,
                party,
                homeState,
                favorite
              });
            }}
          />
        </h4>
      </div>
    </div>
  );
};

export default PresidentDetail;
