import React from 'react'



class GifList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount() {

  }


  render() {
    return (
      <ul>
        {
        this.props.data ? 
          this.props.data.map((gif, i) => {
            return <li key={i}><img src={gif.images.original.url} /></li>
          }) : null
        }
      </ul>
    )
  }
}





export default GifList