# 🌦️ Weather App

A beautifully designed weather application that allows users to check real-time weather conditions for any city in the world. Built using **HTML**, **CSS**, and **vanilla JavaScript**, the app uses a modern **glassmorphism UI** for a clean, minimal, and elegant look.

---

## 📌 Features

- 🔍 **Live City Search** – Get weather information by entering a city name.
- 🌡️ **Real-Time Data** – Displays temperature, feels-like temp, condition, humidity, and wind speed.
- 📱 **Modern UI** – Frosted glass appearance with rounded corners and soft shadows.
- ⚡ **Fast & Responsive** – Smooth user experience with async API fetching and responsive design.

---

## ⚙️ How It Works

- The user enters a city name.
- The app makes an API request to [WeatherAPI](https://www.weatherapi.com/).
- It fetches the current weather data for the entered location.
- The weather details are then displayed dynamically inside the app.

---

## 🔐 API Key Notice

The app uses public WeatherAPI key

⚠️ **Important**: This key may **expire** or hit its **free usage limit**, causing the app to stop showing results.

➡️ To avoid this:
1. Sign up at [weatherapi.com](https://www.weatherapi.com/) for a free account.
2. Replace the key in `script.js` with your own.

```js
const apikey = 'your-own-api-key';


