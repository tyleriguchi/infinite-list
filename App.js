import React from 'react';
import ListView from './components/ListView';

export default React.createClass({
  getInitialState() {
    return {
      items: this._generateInitialArray(50),
      initial: 0,
      end: 20,
      step: 20,
      containerHeight: 50
    }
  },

  _viewHeight() {
    return window.innerHeight;
  },

  _generateInitialArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
      array.push(i);
    }
    return array;
  },

  render: function() {
    return (
      <ListView
        items={this.state.items}
        inital={this.state.initial}
        end={this.state.end}
        step={this.state.step}
        containerHeight={this.state.containerHeight}
      />
    );
  }
})
