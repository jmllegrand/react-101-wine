import React, {PropTypes} from 'react';


const WineDetail = ({currentWine}) => {
  return (currentWine !== null) ? (
    <div className="5/12 grid__cell winestyle" >
      <h2>{(currentWine.name) }</h2>
      <ul>
        <li className='wineinfo'>
          <span className='winelabel'>{'rating: '}</span>
          <span>{currentWine.rating}</span>
        </li>
        <li className='wineinfo'>
          <span className='winelabel'>{'superficie: '}</span>
          <span>{currentWine.superficie}</span>
        </li>
        <li className='wineinfo'>
          <span className='winelabel'>{'description: '}</span>
          <span>{currentWine.description}</span>
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
  currentWine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    superficie: PropTypes.number.isRequired,
    description: PropTypes.string
  })
};

export default WineDetail;
