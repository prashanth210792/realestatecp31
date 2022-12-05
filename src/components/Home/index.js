// import {Redirect} from 'react-router-dom'
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

const residentList = [
  {id: 1, name: 'Independent House / Villa'},
  {id: 2, name: 'Flat / Apartment'},
]
const commercialList = [
  {id: 1, name: 'office space building'},
  {id: 2, name: 'bareshall building'},
]
class Home extends Component {
  state = {
    category: '',
    ListOfSubCategory: [],
    subCategory: '',
    location: '',
    area: '',
    rent: '',
    parking: '',
    amenitiesList: [],
  }

  changeTypeOfProperty = event => {
    console.log(event.target.id)
    if (event.target.id === 'resident') {
      this.setState({
        category: event.target.id,
        ListOfSubCategory: residentList,
      })
    } else if (event.target.id === 'commercial') {
      this.setState({
        category: event.target.id,
        ListOfSubCategory: commercialList,
      })
    }
  }

  selectTypeOfSubCategory = event => {
    this.setState({subCategory: event.target.value})
  }

  changeLocation = event => {
    this.setState({location: event.target.value})
  }

  changeArea = event => {
    this.setState({area: event.target.value})
  }

  changeRent = event => {
    this.setState({rent: event.target.value})
  }

  changeParkingLevel = event => {
    this.setState({parking: event.target.value})
  }

  changeAmenities = event => {
    const {amenitiesList} = this.state
    if (event.target.checked) {
      this.setState({amenitiesList: [...amenitiesList, event.target.id]})
    } else {
      const result = amenitiesList.filter(each => each !== event.target.id)
      //   this.setState({amenitiesList: amenitiesList(event.target.id)})
      this.setState({amenitiesList: result})
    }
  }

  submitted = event => {
    event.preventDefault()
    // const {params} = props
    // console.log(params)
    // const {history} = params
    // history.replace('/products')
  }

  render() {
    const {
      ListOfSubCategory,
      category,
      subCategory,
      location,
      area,
      rent,
      parking,
    } = this.state
    console.log(subCategory)

    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.submitted}>
          <h1>What kind Of property Do you Have?</h1>
          <div>
            <input
              id="resident"
              type="radio"
              name="type-of-property"
              onChange={this.changeTypeOfProperty}
              selected
            />
            <label htmlFor="resident">Residential</label>
            <input
              id="commercial"
              type="radio"
              name="type-of-property"
              onChange={this.changeTypeOfProperty}
            />
            <label htmlFor="resident">Commercial</label>
            <div className="types-of-properties">
              {ListOfSubCategory.map(each => (
                <button
                  key={each.id}
                  value={each.name}
                  className="subCategory"
                  type="button"
                  onClick={this.selectTypeOfSubCategory}
                >
                  {each.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="location">Enter The Property Location:</label>
            <br />
            {/* <input
              id="location"
              className="inputElement"
              type="search"
              value={location}
              onChange={this.changeLocation}
            /> */}
            <select
              id="location"
              className="inputElement"
              type="search"
              value={location}
              onChange={this.changeLocation}
            >
              <option>Hyderabad</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
            </select>
            <br />
            <label htmlFor="area">Total Sqft:</label>
            <br />
            <input
              id="area"
              className="inputElement"
              type="number"
              value={area}
              onChange={this.changeArea}
            />
            <br />
            <label htmlFor="rent">Rent Value:</label>
            <br />
            <input
              id="rent"
              type="number"
              className="inputElement"
              value={rent}
              onChange={this.changeRent}
            />
            <br />
            <label htmlFor="parking">Parking Level:</label>
            <br />
            <select
              id="parking"
              className="selectElement"
              value={parking}
              onChange={this.changeParkingLevel}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <br />
            <label htmlFor="amenities">Amenities:</label> <br />
            <div id="amenities" className="amenities">
              <input
                id="swimming_pool"
                type="checkBox"
                onChange={this.changeAmenities}
              />
              <label htmlFor="swimming_pool">Swimming Pool</label>

              <input
                id="game_area"
                type="checkBox"
                onChange={this.changeAmenities}
              />
              <label htmlFor="game_area">Game Area</label>

              <input id="gym" type="checkBox" onChange={this.changeAmenities} />
              <label htmlFor="gym">Gym</label>
            </div>
          </div>
          <Link
            to={`/products?category=${category}&subcategory=${subCategory}&location=${location}&area=${area}&rent=${rent}&parking=${parking}`}
          >
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Home
