class Followers extends React.Component{
  constructor(props){
    super(props);
    this.state = { followers: [] };
  }
  componentDidMount(){
    $.ajax({
      url: '/followers',
      type: 'GET',
      dataType: 'JSON'
    }).success( data => {
      this.setState({followers: data.followers});
    });
  }
  render(){
    let followers = this.state.followers.map( follower => {
      return(<Follower key={follower.id} {...follower} />);
    });
    return(<div>
             <div className='card blue-grey darken-1'>
               <div className='card-content'>
                 <span className='card-title white-text'>Minions</span>
                   <ul className='collection followers'>
                     {followers}
                   </ul>
                 </div>
             </div>
           </div>);
  }
}
