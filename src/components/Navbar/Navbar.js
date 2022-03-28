import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', route:'/home'},
        {id: 2, name: 'Shop', route:'/shop'},
        {id: 3, name: 'Deals', route:'/deals'},
        {id: 4, name: 'Contact', route:'/contact'}
    ]
    return (
        <nav >
           <ul className='md:flex justify-center'>
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;