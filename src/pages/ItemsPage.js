import React, { Component } from 'react';
import Items from '../components/presentational/Items/Items';


class ItemsPage extends Component {
  
  render() {
    const items = [
        'Luke Skywalker',
        'Darth Vader',
        'Darth Maul'
      ];
    return (
      <div>
        ItemsPage
        <Items items={items} />
      </div>
    );
  } 
}

export default ItemsPage;
