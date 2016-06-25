import React from 'react';


const WineStyle = {
  padding: 8,
  boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'
};

const WineDetail = ({selectedWine}) => {
  return (selectedWine !== null) ? (
    <div className="5/12 grid__cell" style={WineStyle} >
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
      <div className="5/12 grid__cell">
        <h2>{''}</h2>
      </div>
    );
};

WineDetail.propTypes = {
  selectedWine: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    superficie: React.PropTypes.number.isRequired,
    description: React.PropTypes.string
  })
};

export default WineDetail;
