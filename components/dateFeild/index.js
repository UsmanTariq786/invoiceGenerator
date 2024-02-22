import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatePickerValue({value,setValue}) {
  // const [value, setValue] = React.useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
        <DatePicker
          label="Date"
          value={value}
          onChange={(newValue) => setValue("date",newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default DatePickerValue