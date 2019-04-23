import React from 'react'

class Filters extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.state.value} onChange={this.handleChange} name="type" id="type">
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
   this.setState({value: event.target.value},()=>{
     this.props.onChangeType(this.state.value)
     console.log(this.state.value);
   })
 }

 handleClick = (event) => {
  this.props.onFindPetsClick()
 }

}

export default Filters
