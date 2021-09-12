let schoolAddress = document.getElementById("school-address")

const openSchoolAddressLink = () => {
    const url = 'https://www.google.com/maps/place/School+of+Electrical+%23+1+in+Krakow/@50.0244061,19.9750275,17z/data=!3m1!4b1!4m5!3m4!1s0x47164359c7f19395:0xf115ffd8c2b7b8c!8m2!3d50.0244095!4d19.977215'
    window.open(url, "_blank")
}

schoolAddress.onclick = openSchoolAddressLink

