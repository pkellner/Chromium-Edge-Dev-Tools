const PresidentDetail = ({
  id,
  president,
  favorite,
  homeState,
  onHeartFavoriteHandler
}) => {
  return (
    <div className="card col-4 cardmin">
      <span>
            {president}<br/> Home State: {homeState}
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
                id
              });
            }}
          />

        </h4>
      </div>
    </div>
  );
};

export default PresidentDetail;
