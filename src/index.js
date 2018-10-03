import React from 'react';
import { render } from 'react-dom';
import './css/global.css';
//import WeatherForm from './components/WeatherForm'
import WeatherApp from './components/WeatherApp'

import Day from './components/Day'
import DayForecast from './components/DayForecast'
import Days from './components/Days'
import DetailedForecast from './components/DetailedForecast'
import NightForecast from './components/NightForecast'

//render( <WeatherForm />, document.querySelector('#app') );
render( <WeatherApp />, document.querySelector('#app') );
