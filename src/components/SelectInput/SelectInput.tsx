import { SelectInputProps } from '@/interfaces';

const SelectInput = ({
  label,
  placeholder = 'Selecione uma opção',
  options,
  onChange,
}: SelectInputProps) => {
  return (
    <div className="mb-6 flex flex-col items-start w-full">
      <label
        htmlFor="neighborhoods"
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}:
      </label>
      <select
        id="neighborhoods"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary block w-full p-2.5"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
