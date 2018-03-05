/* global Plotly:true */
import React from 'react';
import {
    Button, ButtonToolbar
    } from 'react-bootstrap';
import Select from './components/Select';
import CheckboxOrRadioGroup from './components/CheckboxOrRadioGroup';
import SingleInput from './components/SingleInput';

import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly);


class Form extends React.Component {
    constructor(props) {
        super(props);

        let stepsArray = [];
        for (let i = 0; i <= 1; i+=0.05) {
            stepsArray+=[i];
        }


        var plotPortfolio = {
            data: [{
                    x: ['Cash', 'Gold', 'Bonds', 'Stocks'],
                    y: [10, 20, 30, 40],
                    type: 'bar'
            }],

            layout: {
                // plotBackground:'#f3f6fa',
                sliders: [{
                    pad: {t: 30},
                    currentvalue: {
                        // visible: true,
                        prefix: 'Risk Score:',
                        xanchor: 'right',
                        font: {size: 20, color: '#666'}
                    },
                    steps: stepsArray
                }]
            }

        };

        this.state = {
          portfolio: plotPortfolio,

          riskScoreVisible: false,
          riskScore: 0,
          investmentPurpose: '',
          investmentHorizon: '',
          sellOffPercentage:'',
          suddenIncrease:'',
          suddenIncrease2:'',
          age:null,
          gender:'',
          ethnicity:'',
          region:'',
          percentageOfIncome:null,
          annualIncomeAfterTax:null,
          annualIncomeAfterTax1:null,
          annualIncomeAfterTaxes2:null,
          annualIncomeAfterTaxes3:null,
          annualIncomeAfterTaxes4:null,
          annualIncomeAfterTaxes5:null,
          monthlyIncomeAfterTax:null,
          monthlyExpenditures:null,
          totalDebt:null,
          valueOfCurrentAssets:null,
          assetToDebtRatio:'',
          creditToDebtRatio:'',
          availableCredit:'',
          FICOScore:''          
        };
    
        this.displayRiskScore = this.displayRiskScore.bind(this);
        this.hideRiskScore = this.hideRiskScore.bind(this);

        this.handleInvestmentPurpose = this.handleInvestmentPurpose.bind(this);
        this.handleInvestmentHorizon = this.handleInvestmentHorizon.bind(this);
        this.handleSellOffPercentage = this.handleSellOffPercentage.bind(this);
        this.handleSuddenIncrease = this.handleSuddenIncrease.bind(this);
        this.handleSuddenIncrease2 = this.handleSuddenIncrease2.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleEthnicity = this.handleEthnicity.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
        this.handlePercentageOfIncome = this.handlePercentageOfIncome.bind(this);
        this.handleAnnualIncomeAfterTax = this.handleAnnualIncomeAfterTax.bind(this);
        this.handleAnnualIncomeAfterTax1 = this.handleAnnualIncomeAfterTax1.bind(this);
        this.handleAnnualIncomeAfterTax2 = this.handleAnnualIncomeAfterTax2.bind(this);
        this.handleAnnualIncomeAfterTax3 = this.handleAnnualIncomeAfterTax3.bind(this);
        this.handleAnnualIncomeAfterTax4 = this.handleAnnualIncomeAfterTax4.bind(this);
        this.handleAnnualIncomeAfterTax5 = this.handleAnnualIncomeAfterTax5.bind(this);
        this.handleMonthlyIncomeAfterTax = this.handleMonthlyIncomeAfterTax.bind(this);
        this.handleMonthlyExpenditures = this.handleMonthlyExpenditures.bind(this);
        this.handleTotalDebt = this.handleTotalDebt.bind(this);
        this.handleValueOfCurrentAssets = this.handleValueOfCurrentAssets.bind(this);
        this.handleAssetToDebtRatio = this.handleAssetToDebtRatio.bind(this);
        this.handleCreditToDebtRatio = this.handleCreditToDebtRatio.bind(this);
        this.handleAvailableCredit = this.handleAvailableCredit.bind(this);
        this.handleFICOScore = this.handleFICOScore.bind(this);



    }

    displayRiskScore(e) {
        this.setState({riskScoreVisible: true});
        window.setTimeout(function() {document.getElementById("results").scrollIntoView(true)}, 500);
    }
    hideRiskScore(e) { this.setState({riskScoreVisible: false});}

    handleInvestmentPurpose(e) {
        this.setState({investmentPurpose: e.target.value});
    }

    handleInvestmentHorizon(e) {
        this.setState({investmentHorizon:e.target.value});
    }

    handleSellOffPercentage(e) {
        this.setState({sellOffPercentage: e.target.value});
    }

    handleSuddenIncrease(e) {
        this.setState({suddenIncrease: e.target.value});
    }

    handleSuddenIncrease2(e) {
        this.setState({suddenIncrease2: e.target.value});
    }

