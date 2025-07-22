const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).send(products);
});

router.post("/", async (req, res) => {
  const { description, store, barcode } = req.body;
  const product = {
    description: description,
    store: store,
    barcode: barcode,
    created: new Date(),
  };
  const newProduct = await prisma.product.create({ data: product });
  res.status(201).send(newProduct);
});

module.exports = router;
