import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './error';

describe('#ERROR PAGE COMPONENT ==>', () => {
    it('Error page should renders without crashing', () => {
        const component = renderer.create(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
        ).toJSON();
    
        expect(component).toMatchSnapshot();
    });

})

