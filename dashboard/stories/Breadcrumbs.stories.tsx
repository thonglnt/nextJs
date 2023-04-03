import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import BasicBreadcrumbs, { IBreadcrumbs } from '@components/Breadcrumbs'

export default {
  title: 'Component/Breadcrumbs',
  component: BasicBreadcrumbs,
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
} as ComponentMeta<typeof BasicBreadcrumbs>

const Template: ComponentStory<typeof BasicBreadcrumbs> = (args) => (
  <BasicBreadcrumbs {...args} />
)

export const BreadcrumbsComponent = Template.bind({})
const breadcrumbsComponent: IBreadcrumbs = {
  title: 'Products',
}
BreadcrumbsComponent.args = breadcrumbsComponent
