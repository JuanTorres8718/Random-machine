import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare,faTumblrSquare } from '@fortawesome/free-brands-svg-icons';


const Icons = ({color}) => {
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} color={color} />
    const tumblr = <FontAwesomeIcon icon={faTumblrSquare} color={color} />
    return ( 
        <React.Fragment>
           <a target="_blank" rel="noopener noreferrer" id="tweet-quote" href="https://twitter.com/intent/tweet">{twitter}</a>
           <a target="_blank" rel="noopener noreferrer"  id="tumblr-quote" href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DBeverly%2BSills%26content%3DYou%2Bmay%2Bbe%2Bdisappointed%2Bif%2Byou%2Bfail%252C%2Bbut%2Byou%2Bare%2Bdoomed%2Bif%2Byou%2Bdon%25E2%2580%2599t%2Btry.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button">{tumblr}</a>
        </React.Fragment>
     );
}
 
export default Icons;