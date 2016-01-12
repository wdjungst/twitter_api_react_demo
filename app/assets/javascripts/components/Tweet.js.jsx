class Tweet extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<li className='collection-item'>
             {this.props.text}
           </li>);
  }
}
