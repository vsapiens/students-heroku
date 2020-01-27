exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://admin:admin@cluster0-qj4rz.mongodb.net/university?retryWrites=true&w=majority";

exports.PORT = process.env.PORT || 8080;
