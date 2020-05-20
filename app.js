const jsonData = 'https://randomuser.me/api';
fetch(jsonData)
    .then((response) => {
        return response.json();

    })
    .then((dataObject) => {
        const data = dataObject.results[0];
        const name = document.querySelector('.name-data')
        const gender = document.querySelector('.gender-data')
        const email = document.querySelector('.email-data')
        const dob = document.querySelector('.dob-data')
        const dot = document.querySelector('.dot-data')
        const location = document.querySelector('.Location-data')
        const locationSpace = document.querySelector('.Location')
        const country = document.querySelector('.country-data');
        const postcode = document.querySelector('.postcode-data');
        const phone = document.querySelector('.phone-data');
        const img = document.querySelector('.img-src');
        name.innerHTML = (`${data.name.title}  \t  ${data.name.first} ${data.name.last}`)
        gender.innerHTML = (`${data.gender}`);
        email.innerHTML = (`${data.email}`)
        dob.innerHTML = (`${data.dob.date.slice(0,10)}`)
        dot.innerHTML = (`${data.dob.date.slice(11,19)}`)
        location.innerHTML = (`${data.location.street.number} ,${data.location.street.name}, ${data.location.city}, ${data.location.state}, `);
        country.innerHTML = (`${data.location.country}`);
        postcode.innerHTML = (`${data.location.postcode}`)
        phone.innerHTML = (`${data.cell}`)
        locationSpace.style.minHeight = location.style.Height;
        img.src = data.picture.medium;
        refreshButton = document.querySelector('#Refresh');
        refreshButton.addEventListener('click', () => {
            location.reload(true);
        })

    });