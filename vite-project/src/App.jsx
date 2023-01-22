
import { useState } from 'react'
import './App.css'

import starEmpty from './assets/star-empty.png'
import starFull from './assets/star-filled.png'
import user from './assets/user.png'

function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })
  
  let starIcon = contact.isFavorite ? starFull : starEmpty

  function toggleFavorite() {
    setContact(prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
}

  return (
    <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
  )
}

export default App
