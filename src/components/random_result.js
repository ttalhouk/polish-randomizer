import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


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

    return (
      <div className="row">
        <div className="col-sm-3">
          <img src={image} className="img-thumbnail polish" alt="Polish Image"/>
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
    )
  }
}

function mapStateToProps(state){
  return { polish: state.polishes.polish };
}

export default connect(mapStateToProps, actions)(RandomResult);
