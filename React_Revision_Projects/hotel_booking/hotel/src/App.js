// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import './App.css';

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [endpoint, setEndpoint] = useState("");

  
 
 
//     useEffect(()=> {  
//      const fetchData = async ()=>{
//       if (endpoint.trim() === "") {
//         setData([]);
//         return;
//       }

//       setLoading(true);
//         try {
//           const res = await axios.get(`https://robohash.org/${endpoint}`);
//           setData(res?.data);
//           console.log(res);
//         } catch (error) {
//          setError(error);
//         }
//         finally{
//           setLoading(false);
//         }   
//      }    
//  fetchData();
//    }, [endpoint])
  
//    const handleChange = (e)=> {
//     setEndpoint(e.target.value);
// }

//   return (
//     <div className="App">
//       <h1>Convert Text to Icons</h1>
//       <div>
//         <input type='text' onChange={handleChange} value={endpoint}/>
//       </div>
//       <div>
//         {loading ? <p>loading...</p> : ""}
//         {data && <img src={data} alt='Icon' width={200}/>}
//         {
//               error && <p>{error}</p>
//         }
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (endpoint.trim() === "") {
        setData([]);
        return;
      }

      setLoading(true);

      try {
        const res = await axios.get(`https://robohash.org/${endpoint}`, {
          responseType: 'arraybuffer',
        });

        const blob = new Blob([res.data], { type: res.headers['content-type'] });
        const reader = new FileReader();

        reader.onloadend = () => {
          setData(reader.result);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const handleChange = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <div className="App">
      <h1>Convert Text to Icons</h1>
      <div>
        <input type='text' onChange={handleChange} value={endpoint} />
      </div>
      <div>
        {loading ? <p>loading...</p> : ""}
        {data && <img src={data} alt='Icon' width={200} />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default App;
