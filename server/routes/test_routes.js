import express from 'express';
import testController from '../controllers/test_controller';

const router = express.Router();

router.route('/')
  // POST /tests
  .post(testController.create)
  // GET /tests
  .get(testController.getAll);

router.route('/:id')
  // PUT /tests/:id
  .put(testController.update)
  // DELETE /tests/:id
  .delete(testController.delete)
  // GET /tests/:id
  .get(testController.getById);

module.exports = router;