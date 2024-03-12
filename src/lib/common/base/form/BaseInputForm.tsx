import { Controller, useFormContext } from 'react-hook-form';
import BaseInput from '../input/BaseInput';

type BaseInputFormProps = {
  name: string;
  label: string;
  classNameCustom?: string;
  type?: 'text' | 'number';
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const BaseInputForm = ({
  name,
  label,
  classNameCustom,
  type = 'text',
  inputProps
}: BaseInputFormProps) => {
  const REGEX_NUMBER = /^[0-9]*$/;
  const { control } = useFormContext();

  return (
    <div className={`flex flex-col ${classNameCustom}`}>
      <div>
        <h3 className='text-[14px] font-bold'>
          <span className='text-black'>{label}</span>
        </h3>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <BaseInput
            value={value}
            onChange={(e) => {
              if (type === 'number' && REGEX_NUMBER.test(e.target.value)) {
                if (e.target.value[0] === '0') {
                  onChange(e.target.value.slice(1));
                } else {
                  onChange(e.target.value);
                }
              }

              if (type === 'text') {
                onChange(e.target.value);
              }
            }}
            {...inputProps}
          />
        )}
      />
    </div>
  );
};

export default BaseInputForm;
