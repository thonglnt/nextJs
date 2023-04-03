import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Selects, { ISelects } from '@components/Select'

export default {
  title: 'Component/Selects',
  component: Selects,
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
} as ComponentMeta<typeof Selects>

const Template: ComponentStory<typeof Selects> = (args) => <Selects {...args} />

export const SelectComponent = Template.bind({})
const selectComponent: ISelects = {
  options: [
    {
      value: 1,
      title: 'category 1',
    },
    {
      value: 2,
      title: 'category 2',
    },
    {
      value: 3,
      title: 'category 3',
    },
    {
      value: 4,
      title: 'category 4',
    },
  ],
  label: 'Category',
}
SelectComponent.args = selectComponent

export const SelectHelperComponent = Template.bind({})
const selectHelperComponent: ISelects = {
  options: [
    {
      value: 1,
      title: 'category 1',
    },
    {
      value: 2,
      title: 'category 2',
    },
    {
      value: 3,
      title: 'category 3',
    },
    {
      value: 4,
      title: 'category 4',
    },
  ],
  label: 'Category',
  helperText: 'helper text',
}
SelectHelperComponent.args = selectHelperComponent

export const SelectErrorComponent = Template.bind({})
const selectErrorComponent: ISelects = {
  options: [
    {
      value: 1,
      title: 'category 1',
    },
    {
      value: 2,
      title: 'category 2',
    },
    {
      value: 3,
      title: 'category 3',
    },
    {
      value: 4,
      title: 'category 4',
    },
  ],
  label: 'Category',
  errorMsg: 'Error',
}
SelectErrorComponent.args = selectErrorComponent
