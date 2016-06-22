import React from 'react';
import _ from 'lodash';

const Regions = ({regions, setCurrentRegion}) => {
  return (
    <div>
      <h2>{'Regions'}</h2>
      <ul>
        {_.map(regions, function(region) {
          return (
            <li
              key={region}
              onClick={() => {return setCurrentRegion(region)}}
            >
              {region}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

Regions.propTypes = {
  regions: React.PropTypes.arrayOf(React.PropTypes.string),
  setCurrentRegion: React.PropTypes.func.isRequired
};
export default Regions;

