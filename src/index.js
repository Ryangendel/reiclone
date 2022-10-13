import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Balance } from './balance/balance';
import { Dashboard } from './dashboard/dashboard';
import { Deposit } from './deposit/deposit';
import { NewCustomer } from './new-customer/new-customer';
import { Transfer } from './transfer/transfer';
import { Withdraw }  from './withdraw/withdraw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/deposit/:productId" element={<Deposit />} />
        <Route exact path="/transfer" element={<NewCustomer />} />
        <Route exact path="/balance" element={<Transfer />} />
        <Route exact path="/withdrawal" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  </div>
);

