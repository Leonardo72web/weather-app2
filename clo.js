console.log("hey")

const place = document.getElementById('title')
const icon = document.getElementById('wtype')
const temper = document.getElementById('temp')
const localtime =document.getElementById('localtime')
const feelsli = document.getElementById('feels')

/*let target = 'Mumbai'
const userValue = document.getElementById("cname").value;
console.log(userValue);
const weatherReport = () => {
    const userValue = document.getElementById("cname").value;
        const url = `http://api.weatherapi.com/v1/current.json?key=0dfd4db8a3204896958222104232210&q=${userValue}&aqi=no`

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            let locationName = data.location.name;
            let country = data.location.country;
            let time = data.location.localtime;
            let temp = data.current.temp_c;
            let condition = data.current.condition.text;
            const icone = data.current.condition.icon;
            place.innerHTML= locationName +"   " + country;
            icon.innerHTML = `<img src="https://${icone}">`+temp + "  degrees" + " "+condition;
        })


    }

weatherReport();*/
setTimeout(function(){
    
    const findMyState = () => {
        const location = document.getElementById('location')
    
        const success = (position) => {
            console.log(position)
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
    
    
            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
            fetch(geoApiUrl)
            .then(res => res.json())
            .then(data =>{
                location.innerHTML = `<p><img src="https://img.icons8.com/?size=80&id=124191&format=png" style="width :10%"> ${data.locality} ${data.principalSubdivision}</p>`;
            })
        }
        const error = () => {
            location.textContent ='My Location';
        }
        navigator.geolocation.getCurrentPosition(success,error);
    }
    findMyState();
 }, 0.1);
 
const weatherReport = () => {
    const userValue = document.getElementById("cname").value;
        const url = `http://api.weatherapi.com/v1/current.json?key=0dfd4db8a3204896958222104232210&q=${userValue}&aqi=no`

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            const icone = data.current.condition.icon;
            let locationName = data.location.name;
            let country = data.location.country;
            let loca_time = data.location.localtime;
            let temp = data.current.temp_c;
            let feels = data.current.feelslike_c;
            let text = data.current.condition.text;
            place.innerHTML= locationName +"   " + country;
            icon.innerHTML = `<img src="https://${icone}">`;
            temper.innerHTML = temp + " degrees " + text;
            localtime.innerHTML = loca_time;
            feelsli.innerHTML = "feels like " + feels;
        })
    }
weatherReport();