import React from 'react';


class Table extends React.Component {
    render(){
        return (
            <div>
                <p>Table Working!</p>
                { this.props.currencies}
            </div>
        );
    }
}

export  default Table;