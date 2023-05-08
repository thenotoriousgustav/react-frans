import { Link } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  return (
    <section className='login-container'>
      <h1>Please Login</h1>
      <div className='form-wrapper'>
        <div className='input-wrapper'>
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <div className='checkbox-wrapper'>
          <input type='checkbox' name='' id='' className='' />
          <label htmlFor=''>Remember me</label>
        </div>

        <Link to='/home'>
          <button type='submit'>Login</button>
        </Link>
      </div>
    </section>
  );
}
