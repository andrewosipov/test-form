import React, { FormEvent, FC, useState, useCallback } from 'react'

import FormCreator from '../FormCreator'
import * as Styled from './styles'

const initSource = `
[name:textField| type:text | label:Text field | require-if:name]
[name:name | label:Textarea | type:textarea |value:1]
[name:checkbox| label:Checkbox field | type:checkbox]
[name:checkbox2| label:Required checkbox| type:checkbox | required:true]
[name:radio | type:radio | label:Radio button ]
[name:number| type:number | label:Number]
[name:float| type:float | label:Float |required:true]
[name:select| type:select | label:Select | options:name=value,name2=value2,name3=value3]
[name:date| type:date | label:Date | require-if:time]
[name:datetime| type:datetime | label:Datetime]
[name:time| type:time | label:Time]
[name:email| type:email | label:Email]
[name:tel| type:tel | label:Telephone]
[name:url| type:url | label:Url]
`

const App: FC = () => {
  const [formSource, setFormSource] = useState(initSource)
  const [formResult, setFormResult] = useState()
  const onChange = (e: FormEvent<HTMLTextAreaElement>) => setFormSource(e.currentTarget.value)
  const onSubmit = useCallback((e, formState) => {
    e.preventDefault()
    setFormResult(formState)
  }, [])

  return (
    <Styled.Container>
      <Styled.Source>
        <p>Form Source</p>
        <Styled.TextArea
          value={formSource}
          onChange={onChange}
        />
        {formResult && (
          <Styled.FormResult>
            <p>Form Result:</p>
            <pre>{JSON.stringify(formResult, null, 2)}</pre>
          </Styled.FormResult>
        )}
      </Styled.Source>
      <Styled.Form>
        <p>Generated Form</p>
        <FormCreator
          source={formSource}
          onSubmit={onSubmit}
        />
      </Styled.Form>
    </Styled.Container>
  )
}

export default App
