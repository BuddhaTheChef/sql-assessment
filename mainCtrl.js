module.exports = {
  getAllUsers(req, res) {
    const db = req.app.get("db");
    db.getAllUsers().then(result => {
      res.json(result);
    });
  },
  getAllVehicles(req, res) {
    const db = req.app.get("db");
    db.getAllVehicles().then(result => {
      res.json(result);
    });
  },
  addUser(req, res) {
    const db = req.app.get("db");
    db.addUser([req.body.name, req.body.email]).then(result => {
      res.json(result);
    });
  },
  addVehicle(req, res) {
    const db = req.app.get("db");
    db
      .addVehicle([
        req.body.make,
        req.body.model,
        req.body.year,
        req.body.owner_id
      ])
      .then(result => {
        res.json(result);
      });
  },
  countVehiclesByOwner(req, res) {
    const db = req.app.get("db");
    db.countVehiclesByOwner(req.params.userId).then(result => {
      res.json(result);
    });
  },
  getVehiclesByOwner(req, res) {
    const db = req.app.get("db");
    db.getVehiclesByOwner(req.params.userId).then(result => {
      res.json(result);
    });
  },
  getVehiclesByQuery(req, res) {
    const db = req.app.get("db");
    if (req.query.userEmail) {
      return db.getVehiclesByEmail(req.query.userEmail).then(result => {
        return res.json(result);
      });
    }
    if (req.query.userFirstStart) {
      return db
        .getVehiclesByLetters(req.query.userFirstStart + "%")
        .then(result => {
          return res.json(result);
        });
    }
  },
  getNewerVehicles(req, res) {
    const db = req.app.get("db");
    db.getNewerVehicles().then(result => {
      res.json(result);
    });
  },
  changeVehicleOwner(req, res) {
    const db = req.app.get("db");
    db
      .changeVehicleOwner([req.params.vehicleId, req.params.userId])
      .then(result => {
        res.json(result);
      });
  },
  removeVehicleOwner(req, res) {
    const db = req.app.get("db");
    db.removeVehicleOwner([req.params.vehicleId]).then(result => {
      res.json(result);
    });
  },
  removeVehicle(req, res) {
    const db = req.app.get("db");
    db.removeVehicle([req.params.vehicleId]).then(result => {
      res.json(result);
    });
  }
}
