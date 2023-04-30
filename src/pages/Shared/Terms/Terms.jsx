import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta nostrum voluptates, optio animi perspiciatis sapiente earum itaque officiis debitis beatae voluptas reprehenderit sed laboriosam! Modi esse perspiciatis iusto eaque eligendi quia porro, voluptas impedit voluptatem, velit hic nesciunt aut quasi? Eveniet eos consequatur id iste vitae, explicabo repellat alias!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;