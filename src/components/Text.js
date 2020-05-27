import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';


const Text = ({textAndColor}) => {
    const quote = <FontAwesomeIcon icon={faQuoteLeft} color={textAndColor.color}/>
    return (
        <React.Fragment> 
            <p id="text" style={{color: textAndColor.color}}>{quote} {textAndColor.text}</p>
            <p className="text-right" id="author" style={{color: textAndColor.color}}>{textAndColor.first_name} {textAndColor.last_name}</p>
        </React.Fragment>
     );
}
 
export default Text;