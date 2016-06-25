import React, {PropTypes} from 'react';

const Regions = ({currentRegion, regions, onRegionChange}) => {
  return (
    <div className="1/4 grid__cell winestyle">
      <h2>{'Regions'}</h2>
      <ul>
        {regions.map((region) => (
            <li
              className={computeRegionStyle(region, currentRegion)}
              key={region}
              onClick={() => {return onRegionChange(region)}}
            >
              {region}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const computeRegionStyle = (region, currentRegion) => (
  (region === currentRegion) ? 'active' : 'notactive'
);

Regions.propTypes = {
  currentRegion: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string),
  onRegionChange: PropTypes.func.isRequired
};

export default Regions;

