import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';


const Text = ({textAndColor, color}) => {
    const quote = <FontAwesomeIcon icon={faQuoteLeft} color={color}/>
    return (
        <React.Fragment> 
            <p id="text" style={{color: color}}>{quote} {textAndColor.quote}</p>
            <p className="text-right" id="author" style={{color: color}}>{textAndColor.author}</p>
        </React.Fragment>
     );
}
 
export default Text;