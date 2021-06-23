import React, { FC, ReactElement, useMemo } from 'react'
import classnames from 'classnames'

import * as Styled from './styles'
import { IFieldProps, FieldTypes } from './models'

const Field: FC<IFieldProps> = (props) => {
  const field = useMemo(() => {
    const fieldTypes: {[key: string]: ReactElement} = {
      [FieldTypes.text]: <Styled.Input {...props} type='text'/>,
      [FieldTypes.textarea]: <Styled.TextArea {...props} />,
      [FieldTypes.number]: <Styled.Input {...props} type='number' step={1} />,
      [FieldTypes.float]: <Styled.Input {...props} type='number' />,
      [FieldTypes.radio]: <Styled.Input {...props} type='radio' />,
      [FieldTypes.checkbox]: <Styled.Input {...props} type='checkbox' />,
      [FieldTypes.date]: <Styled.Input {...props} type='date' />,
      [FieldTypes.datetime]: <Styled.Input {...props} type='datetime-local' />,
      [FieldTypes.time]: <Styled.Input {...props} type='time' />,
      [FieldTypes.tel]: <Styled.Input {...props} type='tel' inputMode='tel' pattern='\+1-\d{3}-\d{3}-\d{4}' placeholder='+1-999-999-9999' />,
      [FieldTypes.email]: <Styled.Input {...props} type='email' />,
      [FieldTypes.url]: <Styled.Input {...props} type='url' />,
      [FieldTypes.select]: (
        <Styled.Select name={props.name} value={props.value} onChange={props.onChange}>
          {props.options?.map(({ value, label }, index) => (
            <Styled.Option key={index} value={value}>{label}</Styled.Option>
          ))}
        </Styled.Select>
      ),
      [FieldTypes.submit]: <Styled.Input {...props} type='submit'/>
    }
    return fieldTypes[props.type]
  }, [props])

  if (!field) {
    return null
  }

  const { id, label, required } = props

  return (
    <Styled.Field className={classnames({ required })}>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      {field}
    </Styled.Field>
  )
}

export default Field
