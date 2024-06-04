import React, { useState } from 'react';
import CurrentBalance from './current_balance';
import AddMoney from './add_money';
import WithdrawMoney from './withdraw_money';
import AddInterest from './add_interest';
import AddBankFee from './add_bank_fee';

// parent component to bundle the calc functions

export default function BalanceController() {
    const [balance, setBalance] = useState(1300.00); // initial balance state set to £1300.00
    
    const handleDeposit = (amount) => { // handling deposits 
        setBalance(balance + amount);  // adding balance and new deposit amount
    };

    const handleWithdrawal = (amount) => { // handline withdrawals
        // alert if not enough money in account
        if (amount > balance) {
            window.alert(`Computer says no, not enough money! You can only withdraw up to £${balance}`);
        } else {
            setBalance(balance => balance - amount); // process withdrawl if there's enough $
        }
        
    };

    const handleInterest = (amount) => { // handle interest additions
        setBalance((currentBalance) => {
            const interestAmount = currentBalance * 0.05;
                return currentBalance + interestAmount; // Calculating new balance inc interest based on the current balance
            });
    };

    const handleBankFee = (amount) => { // handle bank fees
           setBalance(currentBalance => currentBalance - 10.99);
         };

    return (
      <div className='elements'>
        <CurrentBalance balance={balance.toFixed(2)} />
        <AddMoney onAdd={handleDeposit} />
        <WithdrawMoney onWithdraw={handleWithdrawal} />
        <AddInterest balance={balance} onAddInterest={handleInterest} />
        <AddBankFee balance={balance} onAddBankFee={handleBankFee} />
      </div>
    );

}
