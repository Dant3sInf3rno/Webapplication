document.getElementById('searchInput').addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();
    var countries = document.getElementById('countryList').getElementsByTagName('li');

    for (var i = 0; i < countries.length; i++) {
        var countryName = countries[i].innerText.toLowerCase();

        if (countryName.includes(searchValue)) {
            countries[i].style.display = 'block';
        } else {
            countries[i].style.display = 'none';
        }
    }
});
