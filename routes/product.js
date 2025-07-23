const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

router.get("/", async (req, res) => {
  let products;
  try {
    products = await productService.getAll();
  } catch (e) {
    res
      .status(500)
      .send({ error: `Server error occurred. Message: ${e.message}` });
    return;
  }
  res.status(200).send(products);
});

router.get("/:productId/prices", async (req, res) => {
  const { productId } = req.body;
  let pricesForProduct;
  try {
    pricesForProduct = await productSerivce.getByProductId(productId);
  } catch (e) {
    res
      .status(400)
      .send({ error: `Server error occurred. Message: ${e.message}` });
    return;
  }
  res.status(200).send(pricesForProduct);
});

router.post("/", async (req, res) => {
  const { description, barcode } = req.body;
  let newProduct;
  try {
    newProduct = await productService.create({ description, barcode });
  } catch (e) {
    res
      .status(400)
      .send({ error: `Product could not be created. Message: ${e.message}` });
    return;
  }
  res.status(201).send(newProduct);
});

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  let product;
  try {
    product = await productService.getById(productId);
  } catch (e) {
    res
      .status(500)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
  res.status(200).send(product);
});

router.put("/:productId", async (req, res) => {
  const { productId } = req.params;
  const { description, barcode } = req.body;

  let product;
  try {
    product = await productService.update({
      id: productId,
      description: description,
      barcode: barcode,
    });
  } catch (e) {
    res
      .status(400)
      .send({ error: `Product could not be updated. Message: ${e.message}` });
    return;
  }
  res.status(200).send(product);
});

router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  let deletedProduct;
  try {
    deletedProduct = await productService.deleteById(productId);
  } catch (e) {
    res
      .status(400)
      .send({ error: `Product could not be deleted. Message: ${e.message}` });
    return;
  }
  res.status(200).send(deletedProduct);
});

module.exports = router;
