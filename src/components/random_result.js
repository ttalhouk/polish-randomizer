import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class RandomResult extends Component{

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


    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>type</th>
            <th>color</th>
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
    )
  }
}

function mapStateToProps(state){
  return { polish: state.polishes.polish };
}

export default connect(mapStateToProps, actions)(RandomResult);
