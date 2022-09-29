import axios from 'axios';
import { useEffect, useState } from 'react';
import MemeCard from './components/MemeCard';

function App() {

  const [memes, setMemes] = useState();

  useEffect(() => {
    const URL = 'https://api.imgflip.com/get_memes';
    axios.get(URL)
      .then(res => setMemes(res.data.data.memes))
      .catch(err => console.log(err));
    
  }, []);
  
  console.log(memes);

  return (
    <div className="App">
      <h1>Memes App</h1>
      <section className='card__container'>
      {
        memes?.map(meme => (
          <MemeCard
            key={meme.id}
            meme={meme}
          />
        ))
      }
      </section>
    </div>
  )
}

export default App;
