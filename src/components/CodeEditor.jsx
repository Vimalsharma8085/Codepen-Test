
import { useDispatch } from 'react-redux';
import { setCode } from '../redux/codeSlice';
import PropTypes from 'prop-types'; 

const CodeEditor = ({ onRun }) => {
  const dispatch = useDispatch();

  const handleCodeChange = (event) => {
    dispatch(setCode(event.target.value));
  };

  return (
    <div>
      <textarea
        className="w-full h-64 p-4 border rounded"
        placeholder="Write your code here..."
        onChange={handleCodeChange}
      />
      <button onClick={onRun} className="mt-4 p-2 bg-green-500 text-white rounded">
        Run Code
      </button>
    </div>
  );
};

CodeEditor.propTypes = {
  onRun: PropTypes.func.isRequired, 
};

export default CodeEditor;

