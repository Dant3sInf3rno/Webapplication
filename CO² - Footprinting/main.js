//Suchefenster index.html Länder
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');
  var countryList = document.getElementById('countryList');
  var countries = countryList.getElementsByTagName('li');

  searchInput.addEventListener('input', function () {
      var searchValue = this.value.toLowerCase();

      for (var i = 0; i < countries.length; i++) {
          var countryName = countries[i].innerText.toLowerCase();

          if (countryName.includes(searchValue)) {
              countries[i].style.display = 'block';
          } else {
              countries[i].style.display = 'none';
          }
      }
  });
});

//Suchfenster Unternehmen.html Unternehmen
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');
  var companyList = document.getElementById('companyList');
  var companies = companyList.getElementsByTagName('li');

  searchInput.addEventListener('input', function () {
      var searchValue = this.value.toLowerCase();

      for (var i = 0; i < companies.length; i++) {
          var companyName = companies[i].innerText.toLowerCase();

          if (companyName.includes(searchValue)) {
              companies[i].style.display = 'block';
          } else {
              companies[i].style.display = 'none';
          }
      }
  });
});

//Tabelle 
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');
  var table = document.querySelector('.Tabelle table');
  var rows = table.getElementsByTagName('tr');

  searchInput.addEventListener('input', function () {
      var searchValue = this.value.toLowerCase();

      for (var i = 1; i < rows.length; i++) { // Start bei 1 überspringt die Überschriftenzeile
          var rowData = rows[i].getElementsByTagName('td');
          var found = false;

          for (var j = 0; j < rowData.length; j++) {
              if (rowData[j].innerText.toLowerCase().includes(searchValue)) {
                  found = true;
                  break;
              }
          }

          if (found) {
              rows[i].style.display = '';
          } else {
              rows[i].style.display = 'none';
          }
      }
  });
});

// Beispiel-Blacklist mit verbotenen Zeichen
const forbiddenCharacters = ["<", ">", "/", "*", "%", "(", ")", "{", "}", "["];

// Funktion zum Überprüfen, ob die Eingabe verbotene Zeichen enthält
function hasForbiddenCharacters(input) {
    for (const char of forbiddenCharacters) {
        if (input.includes(char)) {
            return true; // Eingabe enthält verbotenes Zeichen
        }
    }
    return false; // Eingabe enthält keine verbotenen Zeichen
}

// Beispiel-Nutzung der Funktion
const userInput = "This is a <script>"; // Benutzereingabe, die überprüft wird
if (hasForbiddenCharacters(userInput)) {
    console.log("Die Eingabe enthält verbotene Zeichen.");
} else {
    console.log("Die Eingabe ist sicher.");
}
