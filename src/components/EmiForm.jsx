import React, { useState } from "react";

function EmiForm({ setData }) {
  let [loan, setLoan] = useState("");
  let [interest, setInterest] = useState("");
  let [tenure, setTenure] = useState("");
  let [tenureType, setTenureType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const P = Number(loan);
    const R = Number(interest) / 12 / 100;
    const N = tenureType === "years" ? Number(tenure) * 12 : Number(tenure);

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setData({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    });
  };
  return (
    <>
      <form className="text-center mt-5 emi-form" onSubmit={handleSubmit}>
        <div className="input-design">
          <label htmlFor="amount">Loan Amount &nbsp; &nbsp;</label>
          <input
            type="number"
            placeholder="Loan Amount ₹"
            id="amount"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
            required
          />
        </div>
        <div className="input-design">
          <label htmlFor="interest">Interest rate (%) &nbsp; &nbsp;</label>
          <input
            type="number"
            placeholder="Interest rate"
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
          />
        </div>
        <div className="input-design input-group">
          <label htmlFor="tenure">Loan tenure year &nbsp; &nbsp;</label>
          <div className="tenure-wrapper">
            <input
              type="number"
              placeholder="Enter loan tenure"
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              required
            />
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value)}
            >
              <option value="years">Year</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Calculate EMI
        </button>
      </form>
    </>
  );
}

export default EmiForm;
