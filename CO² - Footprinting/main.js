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

//Doughnut-Diagramm Statistik.html
const chartData = {
  labels: ["China", "USA", "Indien", "Russland", "Japan", "Iran", "Deutschland", "Saudi-Arabien", "Indonesien", "Südkorea", "Rest"],
  data: [15, 12, 11, 10, 8, 7, 6, 5, 4, 3, 19],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
      labels: chartData.labels,
      datasets: [
          {
              label: "CO2",
              data: chartData.data,
          },
      ],
  },
  options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
          legend: {
              display: false,
          },
      },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
  });
};

populateUl();

//Doughnut-Diagramm Statistik.html Unternehmen
const companyChartData = {
  labels: ["China (Coal)", "Saudi Arabian Oil Company (Aramco)", "Gazprom OAO", "National Iranian Oil Co", "ExxonMobil Corp", "Coal India", "Petroleos Mexicanos (Pemex)", "Russia (Coal)", "Royal Dutch Shell PLC", "China National Petroleum Corp (CNPC)", "Rest"],
  data: [15, 12, 11, 10, 8, 7, 6, 5, 4, 3, 19],
};

const companyChart = document.querySelector(".company-chart");
const companyUl = document.querySelector(".company-details-list");

const populateCompanyUl = () => {
  companyChartData.labels.forEach((label, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${label}: <span class='percentage'>${companyChartData.data[index]}%</span>`;
    companyUl.appendChild(li);
  });
};

new Chart(companyChart, {
  type: "doughnut",
  data: {
    labels: companyChartData.labels,
    datasets: [{
      label: "CO2",
      data: companyChartData.data,
    }],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

populateCompanyUl();


//Schriftkultur
document.addEventListener('DOMContentLoaded', function () {

  var userLanguage = navigator.language || navigator.userLanguage;

  var isRTL = /ar|he|fa/.test(userLanguage.toLowerCase());

  document.body.dir = isRTL ? 'rtl' : 'ltr';
});



