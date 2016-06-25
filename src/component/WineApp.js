import React from 'react';
import Regions from './Regions';
import WineList from './WineList';
import Wine from './WineDetail';
import _ from 'lodash';

class WineApp extends React.Component {

  constructor(props) {
    console.log('JM - WineApp.constructor()');
    super(props);
    this.state = {
      selectedRegion: 'Saint-Emilion',
      filteredWines: _.filter(this.props.wines, function(wine) {
        return wine.appelation === 'Saint-Emilion'
      }),
      selectedWine: null
    };
  }

  setCurrentRegion(region) {
    console.log('JM - WineApp.setCurrentRegion()');
    this.setState({
      selectedRegion: region
    });

    this.setState({
      filteredWines: _.filter(this.props.wines, function(wine) {
        return wine.appelation === region
      })
    });

    this.setState({
      selectedWine: null
    })
  }

  setCurrentWine(wineName) {
    console.log('JM - WineApp.setCurrentWine()');
    this.setState({
      selectedWine: _.find(this.props.wines, function(wine) {
        return wine.name === wineName
      })
    })
  }

  render() {
    console.log('JM - WineApp.render()');
    const regions = _.map(_.uniqBy(this.props.wines, 'appelation'), 'appelation');
    return (
      <div className="grid">
        <Regions
          currentRegion={this.state.selectedRegion}
          regions={regions}
          setCurrentRegion={this.setCurrentRegion.bind(this)}
        />
        <WineList
          currentWine={this.state.selectedWine}
          filteredWines={this.state.filteredWines}
          setCurrentWine={this.setCurrentWine.bind(this)}
        />
        <Wine selectedWine={this.state.selectedWine}/>
      </div>
    );
  }
}

WineApp.propTypes = {
  wines: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default WineApp;