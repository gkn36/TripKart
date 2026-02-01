# TripKart - Travel Agency Booking System

Welcome to the repository! This project is a Travel Agency Booking System designed to help customers easily explore and book exciting travel packages. It provides a user-friendly interface for customers to view available packages, book their trips, and receive basic invoices for their bookings.

## Project Overview

Roamory offers an easy-to-use platform where customers can:
- Browse through available tour packages.
- Book a tour package by providing necessary details.
- Receive a basic invoice after booking, summarizing customer information and booking details.

### Core Features:
1. **Tour Packages Page:**
   - Displays a list of tour packages with essential details:
     - Title
     - Description
     - Price
     - Available Dates
     - Images
   - Data is fetched from a MongoDB collection to dynamically display the available packages.

2. **Package Booking:**
   - Each package has a 'Book Now' button.
   - Clicking the 'Book Now' button opens a form where customers can input:
     - Name
     - Email
     - Phone Number
     - Number of travelers
     - Special requests 
   - After the customer fills in their details, the booking is saved to MongoDB.

3. **Invoice Generation:**
   - After booking, the system generates a basic invoice which includes:
     - Customer Details (Name, Email, Phone Number)
     - Package Details (Title, Price, Number of Travelers)
     - Total Price (Calculated based on the price per person * number of travelers)

## Tech Stack
- **Frontend:**
  - React
  - TailwindCSS 

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB (for storing package and booking details)
