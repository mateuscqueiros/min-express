import express from 'express';

const router = express.Router();

router.get("/ola", (req, res) => {
  res.send("Ola mundo")
}) 

export default router;
