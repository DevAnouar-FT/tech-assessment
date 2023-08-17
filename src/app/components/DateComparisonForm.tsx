"use client"

import { useId } from "react";
import DateInput from "./DateInput";

type DateInputTargets = {
  firstDate: { value: string };
  secondDate: { value: string };
};

const DateComparisonForm = (): JSX.Element => {
  const componentId = useId();
  const dateIds = ["first-date", "second-date"].map((id) => `${id}-${componentId}`);
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const {
      firstDate: { value: firstDateValue },
      secondDate: { value: secondDateValue }
    } = event.target as typeof event.target & DateInputTargets;

    console.log(Date.parse(firstDateValue) - Date.parse(secondDateValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <DateInput id={dateIds[0]} name="firstDate" label="First Date" />
      <DateInput id={dateIds[1]} name="secondDate" label="Second Date" />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Compare</button>
    </form>
  );
};

export default DateComparisonForm;
