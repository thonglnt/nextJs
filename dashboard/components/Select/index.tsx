import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'
import { memo, useState } from 'react'

type TOptions = {
  value: string | number
  title: string
}
export interface ISelects extends SelectProps {
  options: TOptions[]
  label: string
  helperText?: string
  errorMsg?: string
}

const Selects = ({ options, label, helperText, errorMsg }: ISelects) => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <FormControl
      color="secondary"
      error={!!errorMsg}
      sx={{
        width: '350px',
      }}
    >
      <InputLabel id="label">{label}</InputLabel>
      <Select
        labelId="label"
        id="select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((item: TOptions) => (
          <MenuItem key={`MN-${item.value}`} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {(helperText || errorMsg) && (
        <FormHelperText>{helperText || errorMsg}</FormHelperText>
      )}
    </FormControl>
  )
}

export default memo(Selects)
