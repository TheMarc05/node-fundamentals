const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.status(201).send(user);
});

module.exports = router;
