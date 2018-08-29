import React from 'react';
import CurrentHuntsContainer from '../../containers/CurrentHuntsContainer';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CurrentHuntsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
})
