import React from 'react';

class Main extends React.Component {
    state = {
        currencies: [],
        rate: 0,
    };


    componentDidMount() {
        fetch('https://exchangeratesapi.io/api/latest?symbols=USD,GBP,AUD,JPY')
            .then(data => data.json())
            .then(data => {
                const currencies = [];
                currencies.push(data.base, ...Object.entries(data.rates).map(rates => rates[0]));
                currencies.sort();
                console.log(currencies);
                console.log(typeof(currencies));
                this.setState({currencies});
            })
            .catch(err => console.log(err));
    }

     //Dropdown 
     DropDown = function(list){
        return <option>{list}</option>
    };



    render() {
        const {currencies} = this.state;
        return (
            <select>
                {currencies.map(this.DropDown)}
            </select>
        );
    }
}

export  default Main;