    handleAge(e) {
        this.setState({age: e.target.value});
    }

    handleGender(e) {
        this.setState({gender: e.target.value});
    }

    handleEthnicity(e) {
        this.setState({ethnicity: e.target.value});
    }

    handleRegion(e) { this.setState({region: e.target.value});}
    handlePercentageOfIncome(e) { this.setState({percentageOfIncome: e.target.value});}
    handleAnnualIncomeAfterTax(e) { this.setState({annualIncomeAfterTax: e.target.value});}
    handleAnnualIncomeAfterTax1(e) { this.setState({annualIncomeAfterTax1: e.target.value});}
    handleAnnualIncomeAfterTax2(e) { this.setState({annualIncomeAfterTax2: e.target.value});}
    handleAnnualIncomeAfterTax3(e) { this.setState({annualIncomeAfterTax3: e.target.value});}
    handleAnnualIncomeAfterTax4(e) { this.setState({annualIncomeAfterTax4: e.target.value});}
    handleAnnualIncomeAfterTax5(e) { this.setState({annualIncomeAfterTax5: e.target.value});}
    handleMonthlyIncomeAfterTax(e) {this.setState({monthlyIncomeAfterTax: e.target.value});}
    handleMonthlyExpenditures(e) { this.setState({monthlyExpenditures: e.target.value});}
    handleTotalDebt(e) { this.setState({totalDebt: e.target.value});}
    handleValueOfCurrentAssets(e) { this.setState({valueOfCurrentAssets: e.target.value});}
    handleAssetToDebtRatio(e) { this.setState({assetToDebtRatio: e.target.value});}
    handleCreditToDebtRatio(e) { this.setState({creditToDebtRatio: e.target.value});}
    handleAvailableCredit(e) { this.setState({availableCredit: e.target.value});}
    handleFICOScore(e) { this.setState({FICOScore: e.target.value});}

