import express from "express";
const app = express();

// Middleware que registra la fecha y hora de la solicitud
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next(); // Pasa el control al siguiente middleware
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Página Principal");
});

app.listen(3000, () => {
  console.log("Aplicación escuchando en el puerto 3000");
});
