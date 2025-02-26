# Zeller React Native Code Challenge

📌 Overview
This React Native app displays and filters a list of users using GraphQL. It allows users to filter by roles (Admin, Manager), search by name, and refresh the list with pull-to-refresh functionality.

# 🚀 Features

✅ Fetch and display users from listZellerCustomers query
✅ Filter users by role (Admin, Manager)
✅ Search users by name
✅ Pull-to-refresh for data reloading
✅ Written with TypeScript for type safety
✅ Unit tests for core functionality

# 📂 Folder Structure

This project follows the Atomic Design Pattern, where components are categorized into atoms, molecules, and organisms for better maintainability.

src/
│── components/ # Reusable UI components
│ ├── atoms/ # Smallest UI elements (Text, Button, SearchInput)
│ ├── molecules/ # Combination of atoms (UserCard, UserTypeSelector)
│── screens/ # Application screens
│ ├── Home/ # HomeScreen and related components
│── navigations/ # Navigation setup (if added)
│── services/ # GraphQL queries & API calls
│── utils/ # Helper functions and constants
│── App.tsx # Entry point

# 🛠️ Installation & Setup

Clone the repository and install dependencies:
git clone <repo-url>
cd <project-folder>
npm install

Run the app on a simulator/emulator:
npm run android # For Android
npm run ios # For iOS

Run tests:
npm test
🧪 Testing
Ensures components render correctly.
Tests role-based filtering.
Checks the search functionality.
Mocks GraphQL API calls for reliability.

# 🎥 Demo Video

<img src="src/assets/videos/Zeller-Demo.mp4" width="300"/>
