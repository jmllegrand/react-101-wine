import React from 'react';
import _ from 'lodash';


const WineList = ({wines, selectedRegion, setCurrentWine}) => {
  const filteredWines = _.filter(wines, function(wine) {
    return wine.appelation === selectedRegion
  });

  const names = _.map(filteredWines, 'name');
  console.log('names', names);
  return (
    <div>
      <h2>{'Wine List'}</h2>
      <ul>
        {_.map(names, function(name) {
          return (
            <li key={name}
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

WineList.propTypes = {
  wines: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selectedRegion: React.PropTypes.string.isRequired,
  setCurrentWine: React.PropTypes.func.isRequired
};

export default WineList;

