import React from 'react';
import Input from './Input';

const FormInputs = (props) => {
  let controlElements = [];

  for (let control in props.controls) {
    controlElements.push({ id: control, config: props.controls[control] });
  }

  const renderedElements = controlElements.map((el) => (
    <Input
      key={el.id}
      type={el.config.type}
      config={el.config.config}
      label={el.id}
      value={el.config.value}
      onChange={(e) => props.onChange(e, el.id)}
    ></Input>
  ));

  return <>{renderedElements}</>;
};

export default FormInputs;
