import React from 'react';
import './style.css'

const Form = ({formData}) => {
    const keys = Object.keys(formData);

    const inputGenerator = (data) => {
      const {type, groupName, options }= data;

      const cases = {
        radio: options?.map(option => {
          return(
            <div key={option}>
              <input type='radio' name={groupName} value={option}/>
              <label>{option}</label>
            </div>
          )
        }),
        checkbox: options?.map(option => {
          return(
            <div key={option}>
              <input type='checkbox' name={option} value={option}/>
              <label>{option}</label>
            </div>
          )
        }),
        'dropdown-list':
            <div>
              <label>Choose a {groupName}:</label>
              <select name={groupName} id={groupName}>
                {
                  options?.map(listItem => {
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

      const defaultInput = <input type={type}/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <form>
          {
            keys.map(
              (key) => {
                let formItem = formData[key]
                return(
                  <div key={key}>
                    <p className='question'>{formItem.question}</p>
                    {inputGenerator(formItem)}
                  </div>
                )
              }
            )
          }
        </form>
    )
};

export default Form;