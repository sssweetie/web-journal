import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ModalInfo } from './ModalInfo';
import { Button } from '@mui/material';
import { useCourse } from '../../hooks/useCourse';
import { courseApi } from '../../api/courseApi';
import { httpClient } from 'packages/web/src/features/services/httpClient';

export const Lab = () => {
  const [status, setStatus] = React.useState('Проверено');
  const [open, setOpen] = React.useState(false);
  const [homework, setHomework] = React.useState<any>({});
  const { students, getStudents } = useCourse(courseApi(httpClient));

  // Отфильтровать таблицу
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  // Открыть модальное окно
  const handleClick = (row: any) => {
    setOpen(true);
    setHomework({
      id: row._id,
      comment: row.comment,
      additional: row.additional,
      mark: row.mark,
    });
  };

  // Закрыть модальное окно
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // Таблица домашних работ + модальное окно с проверкой домашних работ
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
            <TableCell align="center">Проверить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students &&
            students
              .filter((row: any) => row.checked === status || status === 'Все')
              .map((row: any) => (
                <TableRow
                  id={row._id}
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell
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
                  <TableCell align="center">
                    <Button variant="outlined" onClick={() => handleClick(row)}>
                      Проверить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <ModalInfo
        open={open}
        homework={homework}
        onClose={handleClose}
        getStudents={getStudents}
      />
    </>
  );
};
