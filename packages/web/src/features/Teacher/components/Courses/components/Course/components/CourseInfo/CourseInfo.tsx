import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCourse } from './hooks/useCourse';
import { courseApi } from './api/courseApi';
import { Button } from '@mui/material';
import { ModalEditLab } from './components/ModalEditLab';
import { httpClient } from 'packages/web/src/features/services/httpClient';
import { Docx } from './components/ModalEditLab/components/Docx';
import * as S from './styled';
import { FileDB } from '@web-journal/libs';

export const CourseInfo = () => {
  const [open, setOpen] = useState(false);
  const { courseInfo, statement } = useCourse(courseApi(httpClient));
  const [files, setFiles] = useState<FileDB[]>([]);
  const [targetId, setTargetId] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };

  const onClick = async (lab: any) => {

    // query параметры для навигации на другую страницу
    const studentsId = lab.homework.map((homework: any) => homework._id);

    navigate(
      `${location.pathname}/lab/${lab._id}?students=${studentsId.join(',')}`,
      {
        state: {
          students: statement,
        },
      }
    );
  };

  return (
    // Таблица с лабораторными работами + редактированием лабораторных работ
    <S.Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Урок</TableCell>
            <TableCell align="center">Средний балл</TableCell>
            <TableCell align="center">Максимальный балл</TableCell>
            <TableCell align="center">Редактировать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseInfo &&
            courseInfo.labs.map((lab: any) => {
              const sum = lab.homework.reduce(
                (acc: number, cur: any) => (acc += cur.mark),
                0
              );

              const average =
                lab.homework.length > 0 ? sum / lab.homework.length : 0;

              return (
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
                  <TableCell align="center">{average}</TableCell>
                  <TableCell align="center">{lab.maxMark}</TableCell>
                  <TableCell align="center">
                    <Button
                      id={lab._id}
                      variant="outlined"
                      onClick={(e: any) => {
                        setOpen(true);
                        setTargetId(e.target.id);

                        const res = courseInfo.labs.find(
                          (lab: any) => lab._id === e.target.id
                        );
                        setFiles(res.file);
                      }}
                    >
                      Редактировать
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Button
        style={{ width: '100%', height: '50px' }}
        variant="outlined"
        onClick={() => Docx(statement)}
      >
        Распечатать ведомость
      </Button>
      <ModalEditLab
        isOpen={open}
        onClose={onClose}
        labId={targetId}
        files={files}
      />
    </S.Wrapper>
  );
};
