import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactonsCard } from './styles';
import magnifyingGlass from '../../assets/magnifyingGlass.svg';
import tagSimpleRegular from '../../assets/tag-simple-regular.svg';
import calendarBlankRegular from '../../assets/calendar-blank-regular.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const [searchForTransaction, setSearchForTransaction] = useState('');

  function handleSearchForTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSearchForTransaction}>
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchForTransaction(e.target.value)
          }
          type="text"
          placeholder="Busque uma transação"
        />
        <button type="submit">
          <img src={magnifyingGlass} alt="lupa" />
          <span>Buscar</span>
        </button>
      </form>

      <table>
        {/* <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead> */}

        <tbody>
          {transactions
            .filter((transaction) =>
              transaction.title
                .toLowerCase()
                .includes(searchForTransaction.toLowerCase())
            )
            .map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'deposit' ? '' : '- '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <TransactonsCard>
        {transactions
          .filter((transaction) =>
            transaction.title
              .toLowerCase()
              .includes(searchForTransaction.toLowerCase())
          )
          .map((transaction) => (
            <div key={transaction._id}>
              <h1>{transaction.title}</h1>
              <span className={transaction.type}>
                {transaction.type === 'deposit' ? '' : '- '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </span>
              <div className="container__category">
                <span>
                  <img src={tagSimpleRegular} alt="Tag" />{' '}
                  {transaction.category}
                </span>
                <span>
                  <img src={calendarBlankRegular} alt="Calendar" />{' '}
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </span>
              </div>
            </div>
          ))}
      </TransactonsCard>
    </Container>
  );
}
