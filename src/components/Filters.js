import React from 'react'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }

  handleChange = (event) => {
    // console.log("select value is now: ", event.target.value)
    this.props.onChangeType(event.target.value)
  }

  handleClick = (event) => {
    this.props.onFindPetsClick()
    // console.log("handleClick event fired - this.props.onFindPetsClick() is running...")
  }


}

export default Filters
