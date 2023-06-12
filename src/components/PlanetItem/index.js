// // Write your code here
// import './index.css'

// const PlanetItem = props => {
//   const {eachPlanet} = props
//   const {name, imageUrl, description} = eachPlanet
//   return (
//     <div className="listContainer">
//       <center>
//         <h1>PLANETS</h1>
//         <img src={imageUrl} alt={`planet ${name}`} />
//         <h2>{name}</h2>
//         <p>{description}</p>
//       </center>
//     </div>
//   )
// }
// export default PlanetItem
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
