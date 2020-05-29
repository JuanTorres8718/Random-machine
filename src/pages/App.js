import React,{useState, useEffect} from 'react';
import Content from '../components/Content';
import FatalError from '../components/500';
import Colors from '../hooks/Colors';
const App = () =>{

    const [data, setData] = useState([]);
    let [fontColor, setFontColor] = useState('');
    const [error, setError] = useState(null);
    

    useEffect(()=>{
        const fetchResource = async ()=>{
            try {
                let num = Math.floor(Math.random() * ((100) - 1) + 1);
                let numColor = Math.floor(Math.random() * ((28) - 1) + 1);
                let res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
                let result = await res.json()
                let data = await result.quotes[num];
                
                setFontColor(fontColor = Colors[numColor])
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
                let numColor = Math.floor(Math.random() * ((28) - 1) + 1);
                let res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
                let result = await res.json()
                let data = await result.quotes[num];
                setFontColor(fontColor = Colors[numColor])
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
                color = {fontColor}
                onClick= {handleClick}
            />
    )
}
    

export default App;