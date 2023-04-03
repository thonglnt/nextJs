import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import RegisterForm from '@components/RegisterForm'

export default {
  title: 'Component/RegisterForm',
  component: RegisterForm,
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
} as ComponentMeta<typeof RegisterForm>

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
)

export const RegisterFormComponent = Template.bind({})
const registerFormComponent = {}

RegisterFormComponent.args = registerFormComponent
