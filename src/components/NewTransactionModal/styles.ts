import styled from 'styled-components';



export const Container = styled.form`
  h2 {
    color: var(--gray-7);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 0;
    color: var(--gray-6);
    background-color: var(--gray-1);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-5);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      outline: 1px solid var(--green-light);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green-dark);
    color: var(--gray-6);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  $isActive: boolean;
  $activeColor: 'green' | 'red';
}

const colors = {
  green: '#015F43',
  red: '#AA2834',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.3s;

  background-color: ${(props: RadioBoxProps) =>
    props.$isActive ? colors[props.$activeColor] : '#29292E'};

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? colors[props.$activeColor] : '#323238'};
  }

  img {
    width: 20px;
    height: 20px;
    filter: ${(props) => (props.$isActive ? 'brightness(0) invert(1)' : 'none')};
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => (props.$isActive ? '#fff' : '#C4C4CC')};
  }
`;
