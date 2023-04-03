import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import InputFields, { IInputFields } from '@components/Input'

export default {
  title: 'Component/Input',
  component: InputFields,
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
} as ComponentMeta<typeof InputFields>

const Template: ComponentStory<typeof InputFields> = (args) => (
  <InputFields {...args} />
)

export const InputComponent = Template.bind({})
const inputComponent: IInputFields = {
  label: 'Input Label',
  name: 'input',
}
InputComponent.args = inputComponent

export const InputErrorComponent = Template.bind({})
const inputErrorComponent: IInputFields = {
  label: 'Input Label',
  name: 'input',
  errorMsg: 'error',
}
InputErrorComponent.args = inputErrorComponent

export const InputNumberComponent = Template.bind({})
const inputNumberComponent: IInputFields = {
  label: 'Input Label',
  name: 'input',
  type: 'number',
}
InputNumberComponent.args = inputNumberComponent

export const InputDisableComponent = Template.bind({})
const inputDisableComponent: IInputFields = {
  label: 'Input Label',
  name: 'input',
  disabled: true,
}
InputDisableComponent.args = inputDisableComponent
