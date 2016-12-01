import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class RandomResult extends Component{
  componentWillMount() {
    this.props.fetchPolish();
  }

  renderPolish(element, index) {
    const name = element.name;
    const brand = element.brand;
    const type = element.type;
    const color = element.color;
    return(
      <tr key={ index }>
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
    )
  }
  render() {
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
          { this.props.polishes.map(this.renderPolish)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return { polishes: state.polishes };
}

export default connect(mapStateToProps, actions)(RandomResult);
