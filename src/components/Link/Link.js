import React from 'react';

const Link = (props) => {
    const {route, name} = props.route;
    return (
        <li><a href={route}>{name}</a></li>
    );
};

export default Link;