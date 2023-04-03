import { ReactNode } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import PieChartIcon from '@mui/icons-material/PieChart'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ReceiptIcon from '@mui/icons-material/Receipt'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ShareIcon from '@mui/icons-material/Share'
import ArticleIcon from '@mui/icons-material/Article'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MailIcon from '@mui/icons-material/Mail'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LockIcon from '@mui/icons-material/Lock'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export const dashboardIcon: Record<string, ReactNode> = {
  home: <HomeIcon />,
  chartBar: <SignalCellularAltIcon />,
  chartPie: <PieChartIcon />,
  truck: <LocalShippingIcon />,
  user: <AccountCircleIcon />,
  users: <PeopleIcon />,
  shoppingBag: <ShoppingBagIcon />,
  shoppingCart: <ShoppingCartIcon />,
  receipt: <ReceiptIcon />,
  officeBuilding: <ApartmentIcon />,
  share: <ShareIcon />,
  blog: <ArticleIcon />,
  clipboard: <AssignmentIcon />,
  mail: <MailIcon />,
  chat: <QuestionAnswerIcon />,
  calendar: <CalendarTodayIcon />,
  lockClose: <LockIcon />,
  creditCard: <CreditCardIcon />,
  cash: <AccountBalanceWalletIcon />,
  xCircle: <HighlightOffIcon />,
}
