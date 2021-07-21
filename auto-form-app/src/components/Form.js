import React from 'react';

const Form = ({formData}) => {
    const keys = Object.keys(formData);


    const inputGenerator = (data, key) => {
      const type = data[key].type;

      const cases = {
        radio: data[key].options?.map(option => {
          return(
            <div key={option}>
              <input type='radio' name={data[key].groupName} value={option}/>
              <label>{option}</label>
            </div>
          )
        }),
        checkbox: data[key].options?.map(option => {
          return(
            <div key={option}>
              <input type='checkbox' name={option} value={option}/>
              <label>{option}</label>
            </div>
          )
        }),
        'dropdown-list':
            <>
              <label>Choose a {data[key].groupName}:</label>
              <select name={data[key].groupName} id={data[key].groupName}>
                {
                  data[key].options?.map(listItem => {
                    return(
                      <option key={listItem} value={listItem}>
                        {listItem}
                      </option>
                    )
                  })
                }
              </select>
            </>
      };

      const defaultInput = <input type={type}/>

      const value = cases[type] || defaultInput;
      return value;
    }
    return(
        <>
          {
            keys.map(
              (key) => {
                return(
                  <div key={key}>
                    <h1>{formData[key].question}</h1>
                    {inputGenerator(formData, key)}
                  </div>
                )
              }
            )
          }
        </>
    )
};

export default Form;