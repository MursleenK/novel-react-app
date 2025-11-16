import NovelCard from "../components/NovelCard"
import {useState, useEffect} from "react" //referred to as a HOOK. Allows to define a piece of state.
import "../css/Home.css"
import { searchBooks, getFeaturedBooks } from "../services/api"
//useEffect allows you to add side effect to you functions/compo and define when they run. 
function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    //const [name_of_the_state, function_to_change_state] 
    const[novels, setNovels] = useState([])
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(true)

    //useEffect runs once when the component loads, triggers the API call, updates the novels state with the fetched books, 
    // and then stops the loading state so the UI switches from “Loading…” to showing the books.
   useEffect(()=>{
    const loadFeatured = async () => {
        try{
            const featuredBooks = await getFeaturedBooks()
            setNovels(featuredBooks)
        } catch (err) {
            console.log(err)
            setError("Failer to load novels...")
        }
        finally{
            setLoading(false)
        }
    }
    loadFeatured()
   }, [])
   //()=>{} function. The function runs if DA changes.
   //[] dependency array(DA). We check DA with every rerender. 


    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const result = await searchBooks(searchQuery)
            setNovels(result)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search...")
        }finally{
            setLoading(false)
        }
    }  

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for novels..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                />
            <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? 
            <div className="loading">Loading results...</div>
            :
            <div className="novels-grid">
                {novels.map(
                    novel=><NovelCard novel={novel} key={novel.id}/>
                    )}
            </div>
            }

        </div>

    )
}

export default Home
