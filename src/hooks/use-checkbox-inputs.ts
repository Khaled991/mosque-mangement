import { useState } from "react";

export type SetCheckBoxsValue = ({
  target: { checked, name },
}: React.ChangeEvent<HTMLInputElement>) => void;

export type ChangeValueFn<T extends {}> = (values: T) => void;

const useCheckBoxInputs = <T extends {}>(
  initialValue?: T
): [T | undefined, SetCheckBoxsValue, ChangeValueFn<T>] => {
  const [formValues, setFormValues] = useState<T | undefined>(initialValue);

  const setValues = (values: T) =>
    typeof formValues === "undefined"
      ? setFormValues(values)
      : setFormValues({ ...formValues, ...values });

  const setCheckboxsValue = ({
    target: { checked, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ [name]: checked } as T);

  return [formValues, setCheckboxsValue, setValues];
};

export default useCheckBoxInputs;
