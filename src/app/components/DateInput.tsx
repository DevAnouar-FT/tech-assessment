type Props = {
  id: string;
  name: string;
  label: string;
};

const DateInput = ({ id, name, label }: Props): JSX.Element => {

  return (
    <div className="my-4">
      <label
        htmlFor={id}
        className="text-lg font-bold">{label}</label>
      <input
        id={id}
        name={name}
        type="date"
        required
        className='ml-4 border-2 border-gray-300 rounded-md p-2 dark:text-slate-800' />
    </div>
  );
};

export default DateInput;
