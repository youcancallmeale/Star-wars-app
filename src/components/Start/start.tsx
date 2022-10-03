import { Link } from 'react-router-dom';
import './start.scss';
import Logo from 'assets/star-wars.png';
import { Labels } from 'app-constants';

const Start = () => {
  return (
    <div className="start">
      <span className="start__first">Desafio AME Digital</span>
      <img className="start__logo" src={Logo} alt="logo" />
      <span className="start__second">
        <strong>{Labels.author}</strong>
      </span>
      <Link className="start__play" to="/game">
        {Labels.buttonStart}
      </Link>
    </div>
  );
};

export default Start;
