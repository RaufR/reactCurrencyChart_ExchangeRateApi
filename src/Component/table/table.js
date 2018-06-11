import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



class Table extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            finalData: []
        }
    }
    render(){
        return (
            <BootstrapTable data={this.props.finalData} striped hover>
                <TableHeaderColumn isKey dataField='id'>Name</TableHeaderColumn>
                <TableHeaderColumn  dataField='rate'>Rates</TableHeaderColumn>
            </BootstrapTable>


        );
    }
}

export  default Table;