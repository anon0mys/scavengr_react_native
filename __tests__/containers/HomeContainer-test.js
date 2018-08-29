import React from 'react';
import HomeContainer from '../../containers/HomeContainer';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HomeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
})
