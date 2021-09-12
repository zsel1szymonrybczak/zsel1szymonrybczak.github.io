let schoolAddress = document.getElementById("school-address")

/* ------------------------- School adress ------------------------- */

const openSchoolAddressLink = () => {
    const url =
        "https://www.google.com/maps/place/School+of+Electrical+%23+1+in+Krakow/@50.0244061,19.9750275,17z/data=!3m1!4b1!4m5!3m4!1s0x47164359c7f19395:0xf115ffd8c2b7b8c!8m2!3d50.0244095!4d19.977215"
    window.open(url, "_blank")
}

schoolAddress.onclick = openSchoolAddressLink

/* ------------------------- Lesson Indexes ------------------------- */

let firstLesson = document.getElementById("firstLesson")
let secondLesson = document.getElementById("secondLesson")
let thirdLesson = document.getElementById("thirdLesson")
let fourthLesson = document.getElementById("fourthLesson")
let fifthLesson = document.getElementById("fifthLesson")
let sixthLesson = document.getElementById("sixthLesson")
let seventhLesson = document.getElementById("seventhLesson")
let eighthLesson = document.getElementById("eighthLesson")
let ninthLesson = document.getElementById("ninthLesson")

const openFirstLessonAlert = () =>
    alert("Lekcja druga zaczyna się o 7:30, kończy się o 8:15. Po której jest 5-minutowa przerwa.")
const openSecondLessonAlert = () =>
    alert("Lekcja druga zaczyna się o 8:20, kończy się o 9:05. Po której jest 5-minutowa przerwa.")
const openThirdLessonAlert = () =>
    alert(
        "Lekcja trzecia zaczyna się o 9:10, kończy się o 9:55. Po której jest 10-minutowa przerwa."
    )
const openFourthLessonAlert = () =>
    alert(
        "Lekcja czwarta zaczyna się o 10:05, kończy się o 10:50. Po której jest pięcio minutowa przerwa."
    )
const openFifthLessonAlert = () =>
    alert(
        "Lekcja piąta zaczyna się o 10:55, kończy się o 11:40. Po której jest pięcio minutowa przerwa."
    )
const openSixthLessonAlert = () =>
    alert(
        "Lekcja szósta zaczyna się o 11:45, kończy się o 12:30. Po której jest pięcio minutowa przerwa."
    )
const openSeventhLessonAlert = () =>
    alert(
        "Lekcja siódma zaczyna się o 12:35, kończy się o 13:20. Po której jest 20-minutowa przerwa."
    )
const openEighthLessonAlert = () =>
    alert(
        "Lekcja ósma zaczyna się o 13:40, kończy się o 14:25. Po której jest pięcio minutowa przerwa."
    )
const openNinthLessonAlert = () =>
    alert("Lekcja dziewiąta zaczyna się o 14:30, kończy się o 15:15.")

firstLesson.onclick = openFirstLessonAlert
secondLesson.onclick = openSecondLessonAlert
thirdLesson.onclick = openThirdLessonAlert
fourthLesson.onclick = openFourthLessonAlert
fifthLesson.onclick = openFifthLessonAlert
sixthLesson.onclick = openSixthLessonAlert
seventhLesson.onclick = openSeventhLessonAlert
eighthLesson.onclick = openEighthLessonAlert
ninthLesson.onclick = openNinthLessonAlert

/* ------------------------- Days ------------------------- */

let mondayFirstLesson = document.getElementById("mondayFirstLesson")
let mondaySecondLesson = document.getElementById("mondaySecondLesson")
let mondayThirdLesson = document.getElementById("mondayThirdLesson")
let mondayFourthLessonFirstGroup = document.getElementById("mondayFourthLessonFirstGroup")
let mondayFourthLessonSecondGroup = document.getElementById("mondayFourthLessonSecondGroup")
let mondayFifthLessonFirstGroup = document.getElementById("mondayFifthLessonFirstGroup")
let mondayFifthLessonSecondGroup = document.getElementById("mondayFifthLessonSecondGroup")
let mondaySixthLessonFirstGroup = document.getElementById("mondaySixthLessonFirstGroup")
let mondaySixthLessonSecondGroup = document.getElementById("mondaySixthLessonSecondGroup")

