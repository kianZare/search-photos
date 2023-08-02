import { useState } from 'react';
import './App.css';


function App() {
  const [value, setValue] = useState("car")
  const [result, setResult] = useState("")
  // ACCESS KEY: cS0krMKce7U53S2biX1d-5x6oGAHrOh_YJecqqnBAmo
const fetchImage = () => {
  fetch(`https://api.unsplash.com/search/photos/?client_id=cS0krMKce7U53S2biX1d-5x6oGAHrOh_YJecqqnBAmo&query=${value}`)
  .then(res =>res.json())
  .then(data => {
    setResult(data.results);
  })
}

  return (
    <div className="App flex items-center justify-center w-full">
      <div className="App flex-col items-center justify-center w-full md:max-w-6xl">
      <div className='flex w-full items-center justify-around text-purple-950 bg-gray-100 rounded-b-xl p-4 shadow-xl md:text-xl'>
        <span className='font-bold hidden md:block lg:text-2xl'>Search for your photo</span>
        <input placeholder='search for any type of photos' type='text' value={value} onChange={(e) => setValue(e.target.value)} className='p-2 rounded-xl w-72 md:w-96 lg:w-full lg:max-w-xl md:text-lg outline-none'onKeyDown={fetchImage}/>
        <button className='font-bold curser-pointer  bg-purple-300 ml-2 py-1.5 px-3 rounded-lg hover:bg-purple-500 hover:text-purple-100' onClick={fetchImage}>Search</button>
      </div>
      <div className='flex items-center justify-center gap-4 flex-wrap p-4'>
        {
          result && result.map((item) => 
          <img className='w-80 h-96 mb-2 bg-slate-200 shadow-xl object-cover rounded-2xl hover:scale-105' src={item.urls.regular} alt=""/>

          )
        }
      </div>

      </div>
    </div>
  );
}

export default App;
