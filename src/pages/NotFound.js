import React from 'react'

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 - Not Found</h1>
      <p>
        You're out of usable pokémon, so you gotta run back to the nearest
        pokémon center
      </p>
      <p>You also lost some cash.</p>
      <img
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8c%2Fef%2Fc2%2F8cefc23a961736ece0904a4fd0d2a89c.png&sp=1710783216Tb2a3a5fa65b380ab133027ca3fb077672ecf8a349663285571af00ca62b0989a"
        alt="confused psyduck"
        className="Img404"
      />
    </div>
  )
}

export default NotFound
