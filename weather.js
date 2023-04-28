// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=TFUTuloRyqD1vTtg6kxPOsucf6YCkbFm', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=TFUTuloRyqD1vTtg6kxPOsucf6YCkbFm').then(res => res.json()).then(res1 => console.log(res1))