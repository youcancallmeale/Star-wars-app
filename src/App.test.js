import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import App from './app';


describe('#APP COMPONENT ==>', () => {

    it('App should renders without crashing', () => {
        const component = renderer.create(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        ).toJSON();
    
        expect(component).toMatchSnapshot();
    });
})
