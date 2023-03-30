import React, {useState, useEffect} from 'react';
const API = "https://jsonplaceholder.typicode.com/users";

const Api = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    //Código de JS = async / await
    const getDataApi = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setData(data)
        console.log(data)
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getDataApi();
    }, []);


  return (
    <>
    {
      isLoaded ? data.map((informacion)=>{
        return (
            <div key={informacion.id}>
            <h3>{informacion.name}</h3>
            <h3>{informacion.phone}</h3>  
            <hr></hr>
            </div>
        )
      }) : (<h1>Cargando...</h1>)
    }
    </>
  )
}

export default Api