import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`

export const Field = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  flex-direction: column;
  align-items: flex-start;

  input:invalid, textarea:invalid {
    border-color: #c44b4b;
    background: rgba(246, 222, 222, 0.17);
  }
  
  &.required label:after {
    content: '*';
    color: #c44b4b;
  }
`

const InputCss = css`
  border: 1px solid #50bcce;
  color: #2f7784;
  background: #fff;
  padding: 10px 20px;
  &:not([type=checkbox], [type=radio]) {
    width: 100%;
  }

  &:hover {
    border-color: #1c555c;
    color: #1c555c;
  }
`

export const Label = styled.label`
  margin: 0 0 4px 0;
`

export const Input = styled.input`
  ${InputCss}
`

export const TextArea = styled.textarea`
  ${InputCss}
`

export const Select = styled.select`
  ${InputCss}
`

export const Option = styled.option``

export const Button = styled.button`
  ${InputCss}

  &:hover {
    cursor: pointer;
  }
`
