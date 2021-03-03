import react, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";



const Search = (searchRes) => {
    
    let array = searchRes.searchRes;
    // console.log(searchRes.searchRes[0])
    return (
        <div>
            <p>hello world</p>
            <p>{array[0].img}</p>
        </div>
        
    )
}

export default Search;