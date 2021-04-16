import { kartaSynchronizacji, OBS, planq, planTransportowy } from './CommonLinks'

let navOneContent = [
    {
        url: "https://docs.google.com/spreadsheets/d/1YPG4_hFVTL6Gw5cZuqSB9tEOWdZyvyvQfh9gysrQZWs/edit?usp=sharing",
        displayText: "Baza Danych Rampa",
        class: "itemC"
    }, 
    {
        url: "https://docs.google.com/spreadsheets/d/1LYaL_OF45KE6I4AnKOkDf1OWGoEKpu1V3TwfZ_C5EvE/edit?usp=sharing",
        displayText: "Backstock",
        class: "itemC"
    },
    {
        url: "",
        displayText: "Niezbędnik Rampiarza (brak linku)",
        class: "itemC"
    },
    {
        url: planq,
        displayText: "PlanQ",
        class: "itemC"
    },
]

let navTwoContent = [
    {
        url: OBS,
        displayText: "OBS",
        class: "itemC"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/1x0OlXtH-f6UVSZd499gD9xmDvT7Djpo_gdpZecqP1L0/edit?ts=5fec7cc9#gid=1804858155",
        displayText: "Raport Lidera",
        class: "itemC"
    },
    {
        url: planTransportowy,
        displayText: "Plan Transportowy",
        class: "itemD"
    },
    {
        url: kartaSynchronizacji,
        displayText: "Karta Synchronizacji",
        class: "itemD"
    },
    {
        url: "https://tattoo-europe.decathlon.net/tattoo/index.jsp",
        displayText: "Tattoo",
        class: "itemD"
    },
]

let navThreeContent = [
    
]

let nav = [
    {
        zakladka: "navOne",
        displayText: "Niezbędnik Rampiarza",
        class: "itemNavB"
    },
    {
        zakladka: "navTwo",
        displayText: "Lider Zmiany",
        class: "itemNavB"
    },
]

export {navOneContent, navTwoContent, navThreeContent, nav}