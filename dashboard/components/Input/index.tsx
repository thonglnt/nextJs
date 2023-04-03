import { TextField, StandardTextFieldProps } from '@mui/material'
import { memo } from 'react'

export interface IInputFields extends StandardTextFieldProps {
  errorMsg?: string
}

const InputFields = ({
  errorMsg,
  onChange,
  name,
  value,
  type,
  ...props
}: IInputFields) => {
  return (
    <TextField
      color="secondary"
      id="outlined-required"
      error={!!errorMsg}
      name={name}
      helperText={errorMsg}
      onChange={onChange}
      value={value}
      type={type}
      autoComplete="false"
      sx={{
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
      }}
      {...props}
    />
  )
}

export default memo(InputFields)
