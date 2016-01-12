class Tweets extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let tweets = this.props.tweets.map( tweet => {
      return(<Tweet key={tweet.id} text={tweet.text} />);
    });
    return(<div className='col s12 m6'>
             <div className="card blue-grey darken-1">
               <div className='card-content'>
                 <span className='card-title white-text'>My Tweets</span>
                 <ul className='collection tweets'>
                   {tweets}
                 </ul>
               </div>
             </div>
           </div>);
  }
}
