import React from 'react'

import classes from './PlanTransportowy.module.css'


const {parse} = require('json-parser')
// import {PlanTransportowyDB} from './PlanTransportowyDB'


class PlanTransportowy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          PlanTransportowyDB: [],
          firstIndexOfNow: 0,
          lastIndexOfNow: 0,
          previousCities: [],
          previousHour: "",
          currentCities: [],
          currentHour: "",
          nextCities: [],
          nextHour: "",
        }
    }

    callAPI() {
      fetch("http://localhost:9900/transportScheduleDB")
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(res => {
            let tempArr = []
            res.forEach(obj => tempArr.push(obj))
            console.log(tempArr) //opcjonalne
            tempArr.forEach(elem => {
              elem.godzina = this.formatDate(elem.godzina)
            })
            this.setState( {PlanTransportowyDB: tempArr} )
          })
          // .then(res => console.log(res))
          // .then(res => this.setState({ PlanTransportowyDB: JSON.parse(res)}))
          }
          

    formatDate(dateString) {
      let resultString = dateString.replace("T", " ")
      resultString = resultString.substring(0, resultString.length-5)
      return new Date(resultString)
    }

    findFirstIndexOfNow = () => {
      for (let i=0; i<this.state.PlanTransportowyDB.length; i++){
          if (this.state.PlanTransportowyDB[i]) var datetime = new Date( this.state.PlanTransportowyDB[i].godzina ).getTime(); //some particular city's departure time
          var now = new Date().getTime(); //current time
          if (datetime && now < datetime) {
            this.setState({ firstIndexOfNow: i })
            return;
          }
      }
    }

    displayPreviousCities = () => {
      let i = this.state.firstIndexOfNow;

      while(this.state.PlanTransportowyDB[i-1] && this.state.PlanTransportowyDB[i-2] && this.state.PlanTransportowyDB[i-1].godzina.getTime() == this.state.PlanTransportowyDB[i-2].godzina.getTime()){
        i--
      }

      let previousHour, previousHourStringified
      if(this.state.PlanTransportowyDB[i-1]) {
        previousHour = this.state.PlanTransportowyDB[i-1].godzina
        previousHourStringified = `${previousHour.getHours()}:${previousHour.getMinutes()<10 ? "0" + previousHour.getMinutes() : previousHour.getMinutes()}`
      }

      this.setState({ 
        previousCities: this.state.PlanTransportowyDB.slice(i-1, this.state.firstIndexOfNow), 
        previousHour: previousHourStringified
      })
    }

    displayCurrentCities = () => {
      let i = this.state.firstIndexOfNow;

      while(this.state.PlanTransportowyDB[i] && this.state.PlanTransportowyDB[i+1] && this.state.PlanTransportowyDB[i].godzina.getTime() == this.state.PlanTransportowyDB[i+1].godzina.getTime()){
        i++
      }

      let currentHour, currentHourStringified
      if (this.state.PlanTransportowyDB[i]) {
        currentHour = this.state.PlanTransportowyDB[i].godzina
        currentHourStringified = `${currentHour.getHours()}:${currentHour.getMinutes()<10 ? "0" + currentHour.getMinutes() : currentHour.getMinutes()}`
      }

      this.setState({ 
        currentCities: this.state.PlanTransportowyDB.slice(this.state.firstIndexOfNow, i+1), 
        lastIndexOfNow: i,
        currentHour: currentHourStringified
      })
    }

    displayNextCities = () => {
      let i = this.state.lastIndexOfNow + 1;

      while(this.state.PlanTransportowyDB[i] && this.state.PlanTransportowyDB[i+1] && this.state.PlanTransportowyDB[i].godzina.getTime() == this.state.PlanTransportowyDB[i+1].godzina.getTime()){
        i++
      }

      let nextHour, nextHourStringified
      if (this.state.PlanTransportowyDB[i]) {
        nextHour = this.state.PlanTransportowyDB[i].godzina
        nextHourStringified = `${nextHour.getHours()}:${nextHour.getMinutes()<10 ? "0" + nextHour.getMinutes() : nextHour.getMinutes()}`
      }

      this.setState({ 
        nextCities: this.state.PlanTransportowyDB.slice(this.state.lastIndexOfNow + 1, i+1),
        nextHour: nextHourStringified
      })
    }

    componentWillMount() {
      this.callAPI();
    }

    componentDidMount() {
      this.intervalID = setInterval(() => {
        this.findFirstIndexOfNow()
        this.displayPreviousCities()
        this.displayCurrentCities()
        this.displayNextCities()
      }, 1000)
    }

      render() {
        return (
          <div className={classes.plantransportowy}>
                <div className={classes.box}>Poprzedni załadunek: {this.state.previousHour?"godzina "+this.state.previousHour:""}</div>
                <div className={classes.box}>
                    {this.state.previousCities.map((elem, i)=>{
                        if (this.state.previousCities.length-1 === i){
                          return <span className={classes.blue}>{elem.miasto}</span>
                        }
                        else {
                          return <span className={classes.blue}>{elem.miasto}, </span>
                        }
                      })}
                      <br />
                </div>
                <div className={classes.box}>Najbliższy załadunek: {this.state.currentHour?"godzina "+this.state.currentHour:""}</div>
                <div className={classes.box}>
                    {this.state.currentCities.map((elem, i)=>{
                        if (this.state.currentCities.length-1 === i){
                          return <span className={classes.blue}>{elem.miasto}</span>
                        }
                        else {
                          return <span className={classes.blue}>{elem.miasto}, </span>
                        }
                      })}
                    <br />
                </div>
                <div className={classes.box}>Następny załadunek: {this.state.nextHour?"godzina "+this.state.nextHour:""}</div>
                <div className={classes.box}>
                    {this.state.nextCities.map((elem, i)=>{
                        if (this.state.nextCities.length-1 === i){
                          return <span className={classes.blue}>{elem.miasto}</span>
                        }
                        else {
                          return <span className={classes.blue}>{elem.miasto}, </span>
                        }
                      })}
                    <br />
                </div>
          </div>
        );
      }
}

export default PlanTransportowy