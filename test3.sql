SELECT
    year(o.order_date) AS sales_year,
    SUM(p.unit_price * od.quantity * (1 - od.discount)) AS total_sales
FROM
    orders o
JOIN
    order_details od ON o.order_id = od.order_id
JOIN
    products p ON od.product_id = p.product_id
JOIN
    customers c ON o.customer_id = c.customer_id
WHERE
    o.ship_region = 'Western Europe'
GROUP BY
    YEAR(o.order_date)
ORDER BY
    sales_year;
