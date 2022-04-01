import React, { Component } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export class ResearchCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueincr1: 0,
      valueincr2: 0,
      conversion: props.data.market_data.current_price.usd,
      name: props.data.symbol.toUpperCase()
      //    trial:props.data


    };
  }
  USDconverter = (e) => {
    console.log(this.state.conversion, 'oppoopo')
    console.log(this.state.trial, 'opp')

    this.setState({ valueincr1: e })
    this.setState({ valueincr2: (e * this.state.conversion).toFixed(6) })
    // setValue1(e)
    // setValue2(e*5)

  }
  tokenconverter = (e) => {
    this.setState({ valueincr2: e })
    this.setState({ valueincr1: (e / this.state.conversion).toFixed(6) })
    // setValue2(e)
    // setValue1(e/5)

  }

  render() {
    return (
      <div className="grid mt-6 ml-6 mr-6">
        <div className='col-12 flex align-items-center'>
          <div>
            <div className="p-inputgroup" style={{height: '40px'}}>
              <span className="p-inputgroup-addon surface-0">{this.state.name}</span>
              <input type="number" class="p-inputtext p-component" inputId="stacked" min={0} prefix="$" value={this.state.valueincr1} onValueChange={(e) => this.USDconverter(e.target.value)} onChange={(e) => this.USDconverter(e.value)} showButtons />
              {/* <InputNumber type="number" inputId="stacked" min={0} prefix="$" value={this.state.valueincr1} onValueChange={(e) => this.USDconverter(e.target.value)} onChange={(e) => this.USDconverter(e.value)} showButtons /> */}
            </div>
          </div>
          <div>
            <div className="pr-2 pl-2">
            <img alt='Arrow' style={{width:'18px'}} src='./images/plutus/short_arrow.jpg' />
              {/* <i className="pi pi-arrow-left"></i><br />
              <i className="pi pi-arrow-right"></i> */}
            </div>
          </div>
          <div>
            <div className="p-inputgroup" style={{height: '40px'}}>
              <span className="p-inputgroup-addon surface-0">USD</span>
              <input type="number" class="p-inputtext p-component"  inputId="stacked" min={0} prefix="$" value={this.state.valueincr2} onValueChange={(e) => this.tokenconverter(e.target.value)} onChange={(e) => this.tokenconverter(e.value)} onChangeshowButtons showButtons />
              {/* <InputNumber type="number" inputId="stacked" min={0} prefix="$" value={this.state.valueincr2} onValueChange={(e) => this.tokenconverter(e.target.value)} onChange={(e) => this.tokenconverter(e.value)} onChangeshowButtons showButtons /> */}
            </div>
          </div>
        </div>

        {/* <div className="col-5">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">{this.state.name}</span>
            <InputNumber inputId="stacked" min={0} prefix="$" value={this.state.valueincr1} onValueChange={(e) => this.USDconverter(e.target.value)} onChange={(e) => this.USDconverter(e.value)} showButtons />
          </div>
        </div>
        <div className="col-2 text-center">
          <i className="pi pi-arrow-left"></i><br />
          <i className="pi pi-arrow-right"></i>
        </div>
        <div className="col-5">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">USD</span>
            <InputNumber inputId="stacked" min={0} prefix="$" value={this.state.valueincr2} onValueChange={(e) => this.tokenconverter(e.target.value)} onChange={(e) => this.tokenconverter(e.value)} onChangeshowButtons showButtons />
          </div>
        </div> */}

      </div>
    );
  }
}
export default ResearchCalculator;