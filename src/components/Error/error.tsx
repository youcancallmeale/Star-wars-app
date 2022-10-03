import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <span>Oh No!! We`&apos;`ve got a problem!</span>
      <Link to="/">Restart</Link>
    </div>
  );
};

export default Error;
