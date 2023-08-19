import Cities from'./CityModel.js';

const cityController{
 getCities = async (req, res, next) => {
  try {
    const cities = await Cities.find();
    res.status(200).json(cities);
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
    }
  };

 getOneCity =  async (req, res, next) => {
   const { name } = req.params;
   try {
    const city = await cities.find(city => city.name.toLowerCase() == name.toLowerCase());
    res.status(200).json(city);
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
    }
  };

  
  

}



exports default cityController




