import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import App from './app';

test('App renders without crashing', () => {
    const component = renderer.create(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ).toJSON();

    expect(component).toMatchSnapshot();
});
