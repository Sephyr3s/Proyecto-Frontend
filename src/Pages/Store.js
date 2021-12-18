import Header from '../componentes/Header';
import Products from '../componentes/Products';
import React, { useContext, useEffect } from 'react';
import {getAll} from '../services/ProductServices';
import { GlobalContext } from '../context/GlobalContext';


const Store = () => {
    const {loadLiquors} = useContext(GlobalContext);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll();
                loadLiquors(result.data);
                console.log("Data fetch", result.data);
            } catch (error) {
                console.log(error);            
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>  
          <Header />
            <div className="Container -fluid" >
                <div className="p-3  p-md-12 text-black rounded bg-danger    text-center "style={{ borderBottom: '3px solid pink' }}>
                    <div className="col-md-12 px-0">
                        <h2 style={{fontSize: 80 }} className="display-3 text-dark">Store</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center" style={{ paddingTop: '1rem' }} >
                 
                    <p style={{fontSize: 30}}>Catalogue of liquors </p>
                </div>
                <Products />
            </div>
        </>
    )
}

export default Store;