import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ModalInfo } from './ModalInfo';

export const Lab = () => {
  const [status, setStatus] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const navigate = useNavigate();

  function createData(name: string, date: string, mark: string) {
    return { name, date, mark };
  }

  const rows = [
    createData('Токарев А.А.', '16.05.2023', '10'),
    createData('Токарев А.А.', '16.05.2023', '10'),
    createData('Токарев А.А.', '16.05.2023', '10'),
  ];

  const clickHandler = () => {
    setOpen(true);
  };

  const onClick = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-status-label">Age</InputLabel>
        <Select
          labelId="select-status-label"
          id="select-status"
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'checked'}>checked</MenuItem>
          <MenuItem value={'unchecked'}>unchecked</MenuItem>
        </Select>
      </FormControl>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Mark</TableCell>
            <TableCell align="right">Сheck</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                onClick={() => navigate('/api/teacher/course/lab')}
                component="th"
                scope="row"
                sx={{
                  '&:hover': { cursor: 'pointer' },
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.mark}</TableCell>
              <TableCell align="right">
                <button onClick={onClick}>check hero</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalInfo open={open} onClose={onClose}></ModalInfo>
    </>
  );
};
