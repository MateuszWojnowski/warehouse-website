import { OBS, mail, planq, logbi, eDec, kartaSynchronizacji, planTransportowy } from './CommonLinks'

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
        url: "",
        displayText: "Raport Lidera (brak linka)",
        class: "itemC"
    },
    {
        url: "https://drive.google.com/drive/folders/1tistnhFm865a8TW-niRNjDwmlBX6iBpv",
        displayText: "Plik rozbieżności działowych",
        class: "itemC"
    },
    {
        url: ".",
        displayText: "OBS tygodniowy (brak linka)",
        class: "itemC"
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