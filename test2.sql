WITH RankedProducts AS (
    SELECT
        p.product_name,
        YEAR(o.order_date) AS sales_year,
        SUM(od.quantity) AS total_quantity,
        ROW_NUMBER() OVER (PARTITION BY YEAR(o.order_date) ORDER BY SUM(od.quantity) DESC) AS rn
    FROM
        products p
    JOIN
        order_details od ON p.product_id = od.product_id
    JOIN
        orders o ON od.order_id = o.order_id
    WHERE
        YEAR(o.order_date) IN (2016, 2017)
    GROUP BY
        p.product_name, YEAR(o.order_date)
)
SELECT
    *
FROM
    RankedProducts
WHERE
    rn <= 5
GROUP BY
    product_name
HAVING
    COUNT(*) = 2;