import React from 'react'; 
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go to Home Page</Link>
    </div>
);

export default NotFoundPage;