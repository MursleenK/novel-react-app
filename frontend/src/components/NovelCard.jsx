//Best practice to saparate you components and other stuff.
//class is reserved keyword in HTML, so we use className
import "../css/NovelCard.css"
import { useNovelContext } from "../contexts/NovelContext"

function NovelCard({novel}) {
    const {isFavorite, addFavorite, removeFavorite} = useNovelContext()
    const favorite = isFavorite(novel.id)
    
    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFavorite(novel.id)
        else addFavorite(novel)
    }
    return (
        <div className="novel-card">
            <div className="novel-poster">
                <img src={novel.volumeInfo.imageLinks?.thumbnail  || "https://via.placeholder.com/150"} alt={novel.volumeInfo.title}/>
                <div className="novel-overlay">
                    <button className={`favorite-btn ${favorite? "active": ""}`} onClick={onFavoriteClick}>
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="novel-info">
                <h3>{novel.volumeInfo.title}</h3>
                <p>{novel.volumeInfo.publishedDate?.split("-")[0]}</p>
            </div>

        </div>
    )

}
//Syntax for default export. One that you use with "default" keyword.
export default NovelCard
//Syntax for names export: export NovelCard