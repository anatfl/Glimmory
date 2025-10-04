const express = require('express');
const { getAllMemories, addNewMemory } = require('../controllers/memoryController')

 const router = express.Router()

/**
 * Read Only Permission Routes
 */
// GET all memories
router.get('/', getAllMemories)


/**
 * Read and Write Permission Routes
 */
// POST a new memory
router.post('/', addNewMemory)


module.exports = router