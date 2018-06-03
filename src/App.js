import React from 'react';
import Main from './Component/main';
import Table from './Component/table';

class App extends React.Component {

    render(){
        return (
            <div>
                <h1>App!</h1>
                <Main />
                <Table />
            </div>

        );
    }
}
export  default App;