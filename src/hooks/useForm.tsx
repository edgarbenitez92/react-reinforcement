import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {

  const [state, setState] = useState(form);

  const onChange = (value: string, field: keyof T) => {
    setState({
      ...form,
      [field]: value
    });
  }

  return {
    ...state,
    form: state,
    onChange
  }
}
