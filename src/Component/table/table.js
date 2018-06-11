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
            <div className="col-md-8 margin4">
            <BootstrapTable
                data={this.props.finalData}
                            height='auto'
                            hover
                            headerStyle={ { background: '#6F8BA9' } }>
                <TableHeaderColumn ClassName="col-md-4" isKey dataField='id'>Name</TableHeaderColumn>
                <TableHeaderColumn ClassName="col-md-4"  dataField='rate'>Rates</TableHeaderColumn>
            </BootstrapTable>
                <h5 className="margin1">Contact: https://www.linkedin.com/in/raufur-rahmancz/</h5>
            </div>


        );
    }
}

export  default Table;