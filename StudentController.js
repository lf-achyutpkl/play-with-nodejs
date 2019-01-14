import express from 'express';
var httpntlm = require('httpntlm');
var parseString = require('xml2js').parseString;

const Router = express.Router();

Router.get('/', (req, res) => {
  httpntlm.get(
    {
      url:
        "http://103.198.8.224:7048/DynamicsNAV90/OData/Company('IME%20MOTORS%20PVT.%20LTD.')/EmployeeList",
      username: 'devapp.user',
      password: 'D3v@2019',
      workstation: '',
      domain: ''
    },
    function(err, response) {
      if (err) return err;

      console.log(response.headers);
      // parseString(response.body, function(err, result) {
      //   // console.log(result);
      //   res.json({ result });
      // });
      // console.log(response.body);
      res.send(response.body);
    }
  );

  // let student = { id: 1, name: 'Ram' };
  // res.json(student);
});

export default Router;
