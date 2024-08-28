import express from "express";
import { v4 as uuidv4 } from "uuid";
import Card from "../mongodb/models/cards.js";

const router = express.Router();

// Create a new card
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create new card instance
    const newCard = new Card({
      id: uuidv4(),
      title,
      description,
    });

    // Save card to database
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(500).json({ error: 'Error creating card', details: error.message });
  }
});

export default router;