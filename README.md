# Jammmming

A simple Spotify playlist maker.

## Sample app

- View sample at http://pbnjammming.surge.sh

## To clone this project

1. `git clone https://github.com/timmliu/jammming.git`
1. `yarn start`
1. visit http://localhost:3000

## Deploy with Surge

### Subsequent deploys
`yarn run deploy`

### First time deploying

1. Install Surge:

    `npm install -g surge`

2. Run the Create React App build:

    `cd your-react-project`
    `npm run build`

3. Switch into the build directory:

    `cd build`

4. Run Surge, and follow the prompts. All it needs is an email and a password, and you can optionally specify a different domain name.

    `surge`

5. specify subdomain as pbnjammming.surge.sh

6. visit http://pbnjammming.surge.sh/
