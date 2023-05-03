fetch('http://api.weatherstack.com/current?access_key=76e3258675ed6b7fd36501613d41a09b&query=New York')
.then(res => res.json())
.then(users => {
    console.log(users)
})