import React from 'react';
import Text from './Text';
import Icons from './IconSocial';
import '../styles/StyleContent.css';



const Content = ({data, onClick}) =>{

    return(
        <div className="content vh-100 d-flex flex-column justify-content-center align-items-center"
            style={{backgroundColor: data.color}}>
            <div className="card p-4" id="quote-box">
                <div className="card-body">
                     <Text 
                        textAndColor = {data}
                     />   
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Icons 
                                color = {data.color}
                            />
                        </div>
                        <div>
                        <button type="button" className="btn btn-dark" id="new-quote" onClick={onClick} style={{backgroundColor: data.color}}>New quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <small style={{color: "white"}}>By Juan Torres</small>
        </div>
    )
}

    

    



export default Content;