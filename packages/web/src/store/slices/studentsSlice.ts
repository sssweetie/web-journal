import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Student {
  id: any;
  name: string;
}

interface Labs {
  id: any;
  name: string;
}

interface IInitialState {
  students: Student[];
  labs: Labs[];
}

const initialState: IInitialState = {
  students: [
    { id: '133', name: 'Токарев А.А.' },
    { id: '132', name: 'Иванов И.И.' },
  ],
  labs: [
    { id: 'qwe', name: 'Лабораторная 1 - слом костей' },
    {
      id: 'abc',
      name: 'Лабораторная 2 - знай своё место',
    },
  ],
};

const studentsSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    removeStudent(state, action) {
      state.students.filter(
        (student: Student) => student.id !== action.payload.id
      );
    },
    addStudent(state, action: PayloadAction<any>) {
      state.students.push(action.payload.student);
    },
    getStudents(state, action) {
   
    },
  },
});

export const { removeStudent, addStudent, getStudents } = studentsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default studentsSlice.reducer;
