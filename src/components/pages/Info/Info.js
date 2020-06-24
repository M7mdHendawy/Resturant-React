import React, { Component } from "react";
import { InfoConsumer } from "../../Context";
import { Link } from "react-router-dom";
import './Info.scss'


class Info extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubtitle,
      headerText,
      img
    } = this.props.item;

    return (
      <InfoConsumer>
        {value => (
          <div className="col-md-4">
            <div className="card text-center">
              <div className="overflow">
                <img src={img} alt="headerTitle" className="card-img-top" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">{headerTitle}</h4>
                <h5 className="card-title">{headerSubtitle}</h5>
                <p className="card-text text-secondary">{headerText}</p>
                <Link
                onClick={() => value.handleDetail (id)}
                  to="/details"
                  className="btn text-uppercase"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default Info;
