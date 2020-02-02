import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  max-width: 700px;
  margin: 80px auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const ContainerChild = styled.div`
    width: 320px;
    max-width: 350px;
    margin: 15px auto;
    border-radius: 4px;
    padding: 50px 0px 30px 0;
    background: rgba(1, 1, 1, 0.9);

    h1 {
      color: #F2F2F2;
      align-items: center;
    }

    svg.git-icon {
      margin-top: 1px;
      margin-left: 8px;
    }
`;

export const Form = styled.form`
  padding: 12px;

  input {
    font-size: 16px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #eee;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  margin-left: 10px;
  border-radius: 4px;
  background: #7159c1;
  padding: 5px 12px 3px 12px;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const List = styled.ul`
  color: #fff;
  margin-top: 8px;
  list-style: none;

  li {
    display: flex;
    margin: 0 8px;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      color: #BE81F7;
    }
  }
`;

export const LinkRepo = styled.a`
  
`;

export const Footer = styled.footer`
  margin-top: 25px;

  svg {
    padding-top: 3.7px;
    margin-right: 3px;
  }
`;