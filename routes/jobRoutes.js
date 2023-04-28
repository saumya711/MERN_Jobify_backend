import express from "express";
import { createJob, deleteJob, getAllJobs, showStatus, updateJob } from "../controllers/jobsController.js";
const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
// remember about :id
router.route('/status').get(showStatus)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router