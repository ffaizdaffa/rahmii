const monthlyData = [
  { month: 'Januari', income: 18500000, expense: 12200000 },
  { month: 'Februari', income: 21200000, expense: 13750000 },
  { month: 'Maret', income: 19800000, expense: 12850000 },
  { month: 'April', income: 23600000, expense: 15100000 },
];

const currency = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

const tableBody = document.getElementById('financialTableBody');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const netProfitEl = document.getElementById('netProfit');

let totalIncome = 0;
let totalExpense = 0;

for (const item of monthlyData) {
  totalIncome += item.income;
  totalExpense += item.expense;

  const profit = item.income - item.expense;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.month}</td>
    <td>${currency.format(item.income)}</td>
    <td>${currency.format(item.expense)}</td>
    <td>${currency.format(profit)}</td>
  `;

  tableBody.appendChild(row);
}

const netProfit = totalIncome - totalExpense;

totalIncomeEl.textContent = currency.format(totalIncome);
totalExpenseEl.textContent = currency.format(totalExpense);
netProfitEl.textContent = currency.format(netProfit);
