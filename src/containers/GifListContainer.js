import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  fetchGifs = (query = "dolphins") => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=TwetOJS5LT4w7n3Olqkl7PxZs9qtRiry&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({data: json.data.slice(0,3)})
    })
  }


  componentDidMount() {
    this.fetchGifs('dolphins')
  }

  render() {
    return (
      <div>
        <GifList data={this.state.data} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }
}





export default GifListContainer