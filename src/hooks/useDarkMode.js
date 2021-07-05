import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage();

    useEffect(() => {
        if(value){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [value])
    return [value, setValue]
}