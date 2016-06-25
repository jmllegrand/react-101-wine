import React, {PropTypes} from 'react';
import Regions from './Regions';
import WineList from './WineList';
import WineDetail from './WineDetail';
import _ from 'lodash';

class WineApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRegion: '',
      filteredWines: [],
      currentWine: null
    };
  }

  /* when a region is selected:,
  - filteredWines needs to be recalculated,
  - currentWine needs to be reset
   */
  setCurrentRegion(region) {
    this.setState({
      currentRegion: region,
      filteredWines: _.filter(this.props.wines, (wine) => (
        wine.appelation === region
      )),
      currentWine: null
    });
  }

  setCurrentWine(wineName) {
    this.setState({
      currentWine: _.find(this.props.wines, (wine) => (
      wine.name === wineName
      ))
  })
  }

  render() {
    //TODO move regions outside render() to avoid re-executing the methods each time the component renders
    const regions = _.map(_.uniqBy(this.props.wines, 'appelation'), 'appelation');
    return (
      <div className="grid">
        <Regions
          currentRegion={this.state.currentRegion}
          regions={regions}
          onRegionChange={this.setCurrentRegion.bind(this)}
        />
        <WineList
          currentWine={this.state.currentWine}
          filteredWines={this.state.filteredWines}
          onWineChange={this.setCurrentWine.bind(this)}
        />
        <WineDetail currentWine={this.state.currentWine}/>
      </div>
    );
  }
}

WineApp.propTypes = {
  wines: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WineApp;