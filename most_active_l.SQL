WITH
    evt_newlock AS (
    --number of locks in network
        SELECT "newLockAddress" AS lock FROM unlock."Unlock_evt_NewLock"
    ),
    rec_purch AS (
        --Number of transactions per lock
        SELECT "contract_address","to", "evt_block_time" FROM unlock."PublicLock_evt_Transfer"
        LEFT JOIN evt_newlock ON "contract_address" = lock
    ),
    first_b AS (
    --since first block
        SELECT "evt_block_time" AS first_block FROM unlock."PublicLock_evt_Transfer"
        ORDER BY "evt_block_time" ASC
        LIMIT 1
    )

SELECT "contract_address" AS "Lock Address", COUNT("contract_address") AS "Keys created" FROM rec_purch 
 WHERE evt_block_time >= 
        CASE
            WHEN '{{Since First Block}}' = 'true' THEN (SELECT first_block FROM first_b)
            ELSE NOW() - interval '{{Date Interval}}'
        END
GROUP BY "Lock Address"
ORDER BY 2 desc
LIMIT 10
