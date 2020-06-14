import React from 'react';
import { shallow } from 'enzyme';

import Panning from '../../components/Panning';

it('renders div and children', () => {
  const wrapper = shallow(<Panning><span>testing</span></Panning>);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find('.Panning').length).toEqual(1);
  expect(wrapper.find('span').length).toEqual(1);
  const span = wrapper.find('span').get(0);
  expect(span.props.children).toEqual('testing');
});
