const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getByProductId(productId) {
  return await prisma.price.findMany({
    where: { productId: parseInt(productId) },
  });
}

module.exports = { getByProductId };
