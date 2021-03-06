import { useMemo } from 'react'

import { IUseCreateFormProps, IUseCreateFormResult, IField, TFormState, FieldTypes, IOption } from './models'

const getOptions = (optionsString: string) => {
  const result: IOption[] = []
  optionsString
    .trim()
    .split(',')
    .forEach((optionString) => {
      const keyValue = optionString.split('=')
      result.push({ value: keyValue[1], label: keyValue[0] })
    })
  return result
}

export const useCreateForm = ({ source }: IUseCreateFormProps): IUseCreateFormResult => {
  // parse fields source
  const fields = useMemo(() => {
    const resultFields: IField[] = []
    const regExp = /\[([^\]]*)\]/gmi
    let findResult: RegExpExecArray | null
    const requiredIfFields: string[] = []
    while ((findResult = regExp.exec(source)) !== null) {
      const fieldProps = findResult[1].split(/\|+/mgi) ?? []
      const field: IField = { name: '', type: 'text' }
      // if the type is not supported
      if (!FieldTypes[field.type]) {
        continue
      }
      fieldProps.forEach((prop) => {
        const keyValue = prop.split(':')
        const key = keyValue[0].trim()
        const value = key === 'options' ? getOptions(keyValue[1].trim()) : keyValue[1].trim()
        field[key] = value
      })
      if (field['require-if']) {
        field.required = true
        requiredIfFields.push(field['require-if'])
      }
      resultFields.push(field)
    }

    resultFields.forEach((field) => {
      if (requiredIfFields.includes(field.name)) {
        field.required = true
      }
    })
    return resultFields ?? []
  }, [source])

  const initialFormState = useMemo(() => {
    const result: TFormState = {}
    fields.forEach(({ name, value = '' }) => {
      result[name] = value
    })
    return result
  }, [source])

  return {
    fields,
    initialFormState
  }
}
