class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.reRender = this.reRender.bind(this);
    this.state = { myPosts: [] }
  }
  componentDidMount(){
    this.reRender();
  }
  reRender(){
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'JSON'
    }).success( data => {
      this.setState({ myPosts: data.tweets });
    });
  }
  render(){
    return(<div>
             <Header reRender={this.reRender} />
             <div className='row'>
               <Tweets reRender={this.reRender} tweets={this.state.myPosts}/>
               <div className='col m6'>
                 <Followers />
               </div>
               <div className='col m6'>
                 <Search />
               </div>
             </div>
           </div>)
  }
}
