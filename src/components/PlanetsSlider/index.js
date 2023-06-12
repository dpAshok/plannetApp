// // Write your code here

// import Slider from 'react-slick'

// import PlanetItem from '../PlanetItem'

// const PlanetsSlider = props => {
//   const {planetsList} = props
//   //   const settings = {
//   //     dots: true,
//   //     slidesToShow: 1,
//   //     slidesToScroll: 1,
//   //     dotsClass: 'slick-dots',
//   //   }
//   //   const {id, name, imageUrl, description} = planetsList
//   return (
//     <div className="slider-container" data-testId="planets">
//       <Slider>
//         {planetsList.map(eachPlanet => (
//           <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default PlanetsSlider

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slickToScroll: 2,
    slickToShow: 2,
    dots: true,
  }

  return (
    <div className="planets-app-container" data-testId="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
