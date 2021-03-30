import React from 'react'



class GifSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchQuery: null
    }
  }

  handleChange = e => {
    this.setState({searchQuery: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchQuery)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="search" onChange={e => this.handleChange(e)}/>
        <input type="submit" name="submit" value="submit" />
      </form>
    )
  }
}





export default GifSearch