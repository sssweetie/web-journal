import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate, useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ModalInfo } from './ModalInfo';
import { httpClient } from 'packages/web/src/features/services/httpClient';
import { IHomework, useLab } from './useLab';
import { labApi } from './labApi';

export const Lab = () => {
  const [status, setStatus] = React.useState('Проверено');
  const [open, setOpen] = React.useState(false);
  const [studentId, setStudentId] = React.useState('');

  const { students, getStudents } = useLab(labApi(httpClient));

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setOpen(true);
    setStudentId(id);
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
          <MenuItem value={'Проверено'}>Проверено</MenuItem>
          <MenuItem value={'Не проверено'}>Не проверено</MenuItem>
          <MenuItem value={'Все'}>Все</MenuItem>
        </Select>
      </FormControl>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Дата</TableCell>
            <TableCell align="center">Отметка</TableCell>
            <TableCell align="center">Статус проверки</TableCell>
            <TableCell align="right">Проверить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students
            .filter(
              (row: IHomework) => row.checked === status || status === 'Все'
            )
            .map((row: IHomework) => (
              <TableRow
                id={row._id}
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
                  <button onClick={() => handleClick(row._id)}>
                    check hero
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <ModalInfo
        open={open}
        studentId={studentId}
        onClose={handleClose}
        getStudents={getStudents}
      />
    </>
  );
};
