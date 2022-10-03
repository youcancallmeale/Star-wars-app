import Loader from '../../assets/loader.png';

const Loading = () => {
  return (
    <div className="container">
      <img className="container__loader" src={Loader} alt="Loading..." />
      Loading...
    </div>
  );
};

export default Loading;
