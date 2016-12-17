import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class RandomResult extends Component{
  getImageUrl(color) {
    return `images/polish_${color.toLowerCase().split(" ").join("_")}.gif`
  }
  render() {
    if (!this.props.polish) {
      return(
        <div>Please select a criteria!</div>
      )
    }

    const name = this.props.polish.name;
    const brand = this.props.polish.brand;
    const type = this.props.polish.type;
    const color = this.props.polish.color;
    const image = this.getImageUrl(color)

    const transitionOptions = {
      transitionName: "pop-out",
      transitionEnterTimeout: 1000,
      transitionLeaveTimeout: 500,

    };

    return (
      <ReactCSSTransitionGroup {...transitionOptions}>
        <div className="row" key={name}>
          <div className="col-sm-3" >
              <img src={image}  className="img-fluid polish" alt="Polish Image"/>
          </div>
        <div className="col-sm-9">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {name}
                </td>
                <td>
                  {brand}
                </td>
                <td>
                  {type}
                </td>
                <td>
                  {color}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state){
  return { polish: state.polishes.polish };
}

export default connect(mapStateToProps, actions)(RandomResult);
