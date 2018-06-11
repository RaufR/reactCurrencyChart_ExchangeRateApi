import React from 'react';
import Main from './Component/main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    render(){
        return (
            <div>
                <h1 className="col-md-12 text-center">Dynamic CURRENCY TABLE</h1>
                <h4 className="text-center">RaufR</h4>

                <Main />
            </div>

        );
    }
}
export  default App;