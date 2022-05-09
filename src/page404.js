import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <Link to="/home">Go Home</Link>
    </div>
);

export default Page404;