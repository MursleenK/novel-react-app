import "../css/Favorites.css"
import { useNovelContext } from "../contexts/NovelContext"
import NovelCard from "../components/NovelCard"

//The states defined in Home.jsx is are only relevat there and won't carry over to Favorites.jsx. For global state->useContext.
//useContext allows state to be globally available to anything  within provided context. 
//UseContext is better than prop drilling, which means taking the state and passing it as props for various componenets.

function Favorites(){
    const {favorites} = useNovelContext()

    if(favorites) {
        return (
            <div className="favorites"> 
                <h2>You favorites</h2>
                <div className="novels-grid">
                    {favorites.map(
                        novel=><NovelCard novel={novel} key={novel.id}/>
                        )}
                </div>
            </div>
        )
    }

    return(
        <div className="favorites-empty">
            <h2>No favorites yet!</h2>
            <p>You favorite novels will appear here.</p>
        </div>

    )
}

export default Favorites