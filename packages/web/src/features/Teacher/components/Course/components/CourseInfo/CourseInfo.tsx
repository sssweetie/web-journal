import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

export const CourseInfo = () => {
  const navigate = useNavigate();

  function createData(name: string, calories: number, fat: string) {
    return { name, calories, fat };
  }

  const rows = [
    createData('Лабораторная работа 1: Искривление позвоночника', 15, '70%'),
    createData('Лабораторная работа 2: Искривление позвоночника', 15, '70%'),
    createData('Лабораторная работа 3: Искривление позвоночника', 15, '70%'),
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Lesson</TableCell>
          <TableCell align="center">Mark</TableCell>
          <TableCell align="right">Percentage</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              '&:nth-of-type(odd)': { backgroundColor: '#F9F9FA' },
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
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
