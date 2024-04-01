import { Container, SummaryContainer } from './styles';
import arrowCircleUpRegular from '../../assets/arrow-circle-up-regular.svg';
import arrowCircleDownRegular from '../../assets/arrow-circle-down-regular.svg';
import currencyDollarRegular from '../../assets/currency-dollar-regular.svg';
import { Transaction, useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  let summary = {
    deposits: 0,
    withdraws: 0,
    total: 0,
  };

  if (Array.isArray(transactions)) {
    summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }

        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      }
    );

    console.log(transactions, 'transactions');
    console.log(summary, 'summary');
  }

  return (
    <Container>
      <SummaryContainer>
        {Array.isArray(transactions) ? (
          <>
            <div>
              <header>
                <p>Entradas</p>
                <img src={arrowCircleUpRegular} alt="Entradas" />
              </header>
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.deposits)}
              </strong>
            </div>
            <div>
              <header>
                <p>Saídas</p>
                <img src={arrowCircleDownRegular} alt="Saídas" />
              </header>
              <strong>
                -{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.withdraws)}
              </strong>
            </div>
            <div className="highlight-background">
              <header>
                <p>Total</p>
                <img src={currencyDollarRegular} alt="Total" />
              </header>
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.total)}
              </strong>
            </div>
          </>
        ) : (
          <p>Dados inválidos</p>
        )}
      </SummaryContainer>
    </Container>
  );
}
