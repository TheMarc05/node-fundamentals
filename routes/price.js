const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const prices = await prisma.price.findMany();
  res.status(200).send(prices);
});

router.post("/", async (req, res) => {
  const { value, productId } = req.body;
  const price = {
    value: value,
    productId: productId,
    created: new Date(),
  };
  const newPrice = await prisma.price.create({ data: price });
  res.status(201).send(newPrice);
});

module.exports = router;
