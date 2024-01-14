import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setCards(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Veri alınamadı', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <h2>{card.price}</h2>
          <h2>{card.rating.rate}</h2>
          {/* Resmi ekranda göstermek için img etiketi */}
          <img style={{width:'20px',height:'20px'}}  src={card.image} alt={card.title} />
          {/* Diğer kart bilgilerini buraya ekleyebilirsiniz */}
          <div style={{ width: '5000px', height: '2px', backgroundColor: 'red' }}></div>
        </div>
      ))}
    </div>
  );
}

export default App;
