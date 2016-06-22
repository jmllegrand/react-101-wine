/**
 * Created by jmlegrand on 11/06/16.
 */

import React from 'react';
import _ from 'lodash';


const WineList = ({wines, selectedRegion, setCurrentWine}) => {
  const filteredWines = _.filter(wines, function(wine) {
    return wine.appelation === selectedRegion
  });

  const names= _.map(filteredWines, 'name');
  console.log('names', names);
  return (
    <div>
      <ul>
        WineList
      {_.map(names, function(name) {
        return (
          <li key={name} onClick={() => {setCurrentWine(name)}}>{name}</li>
        )
      })}
      </ul>

    </div>
  );
};

export default WineList;

