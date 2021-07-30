import React from 'react';

const Lists = (props) => {

    const listStyle ={
        textAlign: 'center',
        margin: '8px',
        width: '320px',
        float: 'left',
        height: '200px',
        backgroundColor: 'rgb(25, 1, 11)',
        color: 'white'
    }

    return (
        <div style={listStyle}>
            <h1>{props.toDo.id}</h1>
            <h2>{props.toDo.title}</h2>
        </div>
    );
};

export default Lists;
