import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const res = await googleLogin(token);
    localStorage.setItem('token', res.access_token);
    navigate('/');
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 text-2xl font-bold">Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={() => alert("Login Failed")} />
    </div>
  );
}

export default Login;
