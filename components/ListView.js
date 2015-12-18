import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

export default React.createClass({

  getInitialState() {
    return {
      viewableItems: this._setViewableItems(),
    }
  },

  _setViewableItems(index=0) {
      /*
      - need to get window height (or height of container)
      - determine the number of items that can fit in this height
      - get an array based on this size and feed it to the list view
      - need to keep track of current position in array and the comparison to total array
      - cool !
      */

      let items = this.props.items;

      if (index > 0) {
        items = items.slice(this.props.start, this.props.end);
      }
      else {
        items = items.slice(this.props.end, this.props.index)
      }

      return items;
    },

    _updateViewableItems() {
      let start = this.props.initial;
      let end = this.props.end;

      console.log('scrolling')
      let viewableItems = this._setViewableItems(this.props.index);


    },t

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('scroll', this._updateViewableItems);
  },

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('scroll', this._updateViewableItems);
  },

  styles: {
    height: '400px',
    overflowY: 'scroll'
  },

  render() {
    return (
      <div style={this.styles}>
        {this.state.viewableItems.map( (item, key) => {
          return (<ListItem item={item} key={item + '-' + key}/>)
        })}
      </div>
    )
  }
})
