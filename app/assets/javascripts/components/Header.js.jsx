class Header extends React.Component{
  constructor(props){
    super(props);
    this.tweet = this.tweet.bind(this);
  }
  tweet(){
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: this.refs.tweet.value }
    }).success( data => {
      this.props.reRender();
    });
  }
  render(){
    return(<nav>
             <div className='nav-wrapper'>
               <a href='#' className='brand-log'>Twitter</a>
               <ul id='nav-mobile' className='right hide-on-med-and-down'>
                 <form onSubmit={this.tweet}>
                   <input require={true} placeholder='Tweet at me bro!' type='text' ref='tweet' className='validate' />
                 </form>
               </ul>
             </div>
           </nav>);
  }
}
