import React from 'react';
import '../App.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            currencies: [],
            value: '?'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePrint = this.handlePrint.bind(this);
    }

    // state = {
    //     currencies: [],
    //     value: 'EUR',
    //     handleChange : this.handleChange.bind(this),
    //     handlePrint: this.handlePrint.bind(this)
    // };
    componentDidMount() {
        fetch('https://exchangeratesapi.io/api/latest?symbols=USD,GBP,AUD,JPY')
            .then(data => data.json())
            .then(data => {
                const currencies = [];
                currencies.push(data.base, ...Object.entries(data.rates).map(rates => rates[0]));

                console.log(typeof(currencies));
                this.setState({
                    currencies
                });
            })
            .catch(err => console.log(err));
    }
     //Dropdown
     DropDown = function(list){
        return <option value={list}>{list}</option>
    };

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handlePrint() {
        if (this.state.value) {
            console.log(this.state.value);

        }
    }

    render() {
        const {currencies} = this.state;
        return (
            <div>
                <span>SELECT your Base: </span>
                <select
                    autoFocus
                    onChange={this.handleChange}>
                    <option inputcurrency={currencies} selected data-default>SELECT BASE</option>{currencies.map(this.DropDown)}
                </select>
                <button onClick={this.handlePrint}>GET RAtes</button>
                <p>selected base:{this.handlePrint.value} </p>
            </div>
        );
    }
}

export  default Main;