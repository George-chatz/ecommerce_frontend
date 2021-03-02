import react from 'react';
import {useParams, useLocation} from 'react-router-dom';

let url = new URL('http://localhost/search');
let params = new URLSearchParams(url.Search);
params.set('test')

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
//https://developers.google.com/web/updates/2016/01/urlsearchparams
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set

const Search = () => {
    
    return (
        <div>
            <p>Search:</p>
        </div>
        
    )
}

export default Search;