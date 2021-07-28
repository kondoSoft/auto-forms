import React from 'react';
import { useForm } from "react-hook-form";
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
  Option,
  Submit
} from './style'

interface dataTypeItem {
  question: string,
  isRequired: boolean,
  validation?: () => {},
  type: string,
  name: string,
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

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: {Colors: string[]})  => {
    alert(JSON.stringify(data));
  };
    const keys = Object.keys(formData);

    const inputGenerator = (data: dataTypeItem) => {
      const {type, name, options }= data;

      const cases: casesType = {
        'radio': options?.map((option: string) => {
          return(
            <Label>
                <OptContainer key={option} size={options.length}>
                  <input type='radio' value={option} { ...register(`${name}`)}/>
                  {option}
                </OptContainer>
            </Label>
          )
        }),
        'checkbox': options?.map((option: string)=> {
          return(
            <Label>
                <OptContainer key={option} size={options.length}>
                  <input
                    type='checkbox'
                    value={option}
                    { ...register(`${name}`)}
                  />
                  {option}
                </OptContainer>
            </Label>
          )
        }),
        'dropdown-list':
            <div>
              <Text>Choose a {name}:</Text>
              <Select {...register(`${name}`)}>
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
          'date': <Date type={'date'} {...register(`${name}`)}/>
      };

      const defaultInput = <Input type={type} placeholder='Type your answer here...' {...register(`${name}`)}/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <Container onSubmit={handleSubmit(onSubmit)}>
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
          < Submit
            type='submit'
          />
        </Container>
    )
};

export default Form;