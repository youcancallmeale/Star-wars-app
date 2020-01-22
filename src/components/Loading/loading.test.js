import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './loading';


describe('#LAODING COMPONENT ==>', () => {
    it('Loading should renders without crashing ', () => {
        const tree = renderer.create(<Loading></Loading>).toJSON()
        expect(tree).toMatchSnapshot()
    });

})