let tuesdayFirstLesson = document.getElementById("tuesdayFirstLesson")
let tuesdaySecondLesson = document.getElementById("tuesdaySecondLesson")
let tuesdayThirdLesson = document.getElementById("tuesdayThirdLesson")
let tuesdayFourthLesson = document.getElementById("tuesdayFourthLesson")
let tuesdayFifthLesson = document.getElementById("tuesdayFifthLesson")
let tuesdaySixthLesson = document.getElementById("tuesdaySixthLesson")
let tuesdaySeventhLessonSecondGroupBoys = document.getElementById(
    "tuesdaySeventhLessonSecondGroupBoys"
)

let wednesdaySecondLessonFirstGroup = document.getElementById("wednesdaySecondLessonFirstGroup")
let wednesdayFirstLessonSecondGroup = document.getElementById("wednesdayFirstLessonSecondGroup")
let wednesdaySecondLessonSecondGroup = document.getElementById("wednesdaySecondLessonSecondGroup")
let wednesdayThirdLesson = document.getElementById("wednesdayThirdLesson")
let wednesdayFourthLesson = document.getElementById("wednesdayFourthLesson")
let wednesdayFifthLessonFirstGroup = document.getElementById("wednesdayFifthLessonFirstGroup")
let wednesdayFifthLessonSecondGroup = document.getElementById("wednesdayFifthLessonSecondGroup")
let wednesdaySeventhLessonGirls = document.getElementById("wednesdaySeventhLessonGirls")

let thursdayFirstLessonFirstGroup = document.getElementById("thursdayFirstLessonFirstGroup")
let thursdayThirdLessonFirstGroup = document.getElementById("thursdayThirdLessonFirstGroup")
let thursdayFirstLessonSecondGroup = document.getElementById("thursdayFirstLessonSecondGroup")
let thursdayFourthLessonFirstGroup = document.getElementById("thursdayFourthLessonFirstGroup")
let thursdayFourthLessonSecondGroup = document.getElementById("thursdayFourthLessonSecondGroup")
let thursdaySixthLessonSecondGroup = document.getElementById("thursdaySixthLessonSecondGroup")
let thursdaySeventhLessonSecondGroupBoys = document.getElementById(
    "thursdaySeventhLessonFristGroupBoys"
)

let fridayFirstLesson = document.getElementById("fridayFirstLesson")
let fridaySecondLesson = document.getElementById("fridaySecondLesson")
let fridayThirdLesson = document.getElementById("fridayThirdLesson")
let fridayFourthLesson = document.getElementById("fridayFourthLesson")
let fridayFifthLessonFirstGroup = document.getElementById("fridayFifthLessonFirstGroup")
let fridayFifthLessonSecondGroup = document.getElementById("fridayFifthLessonSecondGroup")
let fridaySeventhLesson = document.getElementById("fridaySeventhLesson")
let fridayEighthLesson = document.getElementById("fridayEighthLesson")
let fridayNinthLessonFirstGroup = document.getElementById("fridayNinthLessonFirstGroup")

const openMondayFirstLesson = () =>
    alert("Religia w sali 37, nauczycielem tego przedmiotu jest Pani Anna Szkotak.")
const openMondaySecondLesson = () =>
    alert("Biologia w sali 37, nauczycielem tego przedmiotu jest Pani Iwona Łopatka.")
const openMondayThirdLesson = () =>
    alert("Chemia w sali 33, nauczycielem tego przedmiotu jest Pani Anna Różyc.")
const openMondayFourthLessonFirstGroup = () =>
    alert("Język angielski w sali 42, nauczycielem tego przedmiotu jest Pani Magdalena Łabudzka.")
const openMondayFifthLessonFirstGroup = () =>
    alert("Język angielski w sali 42, nauczycielem tego przedmiotu jest Pani Magdalena Łabudzka.")
const openMondayFourthLessonSecondGroup = () =>
    alert("Język angielski w sali 40, nauczycielem tego przedmiotu jest Pan Artur Łabudzki.")
const openMondayFifthLessonSecondGroup = () =>
    alert("Język angielski w sali 40, nauczycielem tego przedmiotu jest Pan Artur Łabudzki.")

const openMondaySixthLessonFirstGroup = () =>
    alert(
        "Projektowanie stron internetowych w sali 211, nauczycielem tego przedmiotu jest Pan Wojciech Kłyza."
    )
const openMondaySixthLessonSecondGroup = () =>
    alert(
        "Projektowanie stron internetowych w sali 215, nauczycielem tego przedmiotu jest Pan Marcin Tomczyk."
    )

const openTuesdayFirstLesson = () =>
    alert("Historia w sali 50, nauczycielem tego przedmiotu jest Pani Małgorzata Kukla.")
