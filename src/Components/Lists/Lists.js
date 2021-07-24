import React from 'react';

const Lists = (props) => {

    const listStyle ={
        textAlign: 'center',
        border: '3px solid gray',
        margin: '5px',
        width: '300px',
        float: 'left',
        height: '230px',
        backgroundColor: 'orangered'
    }

    return (
        <div style={listStyle}>
            <h1>{props.toDo.id}</h1>
            <h2>{props.toDo.title}</h2>
        </div>
    );
};

export default Lists;