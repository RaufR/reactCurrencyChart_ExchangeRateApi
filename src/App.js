import React from 'react';
import Main from './Component/main';
import Table from './Component/table';


const API_URL ="https://exchangeratesapi.io/api/latest";

class App extends React.Component {

    //get Rate from api
    getRate = async (e) =>{
        e.preventDefault();
     const api_call = await fetch(`${API_URL}`);
     const data = await api_call.json();
     console.log(data);
    }

    render(){
        return (
            <div>
                <h1>App Working!</h1>
                <Main getRate={this.getRate}/>
                <Table/>

            </div>

        );
    }
}

export  default App;