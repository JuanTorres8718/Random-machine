import React,{useState, useEffect} from 'react';
import Content from '../components/Content';
import FatalError from '../components/500';

const App = () =>{

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchResource = async ()=>{
            try {
                let num = Math.floor(Math.random() * ((100) - 1) + 1);
                let res = await fetch('http://localhost:8000/cards');
                let result = await res.json()
                let data = await result[num];
                setData(data)
            } catch (error) {
                setError(error)
            }
        }
        fetchResource();

    },[])

    
    const handleClick= async()=>{
            try {
                let num = Math.floor(Math.random() * ((100) - 1) + 1);
                let res = await fetch('http://localhost:8000/cards');
                let result = await res.json()
                let data = await result[num];
                setData(data)
            } catch (error) {
                setError(error)
            }  
    }


    if(error)
    return <FatalError />

    return(
            <Content 
                data = {data}
                onClick= {handleClick}
            />
    )
}
    

export default App;