import Job from '../models/JobModel'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../error/index.js';

const createJob = async (req, res) => {
    const { position, company } = req.body

    if( !position || !company){
        throw new BadRequestError('Please Provide all Values')
    } 
}

const getAllJobs = async (req, res) => {
    res.send('get all job')
}

const updateJob = async (req, res) => {
    res.send('update job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}

const showStatus = async (req, res) => {
    res.send('show status')
}

export {
    createJob,
    getAllJobs,
    updateJob,
    deleteJob,
    showStatus
}