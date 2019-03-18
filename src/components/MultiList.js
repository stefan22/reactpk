import React, {Component} from 'react';

class MultiList extends Component {
  render() {
    let {items, itemElement: Item} = this.props;
    return(
      <div className='multilist-desc'>
        {
          items.map((item,idx) =>
            <Item
              {...item}
              key={idx}
            />
          )
        }
      </div>
    );
  }
}


export default MultiList;
