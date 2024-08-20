import React, { useEffect } from 'react';
import { services } from '../api/services';

function Home() {

    useEffect(() => {
        services?.fetchProductDetails();
    }, []);

    return (
        <div>
        </div>
    );
}

export default Home;
