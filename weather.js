const apiKey="8546ed63198cf919b3d6fbef08bb680c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const sbox=document.querySelector(".search input");
const sbtn=document.querySelector(".search button");  
const wicon=document.querySelector(".weather-icon");

 async function checkweather(city) {
	const response=await fetch(apiUrl + city +`&appid=${apiKey}`); 
	
	if (!response.ok) {
        
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
        return;
    }
	var data= await response.json();  
	const weatherCondition = data.weather[0].main;
	

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
	document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr"; 

	if(weatherCondition == "Cloud"){
		wicon.src= "image/images/clouds.png";
	} 
	else if(weatherCondition  == "Clear"){
		wicon.src= "image/images/clear.png";
	} 
	else if( weatherCondition == "Rain"){
		wicon.src= "image/images/rain.png";
	} 
	else if(weatherCondition  == "Drizzle"){
		wicon.src= "image/images/drizzle.png";
	} 
	else if(weatherCondition  == "Snow") {
		wicon.src= "image/images/snow.png";
	}  

	document.querySelector(".weather").style.display="block";
 
	sbox.value = "";
} 

sbtn.addEventListener('click', () => {
    const city = sbox.value.trim();
    if (city) {
        checkweather(city);
    } else { 
		document.querySelector(".city").innerHTML = "Please enter a city";
	    }
	});
