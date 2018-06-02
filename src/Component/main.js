import React from 'react';


class Main extends React.Component {
    render(){
        return (
           <form onSubmit={this.props.getRate}>
               <input type="text" name="currency" placeholder="Currency...."/>
               <button>Get Rate!</button>

           </form>
        );
    }
}

export  default Main;