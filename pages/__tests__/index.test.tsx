/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme';

import Homepage from '../index';

describe('Homepage', () => {
  it('should be render', () => {
    const login = shallow(<Homepage name={'dsc'}/>)
    expect(login.find('h1').text()).toEqual('Homepage dsc');
  })
})