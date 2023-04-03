import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import TableCheckbox, { ITableCheckbox } from '@components/CheckBoxTable'

// Mocks data
import { MOCK_DATA_CUSTOMERS } from '@constants/mockData'

export default {
  title: 'Component/TableCheckbox',
  component: TableCheckbox,
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
} as ComponentMeta<typeof TableCheckbox>

const Template: ComponentStory<typeof TableCheckbox> = (args) => (
  <TableCheckbox {...args} />
)

export const TableCheckboxComponent = Template.bind({})
const tableCheckboxComponent: ITableCheckbox = {
  rows: MOCK_DATA_CUSTOMERS,
}
TableCheckboxComponent.args = tableCheckboxComponent
