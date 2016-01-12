class Search extends React.Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.state = { tweets: [] };
  }
  search(){
    if(this.refs.search.value.length > 3) {
      $.ajax({
        url: '/search',
        type: 'GET',
        dataType: 'JSON',
        data: { term: this.refs.search.value }
      }).success( data => {
        this.setState({ tweets: data.tweets });
      });
    }
  }
  render(){
    let tweets = this.state.tweets.map( tweet => {
      return(<li key={tweet.id} className='collection-item'>
               {tweet.text}
               <div className='secondary-content'>
                 <img className='avatar' src={tweet.avatar} />
               </div>
             </li>);
    });
    return(<div>
             <div className='card blue-grey darken-1'>
               <div className='card-content'>
                 <span className='card-title white-text'>Search</span>
                 <input type='text' ref='search' onChange={this.search} />
                 <ul className='search-results collection'>
                   {tweets}
                 </ul>
               </div>
             </div>
           </div>);
  }
}
