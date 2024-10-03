const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//Require authentication for all workouts
router.use(requireAuth);

//GET All Workouts
router.get('/', getWorkouts);

//GET Single Workout
router.get('/:id', getWorkout);

//POST New Workout
router.post('/', createWorkout);

//DELETE workout
router.delete('/:id', deleteWorkout);

//UPDATE Workout
router.patch('/:id', updateWorkout);

module.exports = router;