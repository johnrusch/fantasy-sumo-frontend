import React from "react";

import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";

const WrestlerSpecs = (props) => {
  const { id, name, age, img, currentRank } = props.wrestlerData;

  return (
    <div className="container-fluid">
      <Jumbotron>
        <div className="row text-center">
          <h3>
            {name}
          </h3>
        </div>
        <div className="row">
          <div className="col">
            <img src={img} alt="Sumo Wrestler" />
          </div>
          <div className="col">
            <div className="row">
              <p>{currentRank}</p>
            </div>
            <div className="row">
              <p>Height: {props.wrestlerData.height} cm</p>
            </div>
            <div className="row">
              <p>Weight: {props.wrestlerData.weight} kg</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Age: {props.wrestlerData.age}</p>
            </div>
            <div className="row">
              <p>Stable: {props.wrestlerData.heya}</p>
            </div>
            <div className="row">
              <p>Yusho: {props.wrestlerData.yusho}</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wrestlerData: state.wrestlers.selectedWrestler,
  };
};

export default connect(mapStateToProps)(WrestlerSpecs);
