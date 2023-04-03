import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import AlertDialog, { IAlertDialog } from '@components/Dialog'

export default {
  title: 'Component/Dialog',
  component: AlertDialog,
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
} as ComponentMeta<typeof AlertDialog>

const Template: ComponentStory<typeof AlertDialog> = (args) => (
  <AlertDialog {...args} />
)

export const DialogComponent = Template.bind({})
const dialogComponent: IAlertDialog = {
  isOpen: true,
  title: 'Dialog Title',
  content: 'DiaLog Content',
  cancelTitle: 'Cancel',
  confirmTitle: 'Submit',
}
DialogComponent.args = dialogComponent
