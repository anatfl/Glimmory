const Memory = require('../models/MemoryModel');

// ---------- Helpers ----------

const padWithZeros = (n) => String(n).padStart(2, '0');

const toHebrewDate = (d) => {
  const dt = new Date(d);
  return `${padWithZeros(dt.getDate())}.${padWithZeros(dt.getMonth()+1)}.${dt.getFullYear()}`;
};

const toDTO = (doc) => ({
  id: String(doc._id),
  title: doc.title,
  description: doc.description ?? '',
  date: doc.date,
  dateHeb: toHebrewDate(doc.date)
});


// ---------- Controllers ----------

// Get all memories
const getAllMemories = async (req, res) => {
    try {
        const memories = await Memory.find().sort({ date: -1, _id: -1 }).lean();;
        res.status(200).json({memories: memories.map(toDTO)});
    } catch (err) {
        res.status(500).json({mssg: 'error getting Memories', err})
    }
}

// Add new memory
const addNewMemory = async (req, res) => {
    try {
        const {title, date, description} = req.body;
        const memory = await Memory.create({title, date, description});
        res.status(201).json({memory: toDTO(memory)});
    } catch (err) {
        res.status(500).json({mssg: 'error adding new memory', err})
    }
}

module.exports = {
    getAllMemories,
    addNewMemory
}
