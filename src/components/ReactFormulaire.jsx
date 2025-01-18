import React, { useState } from 'react'

function ReactFormulaire() {
    const [formulaire, setformulaire] = useState({})
    function saveInfomation(e) {
        e.preventDefault()
        // Using form data
        const formData = new FormData(e.target)
        const items = Object.fromEntries(formData)
        setformulaire(items)
    }

    // Si on n a besoin element par element
    function handleChange(e) {
        setformulaire({...formulaire, [e.target.name]: e.target.value })
    }
  return (
      <div>
          <h1>Formulaire</h1>
          <form action="" onSubmit={saveInfomation} >
              🚚<div><label htmlFor="nom"> 🅰️Nom</label>
                  <input type="text" id="nom" name="nom"
                  />
              </div>
              🚚<div><label htmlFor="prenom"> Prenom</label>
                  <input type="text" id="prenom" name="prenom"
                  />
              </div>
              <div>
                  <button>Save Forme</button>
              </div>
        </form>
    </div>
  )
}

export default ReactFormulaire