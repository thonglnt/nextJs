import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import CollapsibleTable, {
  ICollapsibleTable,
  IRow,
} from '@components/CollapsibleTable'
import { MOCK_DATA_PRODUCTS } from '@constants/mockData'

export default {
  title: 'Component/CollapsibleTable',
  component: CollapsibleTable,
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
} as ComponentMeta<typeof CollapsibleTable>

const Template: ComponentStory<typeof CollapsibleTable> = (args) => (
  <CollapsibleTable {...args} />
)

export const CollapsibleTableComponent = Template.bind({})
const collapsibleTableComponent: ICollapsibleTable = {
  rows: MOCK_DATA_PRODUCTS as IRow[],
}
CollapsibleTableComponent.args = collapsibleTableComponent
