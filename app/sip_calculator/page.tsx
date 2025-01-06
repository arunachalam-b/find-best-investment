"use client";
import React, { useState } from 'react';
import './SipCalculator.css';

const SipCalculator = () => {
    const [calculatorType, setCalculatorType] = useState('sip');
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [investmentPeriod, setInvestmentPeriod] = useState('');
    const [futureValue, setFutureValue] = useState("");
    const [investedAmount, setInvestedAmount] = useState("");
    const [estimatedReturns, setEstimatedReturns] = useState("");

    const formatNumber = (num: string) => {
        const x = num.split('.');
        let lastThree = x[0].substring(x[0].length - 3);
        const otherNumbers = x[0].substring(0, x[0].length - 3);
        if (otherNumbers !== '') {
            lastThree = ',' + lastThree;
        }
        const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return x.length > 1 ? formattedNumber + "." + x[1] : formattedNumber;
    };

    const calculateSIP = () => {
        const P = parseFloat(monthlyInvestment);
        const r = parseFloat(annualInterestRate) / 100 / 12;
        const n = parseFloat(investmentPeriod) * 12;
        const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const invested = P * n;
        const returns = FV - invested;

        setFutureValue(formatNumber(FV.toFixed(2)));
        setInvestedAmount(formatNumber(invested.toFixed(2)));
        setEstimatedReturns(formatNumber(returns.toFixed(2)));
    };

    const calculateLumpsum = () => {
        const P = parseFloat(monthlyInvestment);
        const r = parseFloat(annualInterestRate) / 100;
        const n = parseFloat(investmentPeriod);
        const FV = P * Math.pow(1 + r, n);
        const invested = P;
        const returns = FV - invested;

        setFutureValue(formatNumber(FV.toFixed(2)));
        setInvestedAmount(formatNumber(invested.toFixed(2)));
        setEstimatedReturns(formatNumber(returns.toFixed(2)));
    };

    const handleCalculate = () => {
        if (calculatorType === 'sip') {
            calculateSIP();
        } else {
            calculateLumpsum();
        }
    };

    return (
        <div className="container">
            <h1 className="header">Investment Calculator</h1>
            <div className="radioGroup">
                <label>
                    <input
                        type="radio"
                        value="sip"
                        checked={calculatorType === 'sip'}
                        onChange={() => setCalculatorType('sip')}
                    />
                    SIP Calculator
                </label>
                <label>
                    <input
                        type="radio"
                        value="lumpsum"
                        checked={calculatorType === 'lumpsum'}
                        onChange={() => setCalculatorType('lumpsum')}
                    />
                    Lumpsum
                </label>
            </div>
            <div className="inputGroup">
                <label className="label">Monthly Investment:</label>
                <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    className="input"
                />
            </div>
            <div className="inputGroup">
                <label className="label">Annual Interest Rate (%):</label>
                <input
                    type="number"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(e.target.value)}
                    className="input"
                />
            </div>
            <div className="inputGroup">
                <label className="label">Investment Period (years):</label>
                <input
                    type="number"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                    className="input"
                />
            </div>
            <button onClick={handleCalculate} className="button">Calculate</button>
            {futureValue && (
                <div className="result">
                    <div className="resultRow">
                        <span className="resultLabel">Invested Amount:</span>
                        <span className="resultValue">{investedAmount}</span>
                    </div>
                    <div className="resultRow">
                        <span className="resultLabel">Estimated Returns:</span>
                        <span className="resultValue">{estimatedReturns}</span>
                    </div>
                    <div className="resultRow">
                        <span className="resultLabel">Total Value:</span>
                        <span className="resultValue">{futureValue}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SipCalculator;
