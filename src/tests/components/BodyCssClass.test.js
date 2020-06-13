import React from 'react';
import { shallow } from 'enzyme';

import BodyCssClass from '../../components/BodyCssClass';

it('renders', () => {
  const wrapper = shallow(<BodyCssClass cssClass='test-class' />);
});
