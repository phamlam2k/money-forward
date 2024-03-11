import { Controller, useFormContext } from 'react-hook-form';
import BaseInput from '../input/BaseInput';

type BaseInputFormProps = {
  name: string;
  label: string;
  classNameCustom?: string;
  type?: 'text' | 'number';
};

const BaseInputForm = ({
  name,
  label,
  classNameCustom,
  type = 'text'
}: BaseInputFormProps) => {
  const REGEX_NUMBER = /^[0-9]*$/;
  const { control } = useFormContext();

  return (
    <div className={`flex flex-col gap-[10px] ${classNameCustom}`}>
      <div>
        <h3 className='text-[18px] font-bold'>
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
                onChange(e.target.value);
              }

              if (type === 'text') {
                onChange(e.target.value);
              }
            }}
          />
        )}
      />
    </div>
  );
};

export default BaseInputForm;
