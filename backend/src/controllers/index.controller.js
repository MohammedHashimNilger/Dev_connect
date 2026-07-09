export const home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to DevConnect API",
  });
};

export const test = (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Data received",
    data: req.body,
  });
};