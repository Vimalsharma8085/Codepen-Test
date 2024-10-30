
import { useSelector } from 'react-redux';

const Output = () => {
  const output = useSelector((state) => state.code.output);

  return (
    <div className="w-full h-64 border rounded p-4 bg-gray-100">
      <h2 className="font-bold">Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;
