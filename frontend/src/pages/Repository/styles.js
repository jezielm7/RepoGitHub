import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  max-width: 700px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: #666;
    font-size: 15px;
    text-decoration: none;
  }

  a:hover {
    color: darkgray;
  }

  img {
    width: 120px;
    margin-top: 12px;
    margin-bottom: 7px;
    border-radius: 50%;
  }

  p.p-repo {
    color: #999;

    a.lk-repo {
      padding: 5px;
      color: #2c7a95;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        color: #FF802A;
      }
    }
  }

  p {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
    line-height: 1.4;
    max-width: 400px;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding-top: 30px;
  border-top: 1.3px solid #eee;

  li {
    display: flex;
    border-radius: 4px;
    padding: 15px 10px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      p {
        margin-top: 4px;
      }

      a {
        color: #999;
        text-decoration: none;

        &:hover {
          color: rgb(253, 149, 31);
        }
      }

      strong {
        font-size: 16px;

        a {
          color: #333;
          text-decoration: none;

          &:hover {
            color: #2c7a95;
          }
        }
        
        span {
          color: #fff;
          height: 20px;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 4px;
          margin-left: 10px;
          border-radius: 2px;
          background: #2E64FE;
        }
      }
    }
  }
`;