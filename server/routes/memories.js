const express = require('express');
const { getAllMemories, 
    addNewMemory, 
    deleteMemory } = require('../controllers/memoryController')

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


/**
 * Read and Write Permission Routes
 */
// DELETE a memory
router.delete('/:id', deleteMemory);


module.exports = router