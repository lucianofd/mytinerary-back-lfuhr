import Cities from'./CityModel.js';

const cityController{
 getCities: async (req, res, next) => {
  try {
    const cities = await Cities.find();
    res.status(200).json(cities);
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
    }
  };

 getOneCity : async (req, res, next) => {
   const { name } = req.params;
   try {
    const city = await cities.find(city => city.name.toLowerCase() == name.toLowerCase());
    res.status(200).json(city);
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
    } 
  };

  postCity : async(req, res, next) => {
     try { nombre , description, country } = req.body

      if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
      res.status(413).send("El campo nombre no puede estar vacío");
    } else if  (
      pais == null ||
      pais.length == 0 ||
      /^\s+$/.test(pais)
    ) {
      res.status(413).send("El campo pais no puede estar vacio");
    }
      else {
      const existCity = await cities.find(city => city.name.toLowerCase() == name.toLowerCase());

      if (existCity) {
        res.status(413).send('La ciudad ya existe en la base');
      } else {
        const newCity = new City ({
          nombre,
          description,
         country,
        });
      const savedCity = await newCity.save();

        res.status(200).json(savedCity);
      }
    } 
     
      catch (e) {
    res.status(500).send('Error inesperado ' + e);
  }
   
  } ; 
  

}



exports default cityController




