import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const errorMessage = await login(email, password); 

    if (errorMessage) {
      setError(errorMessage); 
    } else {
      setSuccess('Login successful!!!');
      navigate('/'); 
    }

    setLoading(false);
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/img/others/Login_signup.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative z-10 sm:w-[24rem] md:w-[30rem] flex flex-col space-y-6 border-2 border-slate-400 bg-slate-800/60 p-10 rounded-lg shadow-lg"
      >
        <h1 className="text-center text-4xl font-bold text-white">Log In</h1>
        {error && <div className="text-center text-red-500">{error}</div>}
        {success && <div className="text-center text-green-500">{success}</div>}
        
        <input
          type="email"
          placeholder="Email"
          className="w-full h-11 rounded-lg p-3 border-2 bg-white font-1 outline-none placeholder:italic text-black focus:outline-2 focus:outline-blue-400 hover:outline-green-400"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full h-11 rounded-lg p-3 border-2 bg-white font-1 outline-none placeholder:italic text-black focus:outline-2 focus:outline-blue-400 hover:outline-green-400"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button
          type="submit"
          className="h-11 rounded-lg bg-indigo-700 text-white font-bold hover:bg-indigo-400 duration-300"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'LOG IN'}
        </button>

        {/* <Link to="#" className="text-center font-semibold text-gray-100 duration-100 hover:text-gray-400">
          FORGOT PASSWORD?
        </Link> */}

        <p className="text-center text-white text-lg">
          Don't Have an Account?{' '}
          <Link to="/signup" className="font-medium text-indigo-400 underline-offset-4 hover:text-blue-400 hover:underline">
            Signup
          </Link>
        </p>

        <p className="text-center text-white text-lg">
          <Link to="/" onClick={() => login(null)} className="font-semibold text-gray-100 duration-100 hover:text-gray-400">
            Continue without Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