const openTuesdaySecondLesson = () =>
    alert("Historia w sali 50, nauczycielem tego przedmiotu jest Pani Małgorzata Kukla.")
const openTuesdayThirdLesson = () =>
    alert("Język polski w sali 50, nauczycielem tego przedmiotu jest Pani Bożena Wiśniewska.")
const openTuesdayFourthLesson = () =>
    alert("Język polski w sali 50, nauczycielem tego przedmiotu jest Pani Bożena Wiśniewska.")
const openTuesdayFifthLesson = () =>
    alert("Matematyka w sali 50, nauczycielem tego przedmiotu jest Pani Agnieszka Samborek.")
const openTuesdaySixthLesson = () =>
    alert("Plastyka w sali 25, nauczycielm tego przedmiotu jest Pani Aleksandra Dubiel.")
const openTuesdaySeventhLessonSecondGroupBoys = () =>
    alert(
        "Wychowanie fizyczne, w sali gimanstycznej lub na siłowni, nauczycielem tego przedmiotu jest Pan Hubert Pietrus."
    )

const openWednesdaySecondLessonFirstGroup = () =>
    alert("Informatyka w sali 53, nauczycielem tego przedmiotu jest Pan Bogusław Goryl.")
const openWednesdayFirstLessonSecondGroup = () =>
    alert("Informatyka w sali 53, nauczycielem tego przedmiotu jest Pan Bogusław Goryl.")
const openWednesdaySecondLessonSecondGroup = () =>
    alert("Język niemiecki w sali 38, nauczycielem tego przedmiotu jest Pani Karolina Żywiak.")
const openWednesdayThirdLesson = () =>
    alert("Matematyka w sali 42, nauczycielem tego przedmiotu jest Pani Agnieszka Samborek.")
const openWednesdayFourthLesson = () =>
    alert("Chemia w sali 33, nauczycielem tego przedmiotu jest Pani Anna Różyc.")
const openWednesdayFifthLessonFirstGroup = () =>
    alert(
        "Projektowanie stron internetowych w sali 211, nauczycielem tego przedmiotu jest Pan Wojciech Kłyza."
    )
const openWednesdayFifthLessonSecondGroup = () =>
    alert(
        "Projektowanie stron internetowych w sali 212, nauczycielem tego przedmiotu jest Pan Marcin Tomczyk."
    )
const openWednesdaySeventhLessonGirls = () =>
    alert(
        "Wychowanie fizyczne, w sali gimnastycznej lub na siłowni, nauczycielem tego przedmiotu jest Pani Agnieszka Augustyn."
    )

const openThursdayFirstLessonFirstGroup = () =>
    alert(
        "Systemy i sieci komputerowe w sali 215, nauczycielem tego przedmiotu jest Pan Przemysław Górka."
    )
const openThursdayThirdLessonFirstGroup = () =>
    alert("Język niemiecki w sali 11, nauczycielem tego przedmiotu jest Pani Renata Stanisławczyk.")
const openThursdayFirstLessonSecondGroup = () =>
    alert(
        "Algorytmy i techniki programowania w sali 53, nauczycielem tego przedmiotu jest Pan Bogusław Goryl."
    )
const openThursdayFourthLessonFirstGroup = () =>
    alert(
        "Algorytmy i techniki programowania w sali 53, nauczycielem tego przedmiotu jest Pan Bogusław Goryl."
    )
const openThursdayFourthLessonSecondGroup = () =>
    alert(
        "Systemy i sieci komputerowe w sali 215, nauczycielem tego przedmiotu jest Pan Ryszard Dąbrowski."
    )
const openThursdaySixthLessonSecondGroup = () =>
    alert("Język niemiecki w sali 38, nauczycielem tego przedmiotu jest Pani Karolina Żywiak.")
const openThursdaySeventhLessonSecondGroupBoys = () =>
    alert(
        "Wychowanie fizyczne, w sali gimanstycznej lub na siłowni, nauczycielem tego przedmiotu jest Pan Leszek Batko."
    )

const openFridayFirstLesson = () =>
    alert("Biologia w sali 50, nauczycielem tego przedmiotu jest Pani Iwona Łopatka.")

const openFridaySecondLesson = () =>
    alert("Język Polski w sali 50, nauczycielem tego przedmiotu jest Pani Bożena Wiśniewska.")
const openFridayThirdLesson = () =>
    alert(
        "Edukacja dla bezpieczeństwa w sali 48, nauczycielem tego przedmiotu jest Pan Bronisław Dadej."
    )
