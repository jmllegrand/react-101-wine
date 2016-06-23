import React from 'react';
import _ from 'lodash';

const Regions = ({regions, setCurrentRegion, currentRegion}) => {
  return (
    <div className="1/4 grid__cell">
      <h2>{'Regions'}</h2>
      <ul>
        {_.map(regions, function(region) {
          return (
            <li
              className={computeRegionStyle(region, currentRegion)}
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


function computeRegionStyle (region, currentRegion) {
  return (region === currentRegion) ? 'active' : 'notactive';
};


Regions.propTypes = {
  regions: React.PropTypes.arrayOf(React.PropTypes.string),
  setCurrentRegion: React.PropTypes.func.isRequired
};
export default Regions;

