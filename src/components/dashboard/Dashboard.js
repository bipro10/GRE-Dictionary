import React, { Component } from 'react'
import Feature from './Feature'
import WordList from '../dictionary/WordList'
import Practice from './Practice'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() { 
        //console.log(this.props);
        const { magooshWords } = this.props;
        return ( 
            <div className="container-fluid">
              <div className="row">
                <Feature />
                <WordList magooshWords={magooshWords}/>
                <Practice />
              </div>
            </div>
        );
    }
}
 

const mapStateToProps = (state) => {
  return {
    magooshWords: state.magooshWord.magooshWords
  }
}

export default connect(mapStateToProps)(Dashboard);
