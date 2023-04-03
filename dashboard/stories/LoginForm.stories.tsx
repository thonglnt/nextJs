import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import LoginForm from '@components/LoginForm'

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
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
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const LoginFormComponent = Template.bind({})
const loginFormComponent = {}

LoginFormComponent.args = loginFormComponent
