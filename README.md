# Break on @mui/x-data-grid-premium from v5.12.2

This is a reproduction case for an issue with [Mui Master Detail](https://mui.com/x/react-data-grid/master-detail/) in the premium data grid.  

This code works as expected with v5.12.1.  Updating to 5.12.2, I get an application error:

> TypeError: apiRef.current.getRowParams is not a function

## Running Locally

- My lock file is not committed because it references a private registry.
- This is rough around the edges, I pulled some stuff out of a larger app and sanitized mock data to illustrate the issue.

1. Run the app with v 5.12.1 installed.

    ```bash
    npm i && npm run dev
    ```

1. Verify that you can expand the master detail panel (click the + to the left of any row).
1. Switch to 5.12.2:

   ```bash
   npm un @mui/x-data-grid-premium && npm i @mui/x-data-grid-premium@5.12.2
   ```

   ```bash
   npm run dev
   ```

1. Refresh the page if necessary, you will see the application error.