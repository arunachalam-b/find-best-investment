"use client";
import React, { useState } from 'react';
import './FindYourBestInvestment.css';

const FindYourBestInvestment = () => {
    const [amount, setAmount] = useState<number | string>(0);
    const [years, setYears] = useState<number | string>(0);
    const investmentOptions = [
        { name: 'Stock Index (NIFTY)', rate: 0.12 },
        { name: 'Mutual Funds', rate: 0.10 },
        { name: 'FDs', rate: 0.08 },
        { name: 'Liquid Funds', rate: 0.07 },
        { name: 'Bonds', rate: 0.06 },
        { name: 'T-Bills', rate: 0.04 }
    ];

    const calculateReturns = (amount: number, years: number, rate: number) => {
        return amount * Math.pow((1 + rate), years);
    };

    return (
        <div className="container">
            <h1 className="header">Choose the best investment over a period of time</h1>
            <div className="content">
                <p>Welcome to the Find Your Best Investment page. Here you can explore various investment options and find the best one for you.</p>
                <div>
                    <label>Amount: </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Number of Years: </label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            {investmentOptions.map(option => (
                                <th key={option.name}>
                                    {option.name}
                                    <span className="tooltip">
                                        <span><i className="fa fa-info-circle"></i></span>
                                        <span className="tooltiptext">{(option.rate * 100).toFixed(2)}%</span>
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Number(years) }, (_, i) => (
                            <tr key={i}>
                                <td>Year {i + 1}</td>
                                {investmentOptions.map(option => (
                                    <td key={option.name}>{calculateReturns(Number(amount), i + 1, option.rate).toFixed(2)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FindYourBestInvestment;
