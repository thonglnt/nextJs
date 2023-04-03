import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { MOCK_PRODUCTS } from '@constants/mockData'
import Image from 'next/image'

export const LatestProducts = () => (
  <Card
    sx={{
      height: '100%',
    }}
  >
    <CardHeader
      subtitle={`${MOCK_PRODUCTS.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {MOCK_PRODUCTS.map((product, i) => (
        <ListItem divider={i < MOCK_PRODUCTS.length - 1} key={product.id}>
          <ListItemAvatar>
            <Image
              alt={product.name}
              src={product.imageUrl}
              width={48}
              height={48}
              quality={40}
              loading="eager"
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated about ${product.updatedAt}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
)
