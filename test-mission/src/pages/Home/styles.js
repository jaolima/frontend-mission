import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #FFF;
    
    img {
    align-self: center;
    max-width: 250px;
  }
  
 .main-strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 10px;
  }

  .main-span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  .main-btn {
    background: #5ce1ae;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background 0.2s;
    
    &:hover {
      background: ${darken(0.03, '#37ad7e')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
  }
 

`;
