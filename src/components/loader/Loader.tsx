import "./styles.css"

export const Loader = () => {
  return (
    <div className="loader">
      <div className="panel panel-top">
        <div className="hexagon"></div>
      </div>
      <div className="panel panel-bottom-left">
        <div className="hexagon"></div>
      </div>
      <div className="panel panel-bottom-right">
        <div className="hexagon"></div>
      </div>
    </div>
  );
};
