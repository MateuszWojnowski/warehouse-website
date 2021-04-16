import { eDec, OBS, mail, planq, logbi } from './CommonLinks'

let navOneContent = [
    {
        url: eDec,
        displayText: "E-Dec",
        class: "itemC"
    }, 
    {
        url: mail,
        displayText: "Email",
        class: "itemC"
    },
    {
        url: logbi,
        displayText: "Logbi",
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
        class: "itemA"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/11lPje59J-KkGGe-Dv6OfBZd1eXX-KLjK6Jaaq6NF_dY/edit#gid=148625481",
        displayText: "Raport Lidera Inesis",
        class: "itemB"
    },
    {
        url: "http://google.com",
        displayText: "OBS Tygodniowy B/L",
        class: "itemA"
    },
]

let navThreeContent =[
]

let nav = [
    {
        zakladka: "navOne",
        displayText: "Pracownik",
        class: "itemNavB"
    },
    {
        zakladka: "navTwo",
        displayText: "Lider Zmiany",
        class: "itemNavB"
    },
]

export {navOneContent, navTwoContent, navThreeContent, nav}