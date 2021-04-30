import { kalkulatorLidera, OBS, mail, planq, logbi, eDec, kartaSynchronizacji, planTransportowy } from './CommonLinks'

let navOneContent = [
    {
        url: eDec,
        displayText: "E-Dec",
        class: "itemD"
    }, 
    {
        url: mail,
        displayText: "Email",
        class: "itemD"
    },
    {
        url: logbi,
        displayText: "Logbi",
        class: "itemD"
    },
    {
        url: planq,
        displayText: "PlanQ",
        class: "itemD"
    },
    {
        url: kartaSynchronizacji,
        displayText: "Karta Synchronizacji",
        class: "itemD"
    },
    {
        url: planTransportowy,
        displayText: "Plan transportowy",
        class: "itemD"
    },
]

let navTwoContent = [
    {
        url: OBS,
        displayText: "OBS",
        class: "itemC"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/1_rucJ0Cwm3U_oki6DryYy2qSDk3ejn7CHgRcBsNRDbo/edit?ts=608c22c7#gid=1587553886",
        displayText: "Raport Lidera",
        class: "itemC"
    },
    {
        url: "https://drive.google.com/drive/folders/1tistnhFm865a8TW-niRNjDwmlBX6iBpv",
        displayText: "Plik rozbieżności działowych",
        class: "itemD"
    },
    {
        url: "https://docs.google.com/spreadsheets/d/16rXak-8hs7jccarpzyM8CGWUdFYlBO4DLjPbYOdyKJs/edit?ts=603bd419#gid=821904007",
        displayText: "OBS tygodniowy",
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