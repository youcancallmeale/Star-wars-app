import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './error';

test('Error page renders without crashing', () => {
    const component = renderer.create(
        <MemoryRouter>
            <ErrorPage />
        </MemoryRouter>
    ).toJSON();

    expect(component).toMatchSnapshot();
});
