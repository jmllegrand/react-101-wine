/**
 * Created by jmlegrand on 05/06/16.
 */

import {expect} from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';
import Wine from './wine';

import {bootstrapEnv} from '../utils/bootstrap';

describe('Wine', () => {
  it('should display the correct name of the wine', () => {
    bootstrapEnv();
    const wine = ReactTestUtils.renderIntoDocument(<Wine name='Chateau M' />);
    //console.log('wine', wine);
    const div = ReactTestUtils.findRenderedDOMComponentWithTag(wine, 'div');
    console.log('div', div);
    expect(div.textContent).to.be.equal('Chateau M');
  })
});