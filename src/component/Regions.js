/**
 * Created by jmlegrand on 11/06/16.
 */


import React from 'react';
import _ from 'lodash';

const Regions = ({regions, setCurrentRegion}) => {
  console.log(regions);
  return (
    <div>
      <h2>Regions</h2>
      <ul>
        {_.map(regions, function(region) {
          return (
            <li key={region} onClick={() => {return setCurrentRegion(region)}}>{region}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Regions;

