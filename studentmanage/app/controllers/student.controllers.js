const express = require('express');
const fs = require('fs');
const { getList, getDetailById, create, updateById, deleteById } = require('../services/student.service');
const { get } = require('http');

const getStudentList = async (req, res) => {
    const students = await getList();
    if (!students) {
        res.status(404).send({ message: 'Students not found' });
    }
    res.status(200).send(students);
}
const getStudentDetailById = async (req, res) => {
    console.log(req.params); // lấy tham số id từ url
    const { id } = req.params;
    const student = await getDetailById(id);
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
}
const createStudent = async (req, res) => {
    let student = req.body; // lấy dữ liệu từ body của request
    const studentCreated = await create(student);
    console.log('studentCreated:', studentCreated);
    res.status(201).send(studentCreated);
}
const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    const studentUpdated = await updateById(id, student);
    if (studentUpdated) {
        res.status(200).send(studentUpdated);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
}
const deleteStudentById = async (req, res) => {
    const { id } = req.params;
    const studentDeleted = await deleteById(id);
    if (studentDeleted) {
        res.status(200).send(studentDeleted);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
}

module.exports = {
    getStudentList,
    getStudentDetailById,
    createStudent,
    updateStudentById,
    deleteStudentById
}
