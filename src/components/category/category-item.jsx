import './styles/categories.css'

const Directories = ({categories}) => {    
    return (

        <main className = 'categories-container'>
        {
          categories.map( ({ id, title, imageUrl }) => {
            return (
              <div className = 'directory' key = { id } >

                <div className="background-image" style = {{ backgroundImage: `url(${imageUrl})` }} />
                
                <div className="directory-container">
                  <h2 className = "title" > { title } </h2>
                  <p className = "subtext" > Shop Now </p>
                </div>

              </div>
            )
          } )
        }
        </main>
  )
}

export default Directories