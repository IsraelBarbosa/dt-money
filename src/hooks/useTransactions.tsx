import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

export interface Transaction {
  _id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, '_id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    api
      .get('/get-transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    await api.post('/create-transaction', {
      ...transactionInput,
      createdAt: new Date(),
    });

    fetchTransactions();
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
