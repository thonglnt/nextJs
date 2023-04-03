import { memo } from 'react'
import { FormControlLabel, Switch, SwitchProps } from '@mui/material'

export interface ISwitchLabels extends SwitchProps {
  label?: string
}
const SwitchLabels = ({ label, ...props }: ISwitchLabels) => {
  return (
    <FormControlLabel
      control={<Switch color="secondary" {...props} />}
      label={label}
    />
  )
}
export default memo(SwitchLabels)
