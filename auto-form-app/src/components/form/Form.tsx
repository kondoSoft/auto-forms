import React from 'react';
import './style.tsx';
import {
  Text,
  Test,
  QContainer,
  Container,
  Input,
  OptContainer,
  Label
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
            <OptContainer key={option}>
              <input type='radio' name={groupName} value={option}/>
              <Label>{option}</Label>
            </OptContainer>
          )
        }),
        'checkbox': options?.map((option: string)=> {
          return(
            <OptContainer key={option}>
              <input type='checkbox' name={option} value={option}/>
              <Label>{option}</Label>
            </OptContainer>
          )
        }),
        'dropdown-list':
            <div>
              <label>Choose a {groupName}:</label>
              <select name={groupName} id={groupName}>
                {
                  options?.map((listItem: string) => {
                    return(
                      <option key={listItem} value={listItem}>
                        {listItem}
                      </option>
                    )
                  })
                }
              </select>
            </div>
      };

      const defaultInput = <Input type={type}/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <Test>
         {
            keys.map(
              (key) => {
                let formItem = formData[key]
                return(
                 <Container>
                    <QContainer key={key}>
                    <Text>{formItem.question}</Text>
                    {inputGenerator(formItem)}
                  </QContainer>
                 </Container>
                )
              }
            )
          }
        </Test>
    )
};

export default Form;