import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  form {
    display: flex;
    gap: 1rem;

    input {
      all: unset;
      flex-grow: 1;
      padding: 1rem;
      border-radius: 0.25rem;

      color: var(--gray-5);

      background-color: var(--gray-1);

      outline: revert;
    }

    button {
      all: unset;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      border: 1px solid var(--green-light);
      border-radius: 0.25rem;
      color: var(--green-light);
      cursor: pointer;

      img {
        width: 1.6rem;
        filter: invert(100%) invert(53%) sepia(72%) saturate(3292%)
          hue-rotate(130deg) brightness(93%) contrast(101%);
      }

      @media (max-width: 900px) {
        span {
          display: none;
        }
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media (max-width: 500px) {
      display: none;
    }

    th {
      color: var(--white);
      font-weight: 400;
      padding: 0.5rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--gray-3);
      color: var(--gray-6);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--gray-6);
      }

      &.deposit {
        color: var(--green-light);
      }

      &.withdraw {
        color: var(--red-dark);
      }
    }
  }
`;

export const TransactonsCard = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 500px) {
    display: flex;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 0;
    background-color: var(--gray-3);
    color: var(--gray-6);
    border-radius: 0.25rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    h1 {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--gray-6);
    }

    h1 + span {
      font-size: 2rem;
      font-weight: 700;
    }

    .container__category {
      img {
        max-width: 1.6rem;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        color: var(--gray-5);
      }
    }

    .deposit {
      color: var(--green-light);
    }

    .withdraw {
      color: var(--red-dark);
    }
  }
`;
