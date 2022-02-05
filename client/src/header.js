import React,{ setState} from 'react';

// This is the ES6 Way doesn;t work : semicolon before componentDidMount()?
// const Header = () => {
//
// const { getHeaderFromAPI } = setState("")
//
//    function callHeaderAPI(){
//      fetch("http://localhost:9000/headerRoute")
//          .then( res => res.text() )
//          .then( res => this.setState({ getHeaderFromAPI : res}))
//          .catch( err => err);
//    };
//
//   componentDidMount(){
//      this.callHeaderAPI()
//    };
//
//   return(
//     <div className="Header-div">
//         <h1>This is a header for an API Route></h1>
//         <article>{this.state.getHeaderFromAPI}</article>
//     </div>
//   )
// }
//


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = { getHeaderFromAPI :""};
  }

 callHeaderAPI(){
   fetch("http://localhost:9000/headerRoute")
          .then( res => res.text() )
          .then( res => this.setState({ getHeaderFromAPI : res}))
          .catch( err => err);
 }
 componentDidMount(){
   this.callHeaderAPI();
 }

 render(){
   return(
     <div>
        {this.state.getHeaderFromAPI}
     </div>
   )
 }

}
export default Header;
