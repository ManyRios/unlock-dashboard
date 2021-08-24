WITH 
    first_b AS (
    --since first block
        SELECT "evt_block_time" AS first_block FROM unlock."PublicLock_evt_Transfer"
        ORDER BY "evt_block_time" ASC
        LIMIT 1
    )

SELECT COUNT("evt_tx_hash") AS "Total Of" FROM unlock."PublicLock_evt_Transfer"
        WHERE evt_block_time >= 
        CASE
            WHEN '{{Since First Block}}' = 'true' THEN (SELECT first_block FROM first_b)
            ELSE NOW() - interval '{{Date Interval}}'
        END
