
import { useSelector } from 'react-redux';
import CodeEditor from '../components/CodeEditor';
import Output from '../components/Output';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-full">
        <h2 className="text-xl">Please log in to access the code editor.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Code Editor</h2>
      <div className="grid grid-cols-1 gap-4">
        <CodeEditor />
        <Output />
      </div>
    </div>
  );
};

export default Home;

