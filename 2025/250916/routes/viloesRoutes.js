// destructuring / desestruturação
import { ViloesRouter } from "express";
const router = ViloesRouter();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/viloesController.js";

router.get("/", list);
router.get("/:id", listById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export { router };