    render() {
        return (
        <div>
        <div className="container">
        <div className="columns">
        <div className="col-md-9 centered">
        <h3></h3>
        <form>
            <h3> Risk Assessment Form </h3>
            <SingleInput 
                inputType={'number'}
                title={'What is your age?'}
                controlFunc={this.handleAge}
                content={this.age}
                placeholder={'Enter your correct age'}
            />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What is the primary purpose of your investment?'}
                controlFunc={this.handleInvestmentPurpose}
                type={'radio'}
                options={[
                    "Accumulate wealth to save (College fund, retirement)",
                    'Accumulate wealth to spend (house downpayment, car)',
                    'Income generation (Yearly income from dividends)',
                    'Generating high returns'
                ]}
                selectedOptions={this.state.investmentPurpose} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What is your investment horizon?'}
                controlFunc={this.handleInvestmentHorizon}
                type={'radio'}
                options={[
                    'Less than 1 year',
                    'Between 1 and 5 years',
                    'Between 5 and 10 years',
                    'More than 10 years'
                ]}
                selectedOptions={this.state.investmentHorizon} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'At what percentage loss would you sell off your investments?'}
                controlFunc={this.handleSellOffPercentage}
                type={'radio'}
                options={[
                    'Less than 5%',
                    'Between 5% and 15%',
                    'Between 15% and 25%',
                    'More than 25%'
                ]}
                selectedOptions={this.state.sellOffPercentage} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'If an asset that you owned were to increase in value by 20% suddenly over a period of three weeks, what would you do?'}
                controlFunc={this.handleSuddenIncrease}
                type={'radio'}
                options={[
                    'Sell it immediately',
                    'Wait a bit then sell',
                    'Wait a bit then buy',
                    'Buy immediately'
                ]}
                selectedOptions={this.state.suddenIncrease} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'If an asset that you owned were to increase in value by 50% suddenly over a period of two weeks, what would you do?'}
                controlFunc={this.handleSuddenIncrease2}
                type={'radio'}
                options={[
                    'Sell it immediately',
                    'Wait a bit then sell',
                    'Wait a bit then buy',
                    'Buy immediately'
                ]}
                selectedOptions={this.state.suddenIncrease2} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What is your gender?'}
                controlFunc={this.handleGender}
                type={'radio'}
                options={[
                    'Male',
                    'Female',
                    'Prefer not to say'
                ]}
                selectedOptions={this.state.gender} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What is your ethnicity?'}
                controlFunc={this.handleEthnicity}
                type={'radio'}
                options={[
                    'American Indian or Alaska Native',
                    'Asian',
                    'Black or African American',
                    'Hispanic or Latino',
                    'Native Hawaiian or Other Pacific Islander',
                    'White',
                    'Prefer not to say'
                ]}
                selectedOptions={this.state.ethnicity} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What region is your primary residence in?'}
                controlFunc={this.handleRegion}
                type={'radio'}
                options={[
                    'Northeast: New Englande',
                    'Northeast: Mid-Atlantic',
                    'Midwest: East North Central',
                    'MidWest: West North Central',
                    'South: South Atlantic',
                    'South: East South Central',
                    'South: West South Central',
                    'West: Mountain',
                    'West: Pacific'
                ]}
                selectedOptions={this.state.region} />
                <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Census_Regions_and_Division_of_the_United_States.svg/942px-Census_Regions_and_Division_of_the_United_States.svg.png" target="_blank">
                    <h4> <b> See this image for reference to your region of the United States </b> </h4>
                </a>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What percentage of your annual income are you planning to invest?'}
                controlFunc={this.handlePercentageOfIncome}
                content={this.percentageOfIncome}
                placeholder={'Enter number between 0 and 100'}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is your annual income after taxes?'}
                controlFunc={this.handleAnnualIncomeAfterTax}
                content={this.annualIncomeAfterTax}
                placeholder={"Enter just the number, ie. 20000"}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What was your annual income after taxes last year?'}
                controlFunc={this.handleAnnualIncomeAfterTax1}
                content={this.annualIncomeAfterTax1}
                placeholder={"Enter just the number, ie. 20000"}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What was your annual income after taxes two years ago?'}
                controlFunc={this.handleAnnualIncomeAfterTax2}
                content={this.annualIncomeAfterTax2}
                placeholder={"Enter just the number, ie. 20000"}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What was your annual income after taxes three years ago?'}
                controlFunc={this.handleAnnualIncomeAfterTax3}
                content={this.annualIncomeAfterTax3}
                placeholder={"Enter just the number, ie. 20000"}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What was your annual income after taxes four years ago?'}
                controlFunc={this.handleAnnualIncomeAfterTax4}
                content={this.annualIncomeAfterTax4}
                placeholder={"Enter just the number, ie. 20000"}
            />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What was your annual income after taxes five years ago?'}
                controlFunc={this.handleAnnualIncomeAfterTax5}
                content={this.annualIncomeAfterTax5}
                placeholder={"Enter just the number, ie. 20000"}/>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is your monthly income for this month after taxes?'}
                controlFunc={this.handleMonthlyIncomeAfterTax}
                content={this.monthlyIncomeAfterTax}
                placeholder={"Enter just the number, ie. 1000"}/>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is your total monthly expenditures? Include all items such as rent, food, discretionary spending, alimony, etc.'}
                controlFunc={this.handleMonthlyExpenditures}
                content={this.monthlyExpenditures}
                placeholder={"Enter just the number, ie. 1000"}/>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'How much total debt do you have right now? Include all items such as credit card, mortgage, car loans, student loans, etc.'}
                controlFunc={this.handleTotalDebt}
                content={this.totalDebt}
                placeholder={"Enter just the number, ie. 20000"}/>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is the value of your current assets? Include all items such as cars, savings and checking accounts, property, bonds, retirement, etc.'}
                controlFunc={this.handleValueOfCurrentAssets}
                content={this.valueOfCurrentAssets}
                placeholder={"Enter just the number, ie. 20000"}/>
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is your total available credit? Include all items such as credit cards, second mortgage, etc.'}
                controlFunc={this.handleAvailableCredit}
                content={this.availableCredit}
                placeholder={"Enter just the number, ie. 20000"}/>
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What do you think your asset to debt ratio is?'}
                controlFunc={this.handleAssetToDebtRatio}
                type={'radio'}
                options={[
                    'Healthy',
                    'Above Average',
                    'Below Average',
                    'Unhealthy'
                ]}
                selectedOptions={this.state.assetToDebtRatio} />
            <h1></h1>
            <CheckboxOrRadioGroup 
                title={'What do you think your credit to debt ratio is?'}
                controlFunc={this.handleCreditToDebtRatio}
                type={'radio'}
                options={[
                    'Healthy',
                    'Above Average',
                    'Below Average',
                    'Unhealthy'
                ]}
                selectedOptions={this.state.creditToDebtRatio} />
            <h1></h1>
            <SingleInput 
                inputType={'number'}
                title={'What is your FICO credit score?'}
                controlFunc={this.handleFICOScore}
                content={this.FICOScore}
                placeholder={"Enter just the number, ie. 700"}/>
            <h1></h1>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.displayRiskScore}>Submit</Button>
            </ButtonToolbar>
        </form>
        </div>
        </div>
        </div>
        { this.state.riskScoreVisible ? <Results /> : null }
        </div>
        );
    }
}

class Results extends Form {
    render() {
        return (
            <div className="results-container">
                <div className="results-title">
                    Your Risk Score
                </div>
                <div id="results" className="results-container">
                    {this.state.riskScore}
                </div>
                <Plot
                    data={this.state.portfolio.data}
                    layout={this.state.portfolio.layout}
                />


            </div>
        )
    }
}

export default Form;