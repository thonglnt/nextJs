import {
  Box,
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ChangeEvent, memo, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Components
import Input from '@components/Input'
import Switch from '@components/Switch'
import Select from '@components/Select'
import CardHeader from '@components/CardHeader'

// Constants
import { MOCK_LIST_CATEGORY } from '@constants/mockData'
import Image, { StaticImageData } from 'next/image'

export interface IRow {
  name: string
  image: string | StaticImageData
  stock: number
  price: number
  sku: string
  status: 'published' | 'draft'
  category: string
  oldPrice: number
  barcode: string
  isActive: boolean
}

export interface ICollapsibleTable {
  rows: IRow[]
}

const Row = (props: IRow) => {
  const [open, setOpen] = useState(false)

  const {
    name,
    stock,
    price,
    sku,
    status,
    category,
    oldPrice,
    barcode,
    isActive,
    image,
  } = props

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell
          component="th"
          scope="row"
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Image src={image} alt={name} width={80} height={80} />
          <CardHeader title={name} desc={`in ${category}`} />
        </TableCell>
        <TableCell align="center">{stock}</TableCell>
        <TableCell align="center">{price}</TableCell>
        <TableCell align="center">{sku}</TableCell>
        <TableCell align="center">{status}</TableCell>
        <TableCell align="center">
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Basic details</TableCell>
                    <TableCell>Pricing and stocks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell width="50%">
                      <Input
                        name="input"
                        label="Product name"
                        defaultValue={name}
                        sx={{
                          width: '350px',
                        }}
                      />
                      <Input
                        name="input"
                        label="SKU"
                        defaultValue={sku}
                        sx={{
                          width: '350px',
                          marginLeft: '30px',
                        }}
                        disabled
                      />
                    </TableCell>
                    <TableCell width="50%">
                      <Input
                        name="input"
                        label="Old price"
                        type="number"
                        defaultValue={oldPrice}
                        sx={{
                          width: '350px',
                        }}
                      />
                      <Input
                        name="input"
                        label="New price"
                        type="number"
                        defaultValue={price}
                        sx={{
                          width: '350px',
                          marginLeft: '30px',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width="50%">
                      <Select
                        label="Category"
                        defaultValue={category}
                        options={MOCK_LIST_CATEGORY}
                      />
                      <Input
                        name="input"
                        label="Barcode"
                        defaultValue={barcode}
                        sx={{
                          width: '350px',
                          marginLeft: '30px',
                        }}
                        disabled
                      />
                    </TableCell>
                    <TableCell colSpan={2}>
                      <Switch
                        label="Keep selling when stock is empty"
                        defaultChecked={isActive}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const CollapsibleTable = ({ rows }: ICollapsibleTable) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Sku</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: IRow) => (
                <Row key={row.name} {...row} />
              ))}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default memo(CollapsibleTable)
