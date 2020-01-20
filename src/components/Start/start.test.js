import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import Start from './start';

test('Start renders without crashing', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Start />
        </MemoryRouter>
    ).toJSON();

    expect(component).toMatchSnapshot();
});