const openFridayFourthLesson = () =>
    alert("Religia w sali 27, nauczycielem tego przedmiotu jest Pani Anna Szkotak.")
const openFridayFifthLessonFirstGroup = () =>
    alert(
        "Systemy i sieci komputerowe w sali 215, nauczycielem tego przedmiotu jest Pan Przemysław Górka."
    )
const openFridayFifthLessonSecondGroup = () =>
    alert(
        "Systemy i sieci komputerowe w sali 213, nauczycielem tego przedmiotu jest Pan Ryszard Dąbrowski."
    )
const openFridaySeventhLesson = () =>
    alert("Matematyka w sali 36, nauczycielem tego przedmiotu jest Pani Agnieszka Samborek.")
const openFridayEighthLesson = () =>
    alert(
        "Zajęcia z wychowawcą w sali 55, nauczycielem tego przedmiotu jest Pani Agnieszka Samborek."
    )
const openFridayNinthLessonFirstGroup = () =>
    alert("Język niemiecki w sali 38, nauczycielem tego przedmiotu jest Pani Renata Stanisławczyk.")

mondayFirstLesson.onclick = openMondayFirstLesson
mondaySecondLesson.onclick = openMondaySecondLesson
mondayThirdLesson.onclick = openMondayThirdLesson
mondayFourthLessonFirstGroup.onclick = openMondayFourthLessonFirstGroup
mondayFourthLessonSecondGroup.onclick = openMondayFourthLessonSecondGroup
mondayFifthLessonFirstGroup.onclick = openMondayFifthLessonFirstGroup
mondayFifthLessonSecondGroup.onclick = openMondayFifthLessonSecondGroup
mondaySixthLessonFirstGroup.onclick = openMondaySixthLessonFirstGroup
mondaySixthLessonSecondGroup.onclick = openMondaySixthLessonSecondGroup

tuesdayFirstLesson.onclick = openTuesdayFirstLesson
tuesdaySecondLesson.onclick = openTuesdaySecondLesson
tuesdayThirdLesson.onclick = openTuesdayThirdLesson
tuesdayFourthLesson.onclick = openTuesdayFourthLesson
tuesdayFifthLesson.onclick = openTuesdayFifthLesson
tuesdaySixthLesson.onclick = openTuesdaySixthLesson
tuesdaySeventhLessonSecondGroupBoys.onclick = openTuesdaySeventhLessonSecondGroupBoys

wednesdaySecondLessonFirstGroup.onclick = openWednesdaySecondLessonFirstGroup
wednesdayFirstLessonSecondGroup.onclick = openWednesdayFirstLessonSecondGroup
wednesdaySecondLessonSecondGroup.onclick = openWednesdaySecondLessonSecondGroup
wednesdayThirdLesson.onclick = openWednesdayThirdLesson
wednesdayFourthLesson.onclick = openWednesdayFourthLesson
wednesdayFifthLessonFirstGroup.onclick = openWednesdayFifthLessonFirstGroup
wednesdayFifthLessonSecondGroup.onclick = openWednesdayFifthLessonSecondGroup
wednesdaySeventhLessonGirls.onclick = openWednesdaySeventhLessonGirls

thursdayFirstLessonFirstGroup.onclick = openThursdayFirstLessonFirstGroup
thursdayThirdLessonFirstGroup.onclick = openThursdayThirdLessonFirstGroup
thursdayFirstLessonSecondGroup.onclick = openThursdayFirstLessonSecondGroup
thursdayFourthLessonFirstGroup.onclick = openThursdayFourthLessonFirstGroup
thursdayFourthLessonSecondGroup.onclick = openThursdayFourthLessonSecondGroup
thursdaySixthLessonSecondGroup.onclick = openThursdaySixthLessonSecondGroup
thursdaySeventhLessonSecondGroupBoys.onclick = openThursdaySeventhLessonSecondGroupBoys

fridayFirstLesson.onclick = openFridayFirstLesson
fridaySecondLesson.onclick = openFridaySecondLesson
fridayThirdLesson.onclick = openFridayThirdLesson
fridayFourthLesson.onclick = openFridayFourthLesson
fridayFifthLessonFirstGroup.onclick = openFridayFifthLessonFirstGroup
fridayFifthLessonSecondGroup.onclick = openFridayFifthLessonSecondGroup
fridaySeventhLesson.onclick = openFridaySeventhLesson
fridayEighthLesson.onclick = openFridayEighthLesson
fridayNinthLessonFirstGroup.onclick = openFridayNinthLessonFirstGroup
