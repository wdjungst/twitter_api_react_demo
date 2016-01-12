class Follower extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<li className='collection-item'>
             {this.props.name}
             <div className='secondary-content'>
               <img className='avatar' src={this.props.avatar} />
             </div>
           </li>);
  }
}
