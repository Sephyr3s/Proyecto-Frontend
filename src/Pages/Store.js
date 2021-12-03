import React from 'react';
import Header from '../componentes/Header';
import Products from '../componentes/Products';

const Store = () => {
    return (
        <>  
        <Header />
            <div className="Container -fluid" >
                <div class="p-3  p-md-12 text-black rounded bg-danger    text-center "style={{ borderBottom: '3px solid pink' }}>
                    <div class="col-md-12 px-0">
                        <h2 style={{fontSize: 80 }} class="display-3 text-dark">Store</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center" style={{ paddingTop: '1rem' }} >
                 
                    <p style={{fontSize: 30}}>Catalogo de productos </p>
                </div>
                <Products />
            </div>
        </>
    )
}

export default Store;