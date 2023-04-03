import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// Types
import theme from '@self-types/Themes.types'

// Components
import Button, { IButtonProps } from '@components/Button'

export default {
  title: 'Component/Button',
  component: Button,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
const defaultButton: IButtonProps = {
  variant: 'contained',
  children: 'Button',
  sx: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
DefaultButton.args = defaultButton

export const PreviousButton = Template.bind({})
const previousButton: IButtonProps = {
  variant: 'contained',
  children: 'Back',
  endIcon: <ArrowBackIcon />,
  sx: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
PreviousButton.args = previousButton

export const NextButton = Template.bind({})
const nextButton: IButtonProps = {
  variant: 'contained',
  children: 'Next',
  startIcon: <ArrowForwardIcon />,
  sx: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
NextButton.args = nextButton
