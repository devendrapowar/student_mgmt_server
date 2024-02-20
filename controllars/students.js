
import { v4 as uuidv4 } from "uuid";

const students = [
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      id: 's1',
      name: 's123',
      age: 32,
      email: 'test@test.com',
      number: '12457654',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      id: 's2',
      name: 's234',
      age: 12,
      email: 'test@test.com',
      number: '12457654',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      id: 's3',
      name: 's345',
      age: 23,
      email: 'test@test.com',
      number: '12457654',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      id: 's4',
      name: 's456',
      age: 38,
      email: 'test@test.com',
      number: '12457654',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      id: 's5',
      name: 's45654',
      age: 18,
      email: 'test@test.com',
      number: '12457654',
    },
  ];

export const getStudents = (req, res) => {
    res.send(students);
}

export const createStudent = (req, res) => {
    const student = req.body;
    students.unshift({ ...student, id: uuidv4() });
    res.send(students);
}

export const getStudentDetails = (req, res) => {
    const paramId = req.params?.id;
    const std = students.find((std) => std.id.toString() === paramId.toString());
    console.log(std);
    if(!std){
        res.send('Please check the ID');
    }

    res.send(std);
}

export const deleteStudent = (req, res) => {
    const paramId = req.params?.id;
    const stdIdx = students.findIndex((std) => std.id.toString() === paramId.toString());
    students.splice(stdIdx, 1);
    res.send(students);
}

export const updateStudent = (req, res) => {
    const paramId = req.params?.id;
    const stdIdx = students.findIndex((std)=> std.id.toString() === paramId.toString());
    students[stdIdx] = {...req.body, id: paramId};
    res.send(students);
}