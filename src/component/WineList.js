import React from 'react';
import _ from 'lodash';


const WineList = ({wines, selectedRegion, setCurrentWine, currentWine}) => {
  const filteredWines = _.filter(wines, function(wine) {
    return wine.appelation === selectedRegion
  });

  const names = _.map(filteredWines, 'name');
  console.log('names', names);
  return (
    <div className="1/3 grid__cell">
      <h2>{'Wine List'}</h2>
      <ul>
        {_.map(names, function(name) {
          return (
            <li
              className={computeStyle(name, currentWine)}
              key={name}
              onClick={() => {setCurrentWine(name)}}
            >
              {name}
            </li>
          )
        })}
      </ul>

    </div>
  );
};


function computeStyle(name, selected) {
  return (selected !== null) && (name === selected.name) ? 'active' : 'notactive';
};


WineList.propTypes = {
  wines: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selectedRegion: React.PropTypes.string.isRequired,
  setCurrentWine: React.PropTypes.func.isRequired
};

export default WineList;

