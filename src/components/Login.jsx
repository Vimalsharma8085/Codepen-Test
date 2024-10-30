
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { loginUser } from '../firebaseConfig'; 

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const user = await loginUser(email, password);
      dispatch(login(user.email));
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Implement Google login functionality here
  };

  const handleGitHubLogin = () => {
    console.log('Login with GitHub');
    // Implement GitHub login functionality here
  };

  const handleExistingAccountClick = () => {
    alert("Please log in to start coding!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col w-full max-w-sm mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 border rounded mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 border rounded mb-3"
          required
        />
        <button type="submit" className="p-3 bg-blue-500 text-white rounded mb-3">
          Login
        </button>
      </form>
      <div className="w-full max-w-sm bg-gray-100 p-4 rounded text-center mb-4">
        <button onClick={handleExistingAccountClick} className="text-blue-500 underline">
          Already have an account? Click here.
        </button>
      </div>
      <div className="flex items-center mb-4">
        <hr className="flex-1 border-gray-300" />
        <span className="mx-2">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>
      <button onClick={handleGoogleLogin} className="p-3 bg-red-500 text-white rounded mb-3">
        Login with Google
      </button>
      <button onClick={handleGitHubLogin} className="p-3 bg-gray-800 text-white rounded">
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;



