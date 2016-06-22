import React from 'react';

const Wine = ({selectedWine}) => {
  return (selectedWine !== null) ? (
    <div>
      <h2>{'Wine Description'}</h2>
      <ul>
        <li>
          <span>{'name: '}</span>
          <span>{selectedWine.name}</span>
        </li>
        <li>
          <span>{'rating: '}</span>
          <span>{selectedWine.rating}</span>
        </li>
        <li>
          <span>{'superficie: '}</span>
          <span>{selectedWine.superficie}</span>
        </li>
        <li>
          <span>{'description: '}</span>
          <span>{selectedWine.description}</span>
        </li>

      </ul>
    </div>
  ) :
    (
      <div>
        <h2>{'No Wine'}</h2>
      </div>
    );
};

Wine.propTypes = {
  selectedWine: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    superficie: React.PropTypes.number.isRequired,
    description: React.PropTypes.string
  })
};

export default Wine;
