import { createContext, useState, useContext, useEffect } from "react";
import Favorites from "../pages/Favorites";
//children ia reserved prop. When you write a comp, children is anything that's inside that component when rendered.
//localStoreage allows us store stuff in browser.
const NovelContext = createContext()
export const useNovelContext = () => useContext(NovelContext)

export const NovelProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    }, [])
    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (novel) => {
        //can't simply do arr.push for state stuff. 
        setFavorites(prev => [...prev, novel])
    }
    const removeFavorite = (novelId) => {
        setFavorites(prev => prev.filter(novel=> novel.id !== novelId))
    }
    const isFavorite = (novelId) => {
        return favorites.some(novel=> novel.id === novelId)
    }
    const value = {
        favorites, 
        addFavorite,
        removeFavorite,
        isFavorite
    }
    return (
        <NovelContext.Provider value={value}>
            {children}
        </NovelContext.Provider>
    )
}