'use client'

import { ChangeEvent, memo, MouseEvent, useState } from 'react'
import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Components
import Button from '@components/Button'
import Avatar from '@components/Avatar'
import CardHeader from '@components/CardHeader'

export interface ITableCheckbox {
  rows: {
    name: string
    location: string
    orders: number
    spends: number
    img: string
    email: string
  }[]
}

interface HeadCell {
  id: string
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    id: 'location',
    numeric: false,
    label: 'Location',
  },
  {
    id: 'orders',
    numeric: true,
    label: 'orders',
  },
  {
    id: 'spent',
    numeric: true,
    label: 'Spent',
  },
  {
    id: 'actions',
    numeric: true,
    label: 'Actions',
  },
]

interface EnhancedTableProps {
  numSelected: number
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void
  rowCount: number
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const theme = useTheme()
  const { onSelectAllClick, numSelected, rowCount } = props

  return (
    <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {numSelected > 0 ? (
          <TableCell
            align="left"
            padding="none"
            sx={{
              textTransform: 'uppercase',
              width: '100%',
            }}
            colSpan={5}
          >
            <Button sx={{ padding: 0 }}>delete</Button>
            <Button>edit</Button>
          </TableCell>
        ) : (
          headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              padding="none"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              {headCell.label}
            </TableCell>
          ))
        )}
      </TableRow>
    </TableHead>
  )
}

const TableCheckbox = ({ rows }: ITableCheckbox) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState<readonly string[]>([])

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="secondary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          onClick={(event) => handleClick(event, row.name)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          display: 'flex',
                          gap: '10px',
                          height: '59.5px',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar src={row.img} type="normal" />
                        <CardHeader title={row.name} desc={row.email} />
                      </TableCell>
                      <TableCell padding="none" align="left">
                        {row.location}
                      </TableCell>
                      <TableCell align="center">{row.orders}</TableCell>
                      <TableCell align="center">{row.spends}</TableCell>
                      <TableCell align="center">
                        <MoreVertIcon fontSize="small" />
                      </TableCell>
                    </TableRow>
                  )
                })}
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
    </Box>
  )
}

export default memo(TableCheckbox)
