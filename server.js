/* import exterenal moduls */
import express from 'express';
import dotenv from 'dotenv';

/* import internal moduls */
import router from "./router.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use("/", router);

// טיפול בשגיאות
app.use((err, req, res, next) => {
  console.error("❌", err);
  res.status(err.statusCode || 500).json({ message: err.message });
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Tuya service running on port ${port}`);
});
