const db = require("./db");
const calculateDistance = require("./distance.js");


// ADD SCHOOL
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    !name ||
    !address ||
    latitude === undefined ||
    longitude === undefined
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database error",
          error: err,
        });
      }

      res.status(201).json({
        message: "School added successfully",
      });
    }
  );
};


// LIST SCHOOLS
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and longitude required",
    });
  }

  db.query("SELECT * FROM schools", (err, schools) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    const sortedSchools = schools.map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance: distance.toFixed(2) + " km",
      };
    });

    sortedSchools.sort(
      (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
    );

    res.json(sortedSchools);
  });
};