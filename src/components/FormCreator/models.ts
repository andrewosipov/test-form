import { FormEvent } from 'react'

export const FieldTypes: { [key: string]: string } = {
  text: 'text',
  textarea: 'textarea',
  number: 'number',
  float: 'float',
  radio: 'radio',
  checkbox: 'checkbox',
  date: 'date',
  datetime: 'datetime',
  time: 'time',
  tel: 'tel',
  email: 'email',
  url: 'url',
  select: 'select',
  submit: 'submit'
}

export interface IFormCreatorProps {
  source: string
  onSubmit: (e: FormEvent<HTMLFormElement>, formState: TFormState) => void
}

export interface IUseCreateFormProps {
  source: string
}

export interface IField {
  [key: string]: any
  name: string
  label?: string
  value?: string | number
  options?: IOption[]
  placeholder?: string
  required?: boolean
  type: 'text' | 'textarea' | 'number' | 'radio' | 'checkbox' | 'select' | 'date' |'datetime' | 'time' |'email' | 'tel' | 'url'
}

export interface IOption {
  [key: string]: string
  label: string
  value: string
}

export type TFormState = {
  [key: string]: string | number
}

export interface IUseCreateFormResult {
  fields: IField[]
  initialFormState: TFormState
}

export interface IFieldProps extends IField {
  onChange: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}
