import { eDec, OBS, mail, planq, logbi, kalkulatorLidera } from './CommonLinks'

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
        class: "itemC"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/1xvpvYDmmi-jdEjxN7hUeQBpvk3p-FCdJujyi1KWidwk/edit#gid=1020068880",
        displayText: "Raport Lidera",
        class: "itemC"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/1OvTvHDLmdBX2FZHKNKYe-ProuuFoIjn_gs7ajdwNq-4/edit?usp=sharing",
        displayText: "Raport UE",
        class: "itemD"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/1uHSXeGbTIYa5rBhkotq9SpxlfBXZe-QG5WUVo9-ZHtA/edit?usp=sharing",
        displayText: "Plik Kalenji",
        class: "itemD"
    },
    {
        url: kalkulatorLidera,
        displayText: "Kalkulator Lidera",
        class: "itemD"
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