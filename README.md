# CarListingApp

# Project is implemented using angular 12.1.0

## Development server

Run `npm i` to install project depandancies
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

Install `Json-server` npm package using `npm i json-server` command
Navigate to `server` folder and hit `json-server --watch car-data.json` command to use mock back-end

## Other Details

`Thought process And Approach`

- Created resusable components.
- Fetching list data from mock backend and storing into store(ngRx).
- Implemented pagination so that we can handle more data.
- Implemented Filter and handling it using state management.
- For details page, implemented resolver so that data can be fetched before route loads.

`Assumptions`

- Used mock data.

`Future Enhancements`

- Can implement better project structure, Error handling in better way, Can improve performance, Better Styles, Write unit tests.
