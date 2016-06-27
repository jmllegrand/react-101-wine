/**
 * Created by jmlegrand on 01/06/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import WineApp from './component/WineApp';
import datas from './datas';


ReactDOM.render(
  <WineApp wines={datas}/>,
  document.getElementById('main')
);


