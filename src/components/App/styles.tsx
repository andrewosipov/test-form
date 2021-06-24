import styled from 'styled-components'

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  box-sizing: border-box;
`

export const Source = styled.div`
  flex: 0 0 60%;
  position: relative;
  margin: 0 20px;
`

export const Form = styled(Source)`
  flex: 0 0 45%;
  
  form {
    width: 100%;
  }
`

export const FormResult = styled(Source)`
  border: 1px dashed #dedede;
  word-break: break-all;
  margin: 20px 0 0 0;
  padding: 10px;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: 10px;
  box-sizing: border-box;
`
