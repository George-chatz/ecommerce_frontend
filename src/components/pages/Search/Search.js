import react, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";



const Search = () => {
    
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchHandler = (val) => {
        setSearch(val.target.value);
      } 
    
    const dataSearch = async () => {
    
    const res = await fetch(`http://localhost:5000/search/${search}`);
    
    const data = await res.json();
    setSearchResults(data);
    console.log(data);
    }

    return (
        <div className="left_header">
        <SearchIcon className="search" onClick={dataSearch}/>
        {/* <Link to="/result"><SearchIcon className="search"/></Link> */}
                <input placeholder="Search products" className="search"
                type="text" onChange={(e)=>searchHandler(e)}/>
        </div>
        //onChange={(e)=>searchHandler(e)}
    )
}

export default Search;