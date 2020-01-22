import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../src/App';
import '../public/index.html'

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("#INDEX COMPONENT ==>", () => {
    it("Index should renders without crashing", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("./index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <BrowserRouter>
                <App />
            </BrowserRouter>, div);
    });

});