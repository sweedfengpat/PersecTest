SELECT
    p.product_name,
    SUM(od.quantity) AS total_quantity_sold
FROM
    products p
JOIN
    order_details od ON p.product_id = od.product_id
JOIN
    orders o ON od.order_id = o.order_id
WHERE
    YEAR(o.order_date) = 2016
GROUP BY
    p.product_name
ORDER BY
    total_quantity_sold DESC
LIMIT
    5;