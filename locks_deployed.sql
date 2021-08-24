WITH 
     first_b AS (
    --since first block
        SELECT "evt_block_time" AS first_block FROM unlock."Unlock_evt_NewLock"
        ORDER BY "evt_block_time" ASC
        LIMIT 1
    )

SELECT COUNT("newLockAddress") As "Locks Deployed"
FROM unlock."Unlock_evt_NewLock"
WHERE "evt_block_time" >= 
    CASE
        WHEN '{{Since First Block}}' = 'true' THEN (SELECT first_block FROM first_b)
        ELSE NOW() - interval '{{Date Interval}}'
    END

