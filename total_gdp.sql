WITH
    total_gdp_lifetime As ( 
        SELECT (ROUND(("grossNetworkProduct"/10^17)/2)) AS total_gdp 
            FROM unlock."Unlock_evt_ResetTrackedValue"
    )
,
    price AS (
        SELECT minute, price
            FROM prices."layer1_usd"
            WHERE SYMBOL = 'ETH'
            ORDER BY 1 desc
            LIMIT 1
        )

SELECT total_gdp AS "Total ETH", ROUND(total_gdp * price) AS "Total USD" 
FROM total_gdp_lifetime, price 
