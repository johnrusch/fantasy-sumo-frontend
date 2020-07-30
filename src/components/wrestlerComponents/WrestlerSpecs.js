import React from "react";

import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const WrestlerSpecs = (props) => {
  const { id, name, age, img, currentRank } = props.wrestlerData;

  return (
    <div>
      {props.wrestlerData ? (
        <Card className="container-fluid">
          <CardHeader
            avatar={<Avatar aria-label="wrestler" alt={name} src={img} />}
            title={name}
            subheader={currentRank}
          />
          <CardContent>
            <div className="col">
              <div className="row">
                <p>Height: {props.wrestlerData.height} cm</p>
              </div>
              <div className="row">
                <p>Weight: {props.wrestlerData.weight} kg</p>
              </div>
            </div>
          </CardContent>
          <CardContent>
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
          </CardContent>
        </Card>
      ) : (
        props.history.push("/team/wrestlers")
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wrestlerData: state.wrestlers.selectedWrestler,
  };
};

export default connect(mapStateToProps)(WrestlerSpecs);
