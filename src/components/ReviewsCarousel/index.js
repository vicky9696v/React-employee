import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {selectEmployee: 0}

  onRightClick = () => {
    const {selectEmployee} = this.state
    const {reviewsList} = this.props

    if (selectEmployee < reviewsList.length - 1) {
      this.setState(prevState => ({
        selectEmployee: prevState.selectEmployee + 1,
      }))
    }
  }

  onchangeEverything = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {selectEmployee} = this.state
    const {reviewsList} = this.props

    if (selectEmployee > 0) {
      this.setState(prevState => ({
        selectEmployee: prevState.selectEmployee - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {selectEmployee} = this.state

    const currentReviewDetails = reviewsList[selectEmployee]
    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>

        <div className="button-container">
          <button
            type="button"
            testid="leftArrow"
            className="image"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.onchangeEverything(currentReviewDetails)}
          <button
            type="button"
            testid="rightArrow"
            className="image"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
