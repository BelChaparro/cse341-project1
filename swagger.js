const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
      title: 'Contacts API',
      description: 'Contacts API',
    },
    host: 'project1-co8k.onrender.com',
    scheme: ['https'],
  };

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
