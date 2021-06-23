import React, { FC, FormEvent, useState, useCallback } from 'react'

import { useCreateForm } from './useCreateForm.hook'
import { IFormCreatorProps } from './models'
import Field from './Field'

import * as Styled from './styles'

const FormCreator: FC<IFormCreatorProps> = ({ source, onSubmit }) => {
  const { fields, initialFormState } = useCreateForm({ source })
  const [formState, setFormState] = useState(initialFormState)
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // onSubmit(e, formState)
  }

  const onChange = useCallback((e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: ['checkbox', 'radio'].includes(e.target.type) ? e.target.checked : e.target.value
    }))
  }, [])

  console.log(fields, formState)

  return (
    <div>
      <Styled.Container>
        <form onSubmit={onFormSubmit}>
          {
            fields.map((field, index) => (
              <Field key={index} {...field} id={`field-${index}`} value={formState[field.name]} onChange={onChange} />
            ))
          }
          <Styled.Field>
            <Styled.Button type='submit'>Save</Styled.Button>
          </Styled.Field>
        </form>
      </Styled.Container>
    </div>
  )
}

export default FormCreator
