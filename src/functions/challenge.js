// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

/*
    SECCIÓN PROBLEMAS
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. 
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.     
      - Su prueba debe ejecutarse sin errores al correr los test.
      - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
  */
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel, ordenados de menor a mayor
export const listPaddockManagerIds = () => {
  const list = paddockManagers.map((pm) => pm.id).sort();
  return list;
};

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
export const listPaddockManagersByName = () => {
  const names = paddockManagers.map((el) => el.name).sort();
  const list = [];
  for (let index = 0; index < paddockManagers.length; index++) {
    paddockManagers.find(
      (el) => el.name === names[index] && list.push(el.taxNumber)
    );
  }
  
  return list;
};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
export const sortPaddockTypeByTotalArea = () => {
  const list = paddockType.map((el) => {
    return {
      name: el.name,
      cantidad: paddocks.filter((pt) => pt.paddockTypeId === el.id).length,
    };
  });

  list
    .sort((a, b) => {
      if (a.cantidad < b.cantidad) return -1;
      if (a.cantidad > b.cantidad) return 1;
      return 0;
    })
    .reverse();

  return list.map((el) => el.name);
};

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
export const sortFarmManagerByAdminArea = () => {
  const managersByArea = {};

  paddocks.forEach((padock) => {
    const { paddockManagerId, area } = padock;
    managersByArea[paddockManagerId] ??= 0;
    managersByArea[paddockManagerId] += area;
  });

  const res = paddockManagers
    .map((m) => ({
      ...m,
      totalHectareas: managersByArea[m.id],
    }))
    .sort((a, b) => b.totalHectareas - a.totalHectareas)
    .map((el) => el.name);

  return res;
};

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
export const farmManagerNames = () => {
  const obj = {};

  farms.forEach((farm) => {
    const { id, name } = farm;
    const managesIds = paddocks
      .filter((el) => el.farmId === id)
      .map((el) => el.paddockManagerId);

    paddockManagers.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    const taxNumbers = [];

    paddockManagers.forEach((mg) => {
      const { id, taxNumber } = mg;

      managesIds.filter((el) => el === id && taxNumbers.push(taxNumber));
    });

    obj[name] = [...new Set(taxNumbers)];
  });
  return obj;
};

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
export const biggestAvocadoFarms = () => {
  let list = paddocks.filter((el) => el.paddockTypeId === 1);
  let farm1, farm2, farm3;
  let res = [];

  farm1 = list.filter((el) => el.farmId === 1 && el.area).map((el) => el.area);
  farm2 = list.filter((el) => el.farmId === 2 && el.area).map((el) => el.area);
  farm3 = list.filter((el) => el.farmId === 3 && el.area).map((el) => el.area);

  const sumFarm1 = farm1.reduce((prev, curr) => prev + curr, 0);
  const sumFarm2 = farm2.reduce((prev, curr) => prev + curr, 0);
  const sumFarm3 = farm3.reduce((prev, curr) => prev + curr, 0);

  sumFarm1 >= 20000 ? res.push(sumFarm1) : "";
  sumFarm2 >= 20000 ? res.push(sumFarm2) : "";
  sumFarm3 >= 20000 ? res.push(sumFarm3) : "";

  return res.sort().reverse();
};

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
export const biggestCherriesManagers = () => {
  const admins = [];

  paddocks.forEach((packdok) => {
    const { paddockManagerId, paddockTypeId, farmId, area } = packdok;

    if (farmId === 3 && area > 1000 && paddockTypeId === 3) {
      admins.push(
        paddockManagers.find((el) => el.id === paddockManagerId).name
      );
    }
  });

  return admins;
};

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
export const farmManagerPaddocks = () => {
  const obj = {};

  paddockManagers.forEach((manage) => {
    const { id, name } = manage;
    const farmsIds = paddocks
      .filter((el) => el.paddockManagerId === id)
      .map((el) => el.farmId);

    farms.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    const farmsArray = [];

    farms.forEach((farm) => {
      const { id, name } = farm;

      farmsIds.filter((el) => el === id && farmsArray.push(name));
    });

    obj[name] = [...new Set(farmsArray)];
  });
  
  return obj;
};

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
export const paddocksManagers = () => {

  const obj = {};

  const list = []; 

  paddockType.forEach(type => {
    const {id} = type;

    list.push(...paddocks.filter(el => el.paddockTypeId === id))

  })

  list.forEach(paddock =>{
    const {paddockManagerId,paddockTypeId,harvestYear} = paddock;

    const type = paddockType.find(el => el.id === paddockTypeId).name;



    //console.log(type);
    obj[`${type}-${harvestYear}`] = {};
  })

  //console.log(list.length, paddocks.length);

};

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
export const newManagerRanking = () => {
  paddockManagers.push({ id: 7, taxNumber: "123456", name: "JUAN PEDRO DOE" });
  paddocks.push({
    paddockManagerId: 7,
    farmId: 1,
    paddockTypeId: 4,
    harvestYear: 2017,
    area: 900,
  });

  return [...new Set(sortFarmManagerByAdminArea())];
};

// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo

console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
//console.log("Pregunta 8");
//console.log(paddocksManagers());
//console.log("Pregunta 9");
//console.log(newManagerRanking());

