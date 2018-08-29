import React from 'react';
import MyHuntsContainer from '../../containers/MyHuntsContainer';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MyHuntsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
})
