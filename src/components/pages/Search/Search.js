import react, {useState} from 'react';



const Search = (searchRes) => {
    
    let array = searchRes.searchRes;
    // console.log(array[0])
    return (
        <div>
            <p>hello world</p>
            {/* <p>{array[0].img}</p> */}
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <img src={array[0].img} />
            <p>{array[0].img}</p> 
        </div>
        
    )
}

export default Search;