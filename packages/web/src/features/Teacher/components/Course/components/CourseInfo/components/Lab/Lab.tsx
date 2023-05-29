import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useLocation, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ModalInfo } from './ModalInfo';
import { useAppDispatch } from '../../../../../../../../store/hooks';
import { useAppSelector } from '../../../../../../../../store/hooks';
import { httpClient } from 'packages/web/src/features/services/httpClient';
import { useLab } from './useLab';
import { labApi } from './labApi';

export const Lab = () => {
  const [status, setStatus] = React.useState('unchecked');
  const [open, setOpen] = React.useState(false);
  const [students, setStudents] = React.useState([]);

  // const students = useAppSelector((state) => state.students.students);
  // const dispatch = useAppDispatch();

  const location = useLocation();
  const { getStudents } = useLab(labApi(httpClient));

  useEffect(() => {
    const res = getStudents();
    console.log(res);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-status-label">Status</InputLabel>
        <Select
          labelId="select-status-label"
          id="select-status"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'checked'}>checked</MenuItem>
          <MenuItem value={'unchecked'}>unchecked</MenuItem>
          <MenuItem value={'all'}>all</MenuItem>
        </Select>
      </FormControl>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Mark</TableCell>
            <TableCell align="center">Checked</TableCell>
            <TableCell align="right">Сheck</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students
            .filter((row: any) => row.checked === status || status === 'all')
            .map((row: any) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  onClick={() =>
                    navigate(
                      '/api/teacher/:teacherId/course/:courseId/lab/:labId/'
                    )
                  }
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
                <TableCell align="center">{row.checked}</TableCell>
                <TableCell align="right">
                  <button onClick={handleClick}>check hero</button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <ModalInfo open={open} onClose={handleClose}></ModalInfo>
    </>
  );
};
