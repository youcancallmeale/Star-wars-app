import React, { Component } from 'react';
import swapi from '../../api/swapi';

import Loading from '../Loading/loading';
import ErrorPage from '../Error/error'

import './game.scss';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            loading: '',
            error: false,
            films: 0
        }

        this.getData = this.getData.bind(this);

    }

    getData() {
        let idPlanet = Math.floor(Math.random() * 61 + 1);
        this.setState({ loading: true })

        fetch(swapi + `planets/${idPlanet}/`)
            .then(data => data.json())
            .then(data => {
                this.setState({ data: data })
                this.setState({ loading: false })
                this.setState({ films: data.films.length })
            })
            .catch(err => {
                this.setState({ error: true })
            })
    }

    componentDidMount() {
        this.getData();

    }

    handleError() {
        if (this.state.error === true) {
            return <ErrorPage />
        }
    }
    

    render() {
        this.handleError();

        return (
            this.state.loading ?
                <Loading />
                :
                <div className="card">
                    <div className="card__header">
                        <h1>{this.state.data.name}</h1>
                    </div>
                    <div className="card__main">
                        <ul className="card__main--list">
                            <li>
                                <span>Population</span>
                                {this.state.data.population}
                            </li>
                            <li>
                                <span>Climate</span>
                                {this.state.data.climate}
                            </li>
                            <li>
                                <span>Terrain</span>
                                {this.state.data.terrain}
                            </li>
                            <li>
                                <span>Featured in Films</span>
                                {this.state.films}
                            </li>
                        </ul>
                    </div>
                    <div className="card__next">
                        <input className="card__next--btn" type="button" value="Next" onClick={this.getData} />
                    </div>
                </div>

        )
    }
}

export default Game;