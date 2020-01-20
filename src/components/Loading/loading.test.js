import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './loading';

it('Loading renders should render', () => {
    const tree = renderer.create(<Loading></Loading>).toJSON()
    expect(tree).toMatchSnapshot()
});
