/**
 * Created by jmlegrand on 05/06/16.
 */

import {expect} from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Wine from './wine';

import {bootstrapEnv} from '../utils/bootstrap';

describe('Wine', () => {

  before(() => {
    bootstrapEnv();
  });

  it('should display the correct name of the wine', () => {
    const wine = ReactTestUtils.renderIntoDocument(<div> <Wine name='Chateau M' /> </div>);
    console.log('***** JM - wine component ***** \n ', wine);
    expect(ReactDOM.findDOMNode(wine).children[0].textContent).to.be.equal('Chateau M');
  })
});