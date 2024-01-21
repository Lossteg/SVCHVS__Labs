import React, { useEffect, useState } from "react";
import { getOrder } from "../../api/orderAPI";
import { Typography, Grid, Button } from "@mui/material";
import Card from "./Card";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs"; // Импортируем exceljs

function OrderList({ header }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrder();
        setOrders(data);
      } catch (error) {
        console.log("Error fetching order data:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDownloadPDFClick = () => {
    console.log("Я пытался");
    const tableColumns = [
      { title: "Service", field: "service" },
      { title: "Properties", field: "properties" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      { title: "Total Price", field: "totalPrice", type: "numeric" },
    ];
    const totalPagesExp = "1";
    const doc = new jsPDF();

    const formatProperties = (row) => {
      if (row.properties) {
        return Object.entries(row.properties)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ");
      }
      return "";
    };

    doc.page = 1;
    doc.text("Table 1", 15, 10);

    const formattedOrders = orders.map((order) => ({
      ...order,
      properties: formatProperties(order),
    }));

    autoTable(doc, {
      theme: "grid",
      headStyles: { fontSize: 10 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      columns: tableColumns.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: formattedOrders,
    });

    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }
    doc.save("ReportTable.pdf");
  };

  const handleDownloadExcelClick = () => {
    handleExport().then((blob) => {
      const url = URL.createObjectURL(blob);
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", "report.xlsx");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  };

  const handleExport = async () => {
    const formatProperties = (row) => {
      if (row.properties) {
        return Object.entries(row.properties)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ");
      }
      return "";
    };

    const formattedOrders = orders.map((order) => ({
      ...order,
      properties: formatProperties(order),
    }));

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Table Data");

    const tableColumns = [
      { title: "Service", field: "service" },
      { title: "Properties", field: "properties" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      { title: "Total Price", field: "totalPrice", type: "numeric" },
    ];

    // Добавляем заголовки столбцов в таблицу
    tableColumns.forEach((col, index) => {
      sheet.getCell(1, index + 1).value = col.title;
    });

    // Добавляем данные
    formattedOrders.forEach((order, rowIndex) => {
      sheet.addRow();

      // Здесь вычисляем значение для столбца "Properties"
      const propertiesValue =
        order.properties !== undefined ? order.properties : "";
      sheet.getCell(rowIndex + 2, 2).value = propertiesValue;

      // Заполняем остальные ячейки
      tableColumns.forEach((col, colIndex) => {
        if (col.field !== "properties") {
          const cellValue = order[col.field];
          sheet.getCell(rowIndex + 2, colIndex + 1).value = cellValue;
        }
      });
    });

    // Сохраняем в Blob
    const blob = await workbook.xlsx.writeBuffer();
    return new Blob([blob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  };

  return (
    <div className="main" align="center">
      <Typography
        variant="h1"
        textAlign="center"
        style={{
          marginBottom: "10px",
          color: "black",
          fontSize: "3.7rem",
          fontWeight: "400",
        }}
      >
        {header}
      </Typography>
      <Button
        onClick={handleDownloadPDFClick}
        color="primary"
        variant="contained"
      >
        Download PDF
      </Button>
      <Button
        onClick={handleDownloadExcelClick}
        color="primary"
        variant="contained"
      >
        Download Excel
      </Button>
      <Grid
        container
        spacing={2}
        style={{ flexDirection: "column", justifyContent: "center" }}
      >
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
            <Grid
              item
              key={index}
              xs="auto"
              sm="auto"
              md="auto"
              style={{ padding: "16px 0px 16px 20px" }}
            >
              <Card order={order} />
            </Grid>
          ))
        ) : (
          <p>You've made no orders yet</p>
        )}
      </Grid>
    </div>
  );
}

export default OrderList;
