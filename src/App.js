import { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  function getData() {
    axios.get("http://backend-svc:5000/profile")
      .then(response => {
        // Kiểm tra dữ liệu nhận được từ backend
        console.log("Received data:", response.data);
        setProfileData(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
        setError('Could not fetch profile data');
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>To get your profile details:</p>
        <button onClick={getData}>Click me</button>

        {/* Hiển thị lỗi nếu có */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Hiển thị dữ liệu profile dưới dạng văn bản */}
        {profileData && (
          <div>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Age:</strong> {profileData.age}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
