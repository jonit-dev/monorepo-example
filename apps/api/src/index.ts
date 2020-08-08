import { Calculate } from '@yw/math';
import express from 'express';

const app: express.Application = express()
const port: number = 4000

// Middlewares ========================================
app.use(express.json())


app.get("/", async (req, res) => {

  return res.status(200).send({
    message: Calculate.sum(2, 3)
  })

})


app.listen(port, async () => {

  console.log(`App listening on port ${port}`);

  console.log(`Blend result is the following => ${Calculate.sum(5, 4)}`);
})