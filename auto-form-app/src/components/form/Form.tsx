import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import './style.tsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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
  validation?: any,
  type: string,
  name: string,
  defaultOption?: string,
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
type stateType = string[]

interface YupShape {
  [key: string]: any
}

const Form = ({formData}: {formData: dataType}) => {

  const keys = Object.keys(formData);
  let validationObject: YupShape = {}
  keys.forEach(key => {
    let formItem = formData[key]
    let name = formItem.name
    let validation = formItem.validation
    validationObject[name] = validation
  });

  const schema = yup.object().shape(validationObject)
  const [optionArray, setOptionArray ] = useState<stateType> ([])
  const { register, handleSubmit, formState:{ errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: dataTypeItem) => {
    console.log(data);
  };
    const inputGenerator = (data: dataTypeItem) => {
      const {type, name, options, defaultOption }= data;

      const cases: casesType = {
        'radio': options?.map((option: string, index: number) => {
          return(
            <>
              <OptContainer key={option} size={options.length} onClick={() => setValue(name, option)}>
                <input type='radio' id={option} value={option} {...register(name) } />
                <Label htmlFor={option}>{option}</Label>
              </OptContainer>
              { options.length -1 === index && <p>{errors[name]?.message}</p>}
            </>

          )
        }),
        'checkbox': options?.map((option: string, index: number)=> {
          function check (value:string) {
            optionArray?.includes(value) ?  setOptionArray(prevOptions => {
              const optionFilter = optionArray.filter(i => {
                return i !== value
              })
              setValue(name, optionFilter);
              return optionFilter
            }): setOptionArray(prevOptions => {
              setValue(name, [...optionArray, value]);
              return [...optionArray, value]
            })

          }
          return(
            <>
                <OptContainer
                  key={option}
                  size={options.length}
                  onClick={() => check(option)}
                >
                  <input
                    type='checkbox'
                    id={option}
                    value={option}
                    { ...register(name)}
                  />
                  <Label>{option}</Label>
                </OptContainer>
            { (options.length -1) === index && <p>{errors[name]?.message}</p>}
            </>
          )
        }),
        'dropdown-list':(
          <div>
              <Text>Choose a {name}:</Text>
              <Select {...register(`${name}`)}>
                <Option key={defaultOption} value={defaultOption}>
                  {defaultOption}
                </Option>
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
              <p>{errors[name]?.message}</p>
            </div>
        ),
        'date': (
          <>
            <Date type={'date'} {...register(`${name}`)}/>
            <p>{errors[name]?.message}</p>
          </>
        )
      };

      const defaultInput = <Input type={type} placeholder='Type your answer here...' {...register(`${name}`)}/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <Container onSubmit={handleSubmit(onSubmit)}>
         {
            keys.map(
              (key, index) => {
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
                    {
                      (keys.length - 1 === index) && <Submit type='submit' />
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