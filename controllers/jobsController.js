const createJob = async (req, res) => {
    res.send('create job')
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