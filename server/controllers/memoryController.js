const Memory = require('../models/MemoryModel');

// Get all memories
const getAllMemories = async (req, res) => {
    try {
        const memories = await Memory.find();
        res.status(200).json(memories);
    } catch (err) {
        res.status(400).json({mssg: 'error getting Memories', err})
    }
}

module.exports = {
    getAllMemories
}
