import React from 'react';
import { shallow } from 'enzyme';

import Growing from '../../components/Growing';

it('renders div and children', () => {
  const wrapper = shallow(<Growing><span>testing</span></Growing>);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find('.Growing').length).toEqual(1);
  expect(wrapper.find('span').length).toEqual(1);
  const span = wrapper.find('span').get(0);
  expect(span.props.children).toEqual('testing');
});
