# **Healthy Care App**

## **Table of Contents**

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Configuration](#configuration)
7. [Project Structure](#project-structure)
8. [Contact](#contact)

---

## **Introduction**

> **Healthy Care** is a tool to track calorie intake and physical activities, helping users monitor their health goals and maintain a balanced lifestyle.

## **Features**

- Mock API Integration: Facilitates testing and development with simulated data.
- User-Friendly: Simple and efficient design for monitoring health goals on any device.
- Reusable custom Hook: Use shared logic fetch more data.
- CSS Variables: Common styles managed with CSS variables.
- Modular Components: Structured, reusable components for consistent UI

## **Tech Stack**

- **Frontend**: React, scss, material UI, vite

## **Getting Started**

### **Prerequisites**

- Node.js >= 16.13.1
- npm >= ^6.14.15
- React >= ^11.4.1

### **Installation**

```bash


# Navigate to the project directory
cd healthy-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## **Usage**

After starting the server, navigate to http://localhost:5173 to view the application in your browser.

## **Project Structure**

```plaintext
healthy-app/
├── src/
│   ├── assets/            # Static files (fonts, images, etc.)
│   ├── components/        # Reusable UI components
│        ├── common/       # Reusable UI common component
│   ├── configs/           # Application routing and configuration files
│   ├── hooks/             # Custom hooks for shared logic across components
│   ├── layouts/           # Page layout structures and reusable templates
│   ├── pages/             # Components for each main page or route
│   ├── services/          # API services and external data handlers
│   ├── styles/            # Global SCSS variables, mixins, and shared styles
│   ├── utils/             # Helper functions and utilities
│   ├── App.jsx            # Root component and main application setup
│   └── index.jsx          # Application entry point
└── README.md              # Project documentation and guidelines
```

## **Contact**

- Author: Nguyen Pham
- Email: phamlongnguyen97@gmail.com
- phone: +84982513530
