# HB+_assignment
An IT intern assesment for this role and the side of this mini project made by me within 48 hours.

# HBPlus Authentication App

A cross-platform authentication application built using
React Native, Expo, React Native Web and Firebase.

## Features

- Google OAuth 2.0 authentication
- Official email domain restriction
- Protected dashboard
- Firebase authentication
- Logout functionality
- Loading and error handling
- Responsive mobile and web interface

## Technology Stack

- React Native
- Expo
- React Native Web
- Firebase Authentication
- Expo AuthSession
- React Navigation
- TypeScript

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate to the project:

cd hbplus-auth-app

Install dependencies:

npm install

## Environment Configuration

Create a .env file in the root directory.

Add your Firebase configuration and Google OAuth
Client IDs.

Refer to the project setup instructions.

## Run the Application

For Web:

npx expo start --web

For Android:

npx expo start --android

For iOS:

npx expo start --ios

Note: Configure Android and iOS OAuth credentials
and native development builds before testing
Google authentication on physical/native devices.

## Authentication Flow

1. User clicks Continue with Google.
2. Google OAuth authenticates the user.
3. Firebase receives the Google ID token.
4. Firebase verifies the user's identity.
5. The application checks the user's email domain.
6. Only verified @hbplus.fit users can access
   the dashboard.
7. Other users receive an access-restricted error.

## Domain Restriction

The application uses a domain validation function
to check whether the authenticated email ends with
@hbplus.fit.

Unauthorized users are immediately signed out.

Firestore Security Rules additionally restrict
access to protected database resources.

## Protected Routes

The application uses authentication state to
conditionally render the Login or Dashboard screen.

Unauthenticated users cannot access the dashboard.

## Logout

Users can securely sign out through the dashboard.

## Author

Aditya Kumar



