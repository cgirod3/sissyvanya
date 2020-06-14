import React from 'react';
import { shallow } from 'enzyme';

import Panning from '../../components/Panning';
import SexyBanner from '../../components/SexyBanner';

it('renders correct parent and children', () => {
  const wrapper = shallow(<SexyBanner />);
  expect(wrapper.find(Panning).length).toEqual(1);
  expect(wrapper.find('.SexyBanner').length).toEqual(1);
  expect(wrapper.find('p').length).toEqual(1);
  const p = wrapper.find('p').get(0);
  expect(p.props.children).toEqual('Click for sexy time ;)');
});

// TODO: Handle click testing
