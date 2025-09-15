const express = require('express');
const { getAllMemories
 } = require('../controllers/memoryController')

 const router = express.Router()

/**
 * Read Only Permission Routes
 */
// GET all memories
router.get('/', getAllMemories)

module.exports = router