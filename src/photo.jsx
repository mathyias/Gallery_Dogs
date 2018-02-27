import React from 'react';
import { Router,
Link,
} from 'react-router';

class Photo extends React.Component {

constructor(props){

   super(props);
   this.state = {

   error: null,
   isLoaded: false,
   data: []

   }

}


componentDidMount(){

const photo = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a370efb78dc3b01aaca834dfa5452495&text=dogs&format=json&nojsoncallback=1';
const info = 'https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=a370efb78dc3b01aaca834dfa5452495&text=dogs&format=json&nojsoncallback=1';

fetch(photo)
.then(res => res.json())
.then(
  (result) => {

  console.log(result.photos.photo);

    this.setState({
      isLoaded: true,
      data: result.photos.photo
});
},
// Note: it's important to handle errors here
// instead of a catch() block so that we don't swallow
// exceptions from actual bugs in components.
(error) => {
this.setState({
  isLoaded: true,
  error
});
}
)

}

    render(){

    const { error, isLoaded, data } = this.state;
if (error) {
return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
return <div>Loading...</div>;
} else {
return (
  <div id='slider'>
    {data.map(item => (
      <div key={ item.id }>
        <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`}></img>
        <p> { item.title } </p>
      </div>
    ))}
  </div>
);
}
}
    }

module.exports = Photo;
