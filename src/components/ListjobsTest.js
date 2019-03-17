import React, { Component } from 'react';

class ListjobsTest extends Component {
  render() {
    console.log(this);
    const {items, itemElement: Item} = this.props;
    return (
      <div>Reusable list
        {
          items.map((item,idx) =>
            <Item
              {...item}
              key={idx}
              seckey={idx}
            />
          )}
      </div>
    );
  }
}


export default ListjobsTest;

