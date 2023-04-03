'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from '@mui/material'
// Components
import Breadcrumbs from '@components/Breadcrumbs'
import Input from '@components/Input'
import Switch from '@components/Switch'
import Selects from '@components/Select'

// Types
import { IProduct } from '@self-types/index'

// Constants
import { NAME_REQUIRED } from '@constants/errorMessage'
import { MOCK_LIST_CATEGORY } from '@constants/mockData'

const CreateProductPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IProduct>()

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log('data', data)
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '64px 0',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="h2"
          fontSize="32px"
          lineHeight="38px"
          fontWeight={800}
        >
          Create a new product
        </Typography>

        <Breadcrumbs
          title="Create"
          sx={{
            marginTop: '8px',
          }}
        />
      </Box>

      {/* Basic Details */}
      <Card
        sx={{
          marginTop: '32px',
          padding: '32px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          width="30%"
        >
          Basic details
        </Typography>
        <Box width="70%" display="flex" flexDirection="column" gap="24px">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Input
                label="Product Name"
                error={!!errors.name}
                errorMsg={NAME_REQUIRED}
                type="text"
                fullWidth
                autoFocus={false}
                {...field}
              />
            )}
          />
          <Typography>Description</Typography>
          <TextField
            placeholder="write something"
            multiline
            rows={5}
            maxRows={Infinity}
          />
        </Box>
      </Card>

      {/* Pricing */}
      <Card
        sx={{
          marginTop: '32px',
          padding: '32px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          width="30%"
        >
          Pricing
        </Typography>
        <Box width="70%" display="flex" flexDirection="column" gap="24px">
          <Controller
            name="oldPrice"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Input
                label="Old Price"
                error={!!errors.oldPrice}
                errorMsg={errors.oldPrice && errors.oldPrice.message}
                type="number"
                fullWidth
                autoFocus={false}
                {...field}
              />
            )}
          />
          <Controller
            name="newPrice"
            control={control}
            defaultValue="0"
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Input
                label="New Price"
                error={!!errors.newPrice}
                errorMsg={errors.newPrice && errors.newPrice.message}
                type="number"
                fullWidth
                autoFocus={false}
                {...field}
              />
            )}
          />
          <Box display="flex" alignItems="center">
            <Switch defaultChecked />
            <Typography fontSize="16px">
              Keep selling when stock is empty
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Category */}
      <Card
        sx={{
          marginTop: '32px',
          padding: '32px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          width="30%"
        >
          Category
        </Typography>
        <Box width="70%" display="flex" flexDirection="column" gap="24px">
          <Controller
            name="oldPrice"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Selects
                options={MOCK_LIST_CATEGORY}
                label="Category"
                error={!!errors.oldPrice}
                errorMsg={errors.oldPrice && errors.oldPrice.message}
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            name="barcode"
            control={control}
            defaultValue={925487986526}
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Input
                label="Barcode"
                error={!!errors.barcode}
                errorMsg={errors.barcode && errors.barcode.message}
                type="number"
                fullWidth
                autoFocus={false}
                disabled
                {...field}
              />
            )}
          />
          <Controller
            name="sku"
            control={control}
            defaultValue="IYV-8745"
            rules={{
              required: { value: true, message: NAME_REQUIRED },
            }}
            render={({ field }) => (
              <Input
                label="SKU"
                error={!!errors.sku}
                errorMsg={errors.sku && errors.sku.message}
                type="text"
                fullWidth
                autoFocus={false}
                disabled
                {...field}
              />
            )}
          />
        </Box>
      </Card>
      <Box display="flex" justifyContent="end" marginTop="24px" gap="10px">
        <Button
          sx={{
            textTransform: 'capitalize',
          }}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
          }}
          color="secondary"
          variant="contained"
        >
          Create
        </Button>
      </Box>
    </Container>
  )
}

export default CreateProductPage
