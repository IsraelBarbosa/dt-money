import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -10rem;
`;

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  overflow: auto;
  scrollbar-color: #323238 #7C7C8A;
  scrollbar-width: thin;

  div {
    background-color: var(--gray-4);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--gray-7);

    @media (max-width: 900px) {
      min-width: 18.8rem;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        color: var(--gray-6);
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green-dark);
    }
  }
`;
