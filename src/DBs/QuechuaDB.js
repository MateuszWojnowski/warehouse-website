import { OBS, mail, planq, eDec, logbi, kartaSynchronizacji } from './CommonLinks'

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
        url: "https://docs.google.com/spreadsheets/d/1kp4gtxoIiDjuCZdY8LsRaUBHCQ1_-lN1cea6ytyTBKY/edit?ts=5fedc6fb&urp=gmail_link&gxids=7628#gid=2019015867",
        displayText: "Raport Lidera",
        class: "itemB"
    },
    {
        url: kartaSynchronizacji,
        displayText: "Karta Synchronizacji",
        class: "itemD"
    },
    {
        url: "https://docs.google.com/document/d/1odU3UQeAYap7gYoYdl9YA5CB8M4dT7U0uKzx8fD5oG4/edit",
        displayText: "Fiszka Lidera",
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