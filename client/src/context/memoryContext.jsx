import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const MemoryContext = createContext();

const MemoriesProvider = ({ children }) => {
    const [memories, setMemories] = useState(null);

    const getMemories = async () => {
        try {
            const response = await api.get('/memories');
            setMemories(response.data);
        } catch (error) {
            console.error('Error fetching Memories:', error);
        }
    };

    useEffect(() => {
        getMemories();
    }, []);

    return (
        <MemoryContext.Provider value={{ memories, getMemories }}>
            {children}
        </MemoryContext.Provider>
    );
};

export { MemoryContext, MemoriesProvider };
