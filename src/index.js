
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Balance } from './balance/balance';
import { Dashboard } from './dashboard/dashboard';
import { Deposit } from './deposit/deposit';
import { NewCustomer } from './new-customer/new-customer';
import { Transfer } from './transfer/transfer';
import { Withdraw } from './withdraw/withdraw';
import { AuthContextProvider } from "./store/auth-context";
import { ThemeContextProviver } from './store/theme-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProviver>
      <AuthContextProvider>
        <BasicExample />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/NewCustomer" element={<NewCustomer />} />
            <Route exact path="/deposit" element={<Deposit />} />
            <Route exact path="/withdraw" element={<Withdraw />} />
            <Route exact path="/transfer" element={<Transfer />} />
            <Route exact path="/balance" element={<Balance />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeContextProviver>
  </React.StrictMode>


);

