import React from 'react';
import _ from 'lodash';


const WineList = ({currentWine, filteredWines, setCurrentWine, }) => {
  
  return (
    <div className="1/3 grid__cell">
      <h2>{'Wine List'}</h2>
      <ul>
        {_.map(filteredWines, function(wine) {
          return (
            <li
              className={computeStyle(wine.name, currentWine)}
              key={wine.key}
              onClick={() => {setCurrentWine(wine.name)}}
            >
              {wine.name}
            </li>
          )
        })}
      </ul>

    </div>
  );
};


function computeStyle(name, selected) {
  return (selected !== null) && (name === selected.name) ? 'active' : 'notactive';
}


WineList.propTypes = {
  currentWine: React.PropTypes.object,
  filteredWines: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  setCurrentWine: React.PropTypes.func.isRequired
};

export default WineList;

