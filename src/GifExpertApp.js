import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories(['Naruto', ...categories]);
    // }
    /*
    const handleAdd = () => {
         setCategories(cats =>[...cats, 'Naruto']);
     }
    */

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>


            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>  
        </>
     );
}
 
export default GifExpertApp;