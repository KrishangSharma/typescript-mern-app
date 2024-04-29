const mongoose = require("mongoose");

export const connectDb = (uri: string | undefined) => {
  mongoose
    .connect(uri)
    .then(() => console.log("Server is connected!"))
    .catch((err: object) => console.log("Error connecting to database: ", err));
};
