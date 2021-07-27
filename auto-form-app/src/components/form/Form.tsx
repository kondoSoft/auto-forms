import React from 'react';
import './style.tsx';
import {
  Text,
  Container,
  Tile,
  Question,
  Input,
  OptContainer,
  Label,
  InputContainer,
  Date,
  Select,
  Option
} from './style'

interface dataTypeItem {
  question: string,
  isRequired: boolean,
  validation?: () => {},
  type: string,
  groupName?: string,
  options?: string[]
}

interface dataType {
  [key: string]: dataTypeItem
}

interface casesType {
  [key: string]: JSX.Element[] |JSX.Element | undefined
  // 'radio': JSX.Element[] | undefined
  // 'checkbox': JSX.Element[] | undefined
  // 'dropdown-list': JSX.Element
}

const Form = ({formData}: {formData: dataType}) => {
    const keys = Object.keys(formData);

    const inputGenerator = (data: dataTypeItem) => {
      const {type, groupName, options }= data;

      const cases: casesType = {
        'radio': options?.map((option: string) => {
          return(
            <OptContainer key={option} size={options.length}>
              <input type='radio' name={groupName} value={option}/>
              <Label>{option}</Label>
            </OptContainer>
          )
        }),
        'checkbox': options?.map((option: string)=> {
          return(
            <OptContainer key={option} size={options.length}>
              <input type='checkbox' name={option} value={option}/>
              <Label>{option}</Label>
            </OptContainer>
          )
        }),
        'dropdown-list':
            <div>
              <Text>Choose a {groupName}:</Text>
              <Select name={groupName} id={groupName}>
                {
                  options?.map((listItem: string) => {
                    return(
                      <Option key={listItem} value={listItem}>
                       {listItem}
                      </Option>
                    )
                  })
                }
              </Select>
            </div>,
          'date': <Date type={'date'}/>
      };

      const defaultInput = <Input type={type} placeholder='Type your answer here...'/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <Container>
         {
            keys.map(
              (key) => {
                let formItem = formData[key]
                let options = formItem.options?.length || 0
                let type = formItem.type
                return(
                 <Tile>
                    <Question key={key}>
                    <Text>{formItem.question}</Text>
                    {
                      (type==="checkbox" || type==="radio") ?
                        (
                          <InputContainer size={options}>
                            {inputGenerator(formItem)}
                          </InputContainer>
                        ): inputGenerator(formItem)
                    }
                  </Question>
                 </Tile>
                )
              }
            )
          }
        </Container>
    )
};

export default Form;