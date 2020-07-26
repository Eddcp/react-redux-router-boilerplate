import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a list of items
 *
 * @param {Object} props - List of items
 */
function Items(props) {
  const { items = [] } = props;

  if (!items.length) {
    return <span>No items in list</span>;
  }

  if (items.length === 1) {
    return <span>{items[0]}</span>;
  }

  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: [],
};

export default Items;