const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAll() {
  return await prisma.product.findMany();
}

async function create(product) {
  validate(product);
  product.created = new Date();
  const newProduct = await prisma.product.create({ data: product });
  return newProduct;
}

async function getById(id) {
  return await prisma.product.findUnique({ where: { id: parseInt(id) } });
}

async function update(productData) {
  if (!productData) {
    throw new Error("Invalid product data");
  }

  const product = await prisma.product.update({
    where: { id: parseInt(productData.id) },
    data: {
      description: productData.description,
      barcode: productData.barcode,
    },
  });
  return product;
}

async function deleteById(id) {
  if (!id) {
    throw new Error("Invalid product id");
  }
  const deletedProduct = await prisma.product.delete({
    where: { id: parseInt(id) },
  });
  return deletedProduct;
}

function validate(product) {
  if (!product) {
    throw new Error("Invalid product");
  }

  if (!product.description) {
    throw new Error("Product description cannot be null or undefined");
  }

  if (!product.barcode) {
    throw new Error("Product barcode cannot be null or undefined");
  }
}

module.exports = { getAll, create, getById, update, deleteById };
