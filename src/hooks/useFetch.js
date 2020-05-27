import {useState, useEffect} from 'react';

const useFetch = ()=>{
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
    return {data,error}
}

export default useFetch;