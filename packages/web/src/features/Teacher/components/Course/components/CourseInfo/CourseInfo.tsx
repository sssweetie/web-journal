import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useCourse } from './useCourse';
import { courseApi } from './courseApi';
import { httpClient } from '../../../../../services/httpClient';

// interface ILab {
//   pass: IPass[];
//   unpass: IUnpass[];
//   name: string;

// }

export const CourseInfo = () => {
  const navigate = useNavigate();

  const onClick = (lab: any) => {
    const studentsId = lab.passed
      .concat(lab.unpassed)
      .map((homework: any) => homework._id);

    navigate(
      `${location.pathname}/lab/${lab._id}?students=${studentsId.join(',')}`,
      {
        state: {
          passed: lab.passed,
          unpassed: lab.unpassed,
        },
      }
    );
  };

  const { courseInfo } = useCourse(courseApi(httpClient));
  const location = useLocation();
  console.log(courseInfo);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Lesson</TableCell>
          <TableCell align="center">Max Mark</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {courseInfo.labs?.map((lab: any) => (
          <TableRow
            key={lab.name}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              '&:nth-of-type(odd)': { backgroundColor: '#F9F9FA' },
            }}
          >
            <TableCell
              onClick={() => onClick(lab)}
              component="th"
              scope="row"
              sx={{
                '&:hover': { cursor: 'pointer' },
              }}
            >
              {lab.name}
            </TableCell>
            <TableCell align="center">{lab.maxMark}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
