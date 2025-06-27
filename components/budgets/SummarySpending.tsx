import { Budget } from '@prisma/client';
import { getSpent } from '@/lib/utilsBudgets';
import React from 'react';
import CardMiniBudget from '@/components/budgets//CardMiniBudgets';
import { TransactionsByCategory } from '@/lib/type';

function SummarySpending({
  budgets,
  transactionsByCategory,
}: {
  budgets: Budget[];
  transactionsByCategory: TransactionsByCategory;
}) {
  const MAX_DISPLAY = 4;
  const displayedBudget = budgets.slice(0, MAX_DISPLAY);

  return (
    <div className="mx-5">
      <h2 className="text-preset-2 text-grey-900 mb-6">Spending Summary</h2>
      <ul>
        {displayedBudget.length > 0 &&
          displayedBudget.map(({ id, category, maximum, theme }) => (
            <React.Fragment key={id}>
              <CardMiniBudget
                category={category}
                maximum={maximum}
                theme={theme || '#000000'}
                spent={getSpent(category, transactionsByCategory)}
              />
              <div className="my-4 h-px border-b border-gray-300 last:border-b-0"></div>
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
}

export default SummarySpending;
