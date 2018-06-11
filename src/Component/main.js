import React from 'react';
import '../App.css';
import  Table from './table/table'
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            currencies: [],
            value: '?',
            base: '-',
            input: '?',
            rate :0,
            Date: '',
            tableOutput: [],
            finalData: []
        };
        this.getRates = this.getRates.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePrint = this.handlePrint.bind(this);
    }
    componentDidMount() {
        fetch('https://exchangeratesapi.io/api/latest?symbols=USD,GBP,AUD,JPY')
            .then(data => data.json())
            .then(data => {
                const currencies = [];
                currencies.push(data.base, ...Object.entries(data.rates).map(rates => rates[0]));
                this.setState({
                    currencies
                });
                var isArr = Array.isArray(currencies);
                console.log(isArr);
            })
            .catch(err => console.log(err));
    }

    //second api call on base currency
    getRates(){
        const base = this.handlePrint();
        fetch(`https://exchangeratesapi.io/api/latest?base=${base}`)
            .then(data => data.json())
            .then(data =>{
                const outputCurrency = [];
                const Date =[];
                Date.push(data.date)
                outputCurrency.push( ...Object.entries(data.rates).map(rates => rates));
               this.setState({
                   rate: data.rates,
                   Date

               })
                    var currencyListed = ["USD","JPY","EUR","GBP","CAD","AUD"];
                    var tableOutput =[];
                    for (var i=0; i<outputCurrency.length; i++){
                        if(currencyListed.includes(outputCurrency[i][0])){
                            tableOutput.push(outputCurrency[i]);
                        }
                        const finalData = tableOutput.map(function (i) {
                            return{
                                "id": i[0],
                                "rate": i[1]
                            }
                        })
                        this.setState({finalData});
                        console.log(finalData);
                    }
            })
            .catch(err => console.log(err))
    }
     //Dropdown
     DropDown = function(list){
         return <option  value={list}>{list}</option>
    };

    handleChange(e) {
        this.setState({ value: e.target.value });

    }

    handlePrint= function() {
        if (this.state.value) {
            return (this.state.value);
        }
    }
    render() {
        const {currencies} = this.state;
        const {finalData} = this.state;
        const {Date} = this.state;
        return (
            <div >
                <h4 className="margin2 col-md-12 text-center" ><b>Select your Base Currency: </b></h4>
                <select
                    className="col-md-4 margin4  dropdown-header1"
                    autoFocus
                    onChange={this.handleChange}>
                    <option inputcurrency={currencies} selected data-default>SELECT BASE</option>{currencies.map(this.DropDown)}
                </select>
                <button className="btn btn-primary margin3 col-md-4" onClick={this.getRates}>GET Rates</button>

                <p className="margin4 col-md-4" ><b>Selected Base: </b>{this.handlePrint()} </p>
                <p className="col-md-4 margin4"> <b>Date: </b> {Date}</p>
                <Table finalData={finalData}/>

            </div>



        );
    }
}

export  default Main;