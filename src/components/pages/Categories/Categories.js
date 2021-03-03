import react from 'react';

const Categories = (categoriesRes) => {
    
    // console.log(categoriesRes)
    let array = categoriesRes.categoriesRes;
    console.log(categoriesRes.categoriesRes[0])
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

export default Categories;