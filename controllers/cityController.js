import City from '../Models/City.js';


const cityController = {
  
  //Listar ciudades
  getCities: async (req, res, next) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
    }
  },
  
  // Ciudad por nombre
 getOneCity : async (req, res, next) => {
   const { name } = req.params;
   try {
    const city = City.findOne({name: name.toLowerCase() })
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).send('City not found');
    }
  } catch (e) {
    res.status(500).send('Error inesperado ' + e);
  }
  },

  // Ciudad por ID
 getOneById : async (req, res, next) => {
  const { id } = req.params;
  try {
   const city = City.findById(id);
   if (city) {
     res.status(200).json(city);
   } else {
     res.status(404).send('City not found');
   }
 } catch (e) {
   res.status(500).send('Error inesperado ' + e);
 }
 },

  //Agregar registro
  postCity : async (req, res, next) => {
     try {
      const { name, picture, country, description, atractions } = req.body

      if (!name|| /^\s+$/.test(name)) {
      res.status(413).send("The name field cannot be empty.");
    } else if  (!picture  ||/^\s+$/.test(pais)) {
      res.status(413).send("Select a picture cannot be empty.");
    }
      else {
      const existCity = await City.findOne({ name: name.toLowerCase() });
      if (existCity) {
        res.status(413).send("There is already a record associated with that name");
      } //revisar desde aca 
       else {
        const newCity = new City ({
          name,
          picture,
          country, 
          description,
          attractions,
        });
      const savedCity = await newCity.save();

        res.status(200).json(savedCity);
      }
    
    } 
  }
      catch (e) {
    res.status(500).send('Error inesperado ' + e);
  }
   
  } ,

  //Modificar registro

  putCity: async(req, res, next) =>{
    const { id } = req.params;
    const updateData = req.body;

    try {
    // Exluye Id de datos a modificar
      delete updateData._id;

       const updatedCity = await City.findByIdAndUpdate(id, updateData, { new: true });

      if (updatedCity) {
        res.status(200).json(updatedCity);
      } else {
        res.status(404).send('City not found');
      }
    } catch (e) {
    res.status(500).send('Error inesperado ' + e);
  }
  },
  
  // Eliminar registro
  deleteCity: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCity = await City.findOneAndDelete( { _id: id});
      if (deletedCity) {
        res.status(200).json(deletedCity);
      } else {
        res.status(404).send('City not found');
      }
    } catch (e) {
      res.status(500).send('Error inesperado ' + e);
    }
  },

  

}



export default cityController;




