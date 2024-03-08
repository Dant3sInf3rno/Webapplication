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

      for (var i = 1; i < rows.length; i++) {
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

// Beispiel: Blacklist-Funktion
function sanitizeInput(userInput) {
  const blacklist = ['<', '>', '(', ')', '{', '}', '[', ']', ';'];

  // Überprüfen und blockieren Sie die Zeichen in der Blacklist
  for (const char of blacklist) {
      userInput = userInput.split(char).join('');
  }

  return userInput;
}

// Beispiel: Benutzereingabe mit zu blockierenden Zeichen
const userInputToTest = "<script>alert('XSS attack!');</script>";

// Verwenden Sie die Funktion, um die Eingabe zu bereinigen
const cleanInput = sanitizeInput(userInputToTest);

// Ausgabe der bereinigten Eingabe in der Konsole
console.log(cleanInput);
