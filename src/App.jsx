import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Add from './component/add.jsx';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://uts-if-3-b-2327250036-api-hcyc.vercel.app/api/api/articles');
        const data = response.data.artik; 
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <p>List Artikel</p>
        <Link to="/add" className="btn btn-primary">Add</Link>
        {
          articles.map((item) => (
            <ul key={item.id}>
              <li>{item.judul}</li>
              <li>{item.penulis}</li>
              <li>{item.tahun}</li>
            </ul>
          ))
        }
        <Routes>
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
