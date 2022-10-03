import { usePlanet } from 'hooks/usePlanet';
import Loading from '../Loading/loading';
import './game.scss';
import { Labels } from 'app-constants';
import Error from 'components/Error/error';

const Game = () => {
  const { data, isLoading, isError, refetch, isFetched, isRefetching } =
    usePlanet();

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const renderData = () => {
    if (isFetched) {
      return (
        <div className="card">
          <div className="card__header">
            <h1>{data?.name}</h1>
          </div>
          <div className="card__main">
            <ul className="card__main--list">
              <li>
                <span>{Labels.population}</span>
                {data?.population}
              </li>
              <li>
                <span>{Labels.climate}</span>
                {data?.climate}
              </li>
              <li>
                <span>{Labels.terrain}</span>
                {data?.terrain}
              </li>
              <li>
                <span>Featured in Films</span>
                {data?.films?.length}
              </li>
            </ul>
          </div>
          <div className="card__next">
            <input
              className="card__next--btn"
              type="button"
              value="Next"
              onClick={() => refetch()}
            />
          </div>
        </div>
      );
    }
  };

  return <>{renderData()}</>;
};

export default Game;
