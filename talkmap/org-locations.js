var addressPoints = [
  [
    "Lung Cancer Mortality and Air Pollution in Japan (scheduled) <br />Hitotsubashi Institute of Advanced Studies; Tokyo, Japan",
    35.6895, // latitude Tokyo
    139.6917 // longitude Tokyo
  ],
  [
    "Data Analysis using Comprehensive Survey of Living Conditions Survey, Japan<br />Kagoshima Data Science Symposium; Kagoshima, Japan",
    31.5966, // latitude Kagoshima
    130.5571 // longitude Kagoshima
  ],
  [
    "Intergenerational Inequities in Health Burden due to Climate Change <br />Utokyo Center for Climate Solutions, UTCCS Annual Workshop; The University of Tokyo, Japan",
    35.7133, // latitude Bunkyo-ku (UTokyo Hongo campus)
    139.7620 // longitude
  ],
  [
    "Socioeconomic Inequalities in Uptake of Cancer Screening 2013–2022, Japan <br />The 84th Annual Meeting of the Japanese Society of Public Health; Sapporo, Japan",
    43.0621, // latitude Sapporo
    141.3544 // longitude
  ]
];
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);  