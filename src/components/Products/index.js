// import {Redirect} from 'react-router-dom'
import ReactPlayer from 'react-player'

import './index.css'

const Products = props => {
  const {location} = props
  const {search} = location
  //   console.log(props)
  //   console.log(location)
  //   console.log(search)
  const queryParams = new URLSearchParams(search)
  const category = queryParams.get('category')
  const subCategory = queryParams.get('subcategory')
  const locations = queryParams.get('location')
  const area = queryParams.get('area')
  const rent = queryParams.get('rent')
  const parking = queryParams.get('parking')

  const residentImgList = [
    'https://is1-2.housingcdn.com/4f2250e8/ae67e028276a7a91ce11b7ceff105993/v0/large/krr_beach_view-bheemunipatnam-visakhapatnam-krr_property.jpeg.webp',
    'https://is1-3.housingcdn.com/01c16c28/bca7e03d91b27741ee2cc193d26f8cf5/v0/large/3_bhk_villa-for-sale-lankela_palem-Visakhapatnam-others.jpg.webp',
    'https://is1-2.housingcdn.com/01c16c28/deaffea6d83ff6b6567fc839ca71bf5a/v0/large/3_bhk_villa-for-sale-velimela-Hyderabad-brochure.jpg.webp',
  ]

  const commercialImgList = [
    'https://www.sindhurealestate.com/admin/all-property-photo/20190225175930_photo_2018-05-26_15-56-36.jpg',
    'https://www.sindhurealestate.com/admin/all-property-photo/20180906164620_photo_2018-06-11_11-31-112.jpg',
    'https://www.sindhurealestate.com/admin/all-property-photo/20180609151440_P47419006..3522980l.jpg',
  ]
  let imagesList = []
  if (category === 'resident') {
    imagesList = residentImgList
  } else {
    imagesList = commercialImgList
  }

  //   console.log(category)
  //   console.log(subCategory)
  //   console.log(locations)
  //   console.log(area)
  //   console.log(rent)
  //   console.log(parking)
  return (
    <div className="product-container">
      <div className="header-container">Header Container</div>
      <div className="video-container">
        <ReactPlayer
          url="https://youtu.be/fTLM-CHrRuY"
          // width="300px"
          // height="200px"
        />
      </div>
      <div className="images-container">
        {imagesList.map(each => (
          <img src={each} alt="img" />
        ))}
      </div>

      <div className="prd-container">
        <h1>Your Search Inputs: (for information)</h1>
        <div className="prd1-container">
          <p>
            Category : <span>{category}</span>
          </p>
          <p>
            subCategory : <span>{subCategory}</span>
          </p>
          <p>
            Location : <span>{locations}</span>
          </p>
          <p>
            Total Sqft : <span>{area}</span>
          </p>
          <p>
            Rent Value : <span>{rent}</span>
          </p>
          <p>
            Parking Level : <span>{parking}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products
