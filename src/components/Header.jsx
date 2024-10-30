
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">CodePen Clone</h1>
      <nav className="flex flex-col">
        <Link to="/editor" className="block mb-2 hover:underline">Start Coding</Link>
        <Link to="/about" className="block hover:underline">About</Link>
      </nav>
    </div>
  );
};

export default Header;

