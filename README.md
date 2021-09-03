<h1>Work Completed</h1>
After a long time in conversation with the dune support, we needed the value of the grossNetworkProduct function that returns the gdp in eth for each network (mainnet, xdai, polygon). We proceeded to make a separate dashboard with embedded code of dune queries in nextjs and ethersjs. With ethersjs we can interact with the abi of the unlock contract directly and show the user the result.

the dashboard can change the time interval of the dune queries in the same dune, for that a button that leads to this was enabled.

To change the time interval you must select in dune the option "since first block" and set it to false, take the desired time and click on "apply".

This dashboard is predefined to calculate from the first block time

You can view the final dashboard: [Unlock-Dashboard/nextjs](https://unlock-dashboard.vercel.app)

<h1>Dune</h1>
 * I uploaded the  smart contracts for each network to Dune Analytics
 * I created one dashboard with the information requested for each network 
     * Ethereum Mainnet 
     * Xdai
     * Polygon

<h1>Tasks: </h1>

* Total GDP 
* Locks deployed
* Keys created
* Most 10 active locks(orderer by the most keys created)

<h1>Unlock Dashboard Link:</h1>

[Unlock-Dashboard](https://dune.xyz/manyrios56/Unlock-Eth)


<h1>Getting Started</h1>

First, run the development server:

npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
