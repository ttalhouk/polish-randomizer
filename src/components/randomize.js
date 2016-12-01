import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Randomize extends Component{

  componentDidMount(){
    this.props.fetchPolishColors();
    this.props.fetchPolishTypes();
  }

  handleClick(term, value){
    switch (term) {
      case 'random':
        console.log('fetching Random Polish');
        this.props.fetchRandomPolish();
        break;
      case 'color':
        this.props.fetchSpecifiedColor(value);
        break;
      case 'type':
        this.props.fetchSpecifiedType(value);
        break;
    }
  }
  renderColorSelection(){
    console.log('props',this.props);
    console.log(this.props.colors);
    const colors = this.props.colors;
    return (
      colors.map((color) => {
        return (
          <button key={color} className='selector btn btn-default' onClick={() => {this.handleClick('color', color)}}>{color}</button>
        )
      })
    )
  }
  renderTypeSelection(type){
    console.log(this.props.types);
    const types = this.props.types
    return (
      types.map((type) => {
        return(
          <button key={type} className='selector btn btn-default' onClick={() => {this.handleClick('type', type)}}>{type}</button>
        )
      })
    )
  }
  render(){

    return(
      <div className='row'>
        <div className= 'col-sm-12'>
          <button className='btn btn-primary' onClick={() => {this.handleClick('random')}}>Random Selection</button>
        </div>
        {this.props.colors.length === 0 ? <div>Loading</div> : this.renderColorSelection()}
        {this.props.types.length === 0 ? <div>Loading</div> : this.renderTypeSelection()}

      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    colors: state.polishes.colors,
    types: state.polishes.types
  };
}

export default connect(mapStateToProps, actions)(Randomize);
