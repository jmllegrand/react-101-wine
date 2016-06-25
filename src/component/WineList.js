import React, {PropTypes} from 'react';

const WineList = ({currentWine, filteredWines, onWineChange}) => {
  return (filteredWines.length > 0 ) ? (
    <div className="1/3 grid__cell winestyle">
      <h2>{'Wine List'}</h2>
      <ul>
        {filteredWines.map((wine) => (
          <li
            className={computeWineStyle(wine.name, currentWine)}
            key={wine.key}
            onClick={() => {onWineChange(wine.name)}}
          >
            {wine.name}
          </li>
        ))
        }
      </ul>

    </div>
  ) :
    (
      <div className="1/3 grid__cell">
        <h2>{''}</h2>
      </div>
    );
};

const computeWineStyle = (name, currentWine) =>  (
  (currentWine !== null) && (name === currentWine.name) ? 'active' : 'notactive'
);

WineList.propTypes = {
  currentWine: PropTypes.object,
  filteredWines: PropTypes.arrayOf(PropTypes.object).isRequired,
  onWineChange: PropTypes.func.isRequired
};

export default WineList;

