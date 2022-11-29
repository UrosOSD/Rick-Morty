import React, { Component } from 'react'
import Homepage from "./../src/pages/Homepage/Homepage"
import CharPage from "./../src/pages/CharPage/CharPage"
import { HOME_PAGE, CHAR_PAGE } from './components/Constants/constants'


export class App extends Component {
  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.fetchCharacter = this.fetchCharacter.bind(this)
    this.goToHomePage = this.goToHomePage.bind(this)
    this.clickPage = this.clickPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    

    this.state = { data: [], character: {}, currentPage: HOME_PAGE, renderedPage: 1 }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.renderedPage !== this.state.renderedPage){
      this.fetchData()
    }
  }

  fetchData = function () {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.renderedPage}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.results }))
  }

  fetchCharacter = function (id) {
    const char = this.state.data.find(e => e.id === id)
    this.setState({ character: char, currentPage: CHAR_PAGE })
  }

  goToHomePage = function () {
    this.setState({ currentPage: HOME_PAGE })
  }

  prevPage = function () {
    if (this.state.renderedPage > 1) {
      this.fetchData(this.state.renderedPage - 1)
      this.setState({ renderedPage: this.state.renderedPage - 1 })
    }
    else {
      this.fetchData(42)
      this.setState({ renderedPage: 42 })
    }
  }

  nextPage = function () {
    if (this.state.renderedPage < 42) {
      this.fetchData(this.state.renderedPage + 1)
      this.setState({ renderedPage: this.state.renderedPage + 1 })
    }
    else {
      this.fetchData(1)
      this.setState({ renderedPage: 1 })
    }
  }

  clickPage = function (e) {
    this.fetchData(e.target.textContent)
    this.setState({ renderedPage: parseInt(e.target.textContent) })
  }


  render() {


    return (
      <div>
        { this.state.currentPage === 'HOME_PAGE' && <Homepage data={this.state.data} fetchData={this.fetchData} fetchCharacter={this.fetchCharacter} nextPage={this.nextPage} prevPage={this.prevPage} clickPage={this.clickPage} renderedPage={this.state.renderedPage} />}
        <div className="charPage">
          { this.state.currentPage === 'CHAR_PAGE' && <CharPage char={this.state.character} goToHomePage={this.goToHomePage} />}
        </div>
      </div>
    )
  }
}

export default App

