# Getting Started

## Backend Side
## Step 1: Installation
1. You will need to download Docker from [here](https://www.docker.com/products/docker-desktop/).

2. After downloading and installing it, you will find in the project a folder called **backend**, open it and drag the DockerFile to the **Docker Desktop App**
then click play icon to start **the backend service**.

## Mobile Side

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android

```
>**NOTE:**
You need to run ```bash adb reverse tcp:8485 tcp:8485``` in case Android network requests failed always.`

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
# Testing with Maestro

### Installation
You need to follow these steps from [official documentation](https://maestro.mobile.dev/getting-started/installing-maestro).

### Running Tests

In `__tests__` folder you will find Three `.yaml` files:
* `search-input-with-exist-input.yaml`
* `search-input-with-non-exist-input.yaml`
* `select-vehicle-and-charge-it.yaml`

After installation you need to run maestro command for tests:

```bash
maestro test ./__tests__/search-input-with-non-exist-input.yaml
```

```bash
maestro test ./__tests__/search-input-with-exist-input.yaml
```

```bash
maestro test ./__tests__/select-vehicle-and-charge-it.yaml
```