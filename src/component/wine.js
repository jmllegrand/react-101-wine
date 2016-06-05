
import React from 'react';

const Wine = ({name}) => (
  <div>
    {name}
  </div>
);

Wine.propTypes= {
  name: React.PropTypes.string.isRequired
};

export default Wine;
