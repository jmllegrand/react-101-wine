/**
 * Created by jmlegrand on 11/06/16.
 */

import React from 'react';
import Regions from './Regions';
import WineList from './WineList';
import Wine from './Wine';


class WineApp extends React.Component {

  constructor() {
    console.log('JM - WineApp.constructor()');
    super();
    this.state = {
      selectedRegion: 'Saint-Emilion',
      filteredWines: [],
      selectedWine: null
    };
  }

  setCurrentRegion(region) {
    console.log('JM - WineApp.setCurrentRegion()');
    this.state.selectedRegion = region;
    this.setState({
      selectedRegion: this.state.selectedRegion
    })
  }

  setCurrentWine(wineName) {
    console.log('JM - WineApp.setCurrentWine()');
    this.state.selectedWine = _.find(this.props.wines, function(wine) {
      return wine.name === wineName
    });
    this.setState({
      selectedWine: this.state.selectedWine
    })
  }

  render() {
    console.log('JM - WineApp.render()');
    const regions = _.map(_.uniqBy(this.props.wines, 'appelation'), 'appelation');
    return (
      <div>
        <Regions
          regions={regions}
          setCurrentRegion={this.setCurrentRegion.bind(this)}/>
        <WineList
          wines={this.props.wines}
          selectedRegion={this.state.selectedRegion}
          setCurrentWine={this.setCurrentWine.bind(this)}
        />
        <Wine selectedWine={this.state.selectedWine}/>
      </div>
    );
  }
}


export default WineApp;