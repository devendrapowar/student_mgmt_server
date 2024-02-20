import express from "express";
import { createStudent, deleteStudent, getStudentDetails, getStudents, updateStudent } from "../controllars/students.js";

const router = express.Router();
// Get all students list
router.get('/students', getStudents);

// Create new User list
router.post('/students', createStudent);

// Get student details by id
router.get('/students/:id', getStudentDetails);


// Delete student by id
router.delete('/students/:id', deleteStudent);

// Update student by id
router.patch('/students/:id', updateStudent);

export default router;