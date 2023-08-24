const get=require('./crud');
const users=require('./crud');
const business=require('./crud');
const partner=require('./crud');
const cours=require('./crud');
const config=require('./ConfigDb');
const sql = require('mssql');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connect } = require('http2');
const app = express();
const crud = require('./crud');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const Jwt_de_encrypt = "dajhgkds!@#dSDAfvab13[{.,;:}]';'hasdfhhjag23427ad#@$@#sgh21SDHAGHA#324fs4sfvdr";

// Rest of your code

app.use(express.json());
const corsOptions={
    origin: 'http://localhost:3001',
};

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51NG6ztILh5nwppOnquRWkswBrGm5eQ44zbWixGGHGvq0htV7rzfHBEZatN9rpx4f7wq9XnBpYfA2HXXXLlRXYTfX00CzvoFwMz');

require("dotenv").config();


// STRIPEEEEE // 



app.post("/payment", cors(), async (req, res) =>{
  let {amount, id} = req.body;
  try{
      const payment = await stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description: "Learnfy",
          payment_method: id,
          confirm: true
      })
      console.log("Payment", payment);
      res.json({
          message: "Payment successful", 
          success: true
      })


  } catch(error){
      console.log("Error", error);
      res.json({
          message:"Payment failed",
          success: false
      })
  }
})

// LOGINNNN


app.post("/enroll", async (req, res) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }

    // Verify the token
    jwt.verify(token, Jwt_de_encrypt, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const studentEmail = decodedToken.username;

      // Find the student based on the email
      const student = await get.getUserin(studentEmail);
      if (!student) {
        console.log("Student not found");
        return res.status(404).json({ error: "Student not found" });
      }

      const { courseId } = req.body;

      await get.insertEnrollment(student.StudentId, courseId);

      res.json({ message: "Enrollment successful" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});








app.get("/getStudentIdByEmail", async (req, res) => {
  const { email } = req.query;

  try {
    const student = await get.getStudentIdByEmail(email);

    if (student) {
      res.json({ id: student.StudentId });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/getStudentLastNameByEmail", async (req, res) => {
  const { email } = req.query;

  try {
    const student = await get.getStudentLastNameByEmail(email);

    if (student) {
      res.json({ lastname: student.Mbiemri });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});





app.get("/getStudentNameByEmail", async (req, res) => {
  const { email } = req.query;

  try {
    const student = await get.getStudentNameByEmail(email);

    if (student) {
      res.json({ name: student.Emri });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});




  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await get.getUserin(email, password);
      if (!user) {
          console.log("User not found");
        res.status(404).json({ error: "User not found" });
      } else {
        console.log("User found");
        const token = jwt.sign(
          { username: user.Email, role: user.Roli },
          Jwt_de_encrypt,
          { expiresIn: '5s' }
        );
        res.json({ token });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });


app.get('/checkEmail/:email', async (req, res) => {
const { email } = req.params;

try {
let pool = await sql.connect(config);
let result = await pool.request().query(`SELECT * FROM Student WHERE Email='${email}'`);
const exists = result.recordset.length > 0;
res.json({ exists: exists });
} catch (error) {
console.log(error);
res.status(500).json({ error: 'An error occurred' });
}
});






















// API FOR KURSET // 

  app.use('/getCourse',(req,res)=>{
    get.getKurset().then(x=>{
        res.send(x.recordset);
    })
});

app.delete("/deleteCourse/:id", async (req, res) => {
    const { id } = req.params;
    get.deleteKurs(id).then((x) => {
      res.send(x);
    });
  });

  app.put("/updateCourse/:id", async (req, res) => {
    try {
      const { KursiId } = req.params;
      const { Kategori, Emri, Pershkrimi, Foto} = req.body;
  
      const result = await get.updateKurs(KursiId, Kategori, Emri, Pershkrimi,Foto);

      if (result.rowsAffected && result.rowsAffected[0] > 0) {
        res.status(200).json({ message: "Record updated successfully" });
      } else {
        res.status(404).json({ message: "Record not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.post("/createKurs", (req, res) => {
    const { Kategori, Emri, Pershkrimi, Foto} = req.body;
    crud.createKurs(Kategori, Emri, Pershkrimi, Foto).then((x) => {
        res.send(x);
      });
  });


  app.get('/getPopCourse',(req,res)=>{
    get.getPopKurset().then(y=>{
        res.send(y.recordset);
    })
  });
  
  app.get('/getCourse/:id',(req,res)=>{
    const KursiId=req.params.id;
     get.getKursin(KursiId).then(x=>{
       return res.json(x);
     })
     console.log(KursiId);
   });
  
   app.put('/updateCourse/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { Kategori, Emri, Pershkrimi, Foto} = req.body;
      console.log(Kategori+' '+Emri+' '+Pershkrimi+' '+Foto+" "+id);
      const result = await get.updateKurs(id, Kategori, Emri, Pershkrimi,Foto);
    } catch (err) {
      console.log(err);
    }
  });
  

  app.get("/countKurse", (req, res) => {
    crud.countKurse().then((x) => {
      res.send(x.recordset);
    });
  });

  app.get('/kategorite', async (req, res) => {
    try {
      const categories = await cours.getCategories();
      res.send(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send('Gabim gjatë marrjes së kategorive');
    }
  });


  app.post("/insertNdertesa", (req, res) => {
    const { Pershkrimi58281} = req.body;
    crud.insertNdertesa(Pershkrimi58281).then((x) => {
        res.send(x);
      });
  });
  app.use('/getNdertesa',(req,res)=>{
    get.getNdertesa().then(x=>{
        res.send(x.recordset);
    })
})
app.delete("/deleteNdertesa/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteNdertesa(id).then((x) => {
    res.send(x);
  });
});
app.get('/getNdertesen/:id',(req,res)=>{
  const NdertesaID=req.params.id;
   get.getNdertesen(NdertesaID).then(x=>{
     return res.json(x);
   })
   console.log(NdertesaID);
 });


 app.put('/updateNdertesa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Pershkrimi58281 } = req.body;
    console.log(Pershkrimi58281 + id);
    const result = await get.updateNdertesa(id, Pershkrimi58281);
  } catch (err) {
    console.log(err);
  }
});
app.post("/insertApartament", (req, res) => {
  const { Pershkrimi58281, NdertesaID } = req.body;
  crud.insertApartament(Pershkrimi58281, NdertesaID).then((x) => {
      res.send(x);
    });
});
app.use('/getApartament',(req,res)=>{
  get.getApartament().then(x=>{
      res.send(x.recordset);
  })
})
app.delete("/deleteApartament/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteApartament(id).then((x) => {
    res.send(x);
  });
});
app.get('/getApartamentin/:id',(req,res)=>{
  const ApartamentiID=req.params.id;
   get.getApartamentin(ApartamentiID).then(x=>{
     return res.json(x);
   })
   console.log(ApartamentiID);
 });


 app.put('/updateApartament/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Pershkrimi58281, NdertesaID} = req.body;
    console.log(Pershkrimi58281+' '+NdertesaID+" "+id);
    const result = await get.updateApartament(id, Pershkrimi58281, NdertesaID);
  } catch (err) {
    console.log(err);
  }
});








  app.post("/insertBank", (req, res) => {
    const { Emri} = req.body;
    crud.insertBank(Emri).then((x) => {
        res.send(x);
      });
  });
  app.use('/getBank',(req,res)=>{
    get.getBank().then(x=>{
        res.send(x.recordset);
    })
})

  app.post("/insertPerson", (req, res) => {
    const { name } = req.body;
    crud.insertPerson(name).then((x) => {
        res.send(x);
      });
  });

  app.use('/getPerson',(req,res)=>{
    get.getPerson().then(x=>{
        res.send(x.recordset);
    })
})

app.delete("/deletePerson/:id", async (req, res) => {
  const { id } = req.params;
  get.deletePerson(id).then((x) => {
    res.send(x);
  });
});

app.post("/insertPersonBank", (req, res) => {
  const { PersonId, BankaId } = req.body;
  crud.insertPersonBank(PersonId, BankaId).then((x) => {
      res.send(x);
    });
});


  
   

  // API FOR STUDENT //

  app.post("/insertStudent", (req, res) => {
    const { Emri, Mbiemri, Email, Passwordi,Roli} = req.body;
    crud.insertStudent(Emri, Mbiemri, Email, Passwordi,Roli).then((x) => {
        res.send(x);
      });
  });


  app.use('/getStudent',(req,res)=>{
    get.getStudent().then(x=>{
        res.send(x.recordset);
    })
});

app.use('/getEmriMbiemriStudent',(req,res)=>{
  get.getEmriStudent().then(x=>{
      res.send(x.recordset);
  })
});

app.get("/countStudent", (req, res) => {
  crud.countStudent().then((x) => {
    res.send(x.recordset);
  });
});

app.delete("/deleteStudent/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteStudent(id).then((x) => {
    res.send(x);
  });
});


app.get('/getStudentin/:id',(req,res)=>{
  const StudentId=req.params.id;
   get.getStudentin(StudentId).then(x=>{
     return res.json(x);
   })
   console.log(StudentId);
 });


 app.put('/updateStudent/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Emri, Mbiemri, Email, Passwordi} = req.body;
    console.log(Emri+' '+Mbiemri+' '+Email+' '+Passwordi+" "+id);
    const result = await get.updateStudent(id, Emri, Mbiemri, Email,Passwordi);
  } catch (err) {
    console.log(err);
  }
});


app.use('/getContactUs',(req,res)=>{
  get.getContacts().then(x=>{
      res.send(x.recordset);
  })
});

app.delete("/deleteContact/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteContact(id).then((x) => {
    res.send(x);
  });
});
app.get('/getContact/:id',(req,res)=>{
  const contactID=req.params.id;
   get.getContactById(contactID).then(x=>{
     return res.json(x);
   })
   console.log(contactID);
 });




//API FOR PROFESOR

app.get('/getProff/:id',(req,res)=>{
  const ProfesoriId=req.params.id;
   get.getProfesorin(ProfesoriId).then(x=>{
     return res.json(x);
   })
   console.log(ProfesoriId);
 });

app.put('/updateProff/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Emri, Mbiemri, Email, Passwordi, Subject} = req.body;
    console.log(Emri+' '+Mbiemri+' '+Email+' '+Passwordi+' '+Subject+" "+id);
    const result = await get.updateProff(id, Emri, Mbiemri, Email,Passwordi,Subject);
  } catch (err) {
    console.log(err);
  }
});

app.use('/getProfesori',(req,res)=>{
  get.getProfesori().then(x=>{
      res.send(x.recordset);
  })
});

app.get('/getProfesori/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const professor = await users.getProfesorById(id);
  } catch (error) {
    console.log(error);
  }
});



app.put('/updateProfesori/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Emri, Mbiemri, Email, Passwordi } = req.body;

    console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi + ' ' + id);

    const result = await users.updateProfesori(id, Emri, Mbiemri, Email, Passwordi);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteProfesori/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteProfesori(id).then((x) => {
    res.send(x);
  });
});

app.post("/insertProfesor", (req, res) => {
  const { Emri, Mbiemri, Email, Passwordi, Subject,Roli} = req.body;
  get.insertProfesori(Emri, Mbiemri, Email, Passwordi, Subject,Roli).then((x) => {
      res.send(x);
    });
});

app.get('/materialet', (req, res) => {
  const kursiId = req.query.kursiId; 
  const profesorId = req.query.profesorId; 

  const query = `
    SELECT KP.Material, K.Emri AS EmriKursit, P.Emri AS EmriProfesorit
    FROM Kurs_Prof KP
    JOIN Kurse K ON KP.KursiId = K.KursiId
    JOIN Profesori P ON KP.ProfesorId = P.ProfesorId
    WHERE K.KursiId = @kursiId AND P.ProfesorId = @profesorId
  `;

  const request = new sql.Request();
  request.input('kursiId', kursiId);
  request.input('profesorId', profesorId);

  request.query(query, (err, result) => {
    if (err) {
      console.error('Gabim gjatë ekzekutimit të kërkesës SQL:', err);
      res.status(500).json({ error: 'Gabim gjatë ekzekutimit të kërkesës SQL' });
    } else {
      const materialet = result.recordset;
      res.json(materialet);
    }
  });
});


app.use('/getApplications',(req,res)=>{
  get.getAllApplications().then(x=>{
      res.send(x.recordset);
  })
});

app.post("/createApplications", (req, res) => {
  const { FirstName, LastName, Email, LevelOfStudy,PlaceOfStudy, SubjectCategory } = req.body;
  crud.createApplication(FirstName, LastName, Email, LevelOfStudy,PlaceOfStudy,SubjectCategory ).then((x) => {
      res.send(x);
    });
});

app.delete("/deleteApplications/:id", async (req, res) => {
  const { id } = req.params;
  get.deleteApplication(id).then((x) => {
    res.send(x);
  });
});

app.put('/applications/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await business.updateApplication(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});







//contactus

app.get('/getContacts', async (req, res) => {
  get.getContacts().then(x=>{
    res.send(x.recordset);
 })
});





app.post('/createContact', async (req, res) => {
  const { name, company, email, phoneNumber,details} = req.body;
  get.createContact(name, company, email, phoneNumber,details).then((x) => {
      res.send(x);
    });
});

app.delete('/deleteContact/:id', async (req, res) => {
  const { id } = req.params;
  get.deleteContact(id).then((x) => {
    res.send(x);
  });
});

app.put('/updateContact/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company, email, phoneNumber,details} = req.body;
    console.log(name+' '+company+' '+email+' '+phoneNumber+' '+details+ " " +id);
    const result = await get.updateContact(id,name, company, email, phoneNumber,details);
  } catch (err) {
    console.log(err);
  }
});

// app.put('/contacts/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await contactus.updateContact(id, req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

app.use('/getPartners',(req,res)=>{
  get.getPartners().then(x=>{
      res.send(x.recordset);
  })
});

app.post("/insertPartners", (req, res) => {
  const { name, company, email, coursecategory} = req.body;
  crud.insertPartner(name, company, email, coursecategory).then((x) => {
      res.send(x);
    });
});

app.post("/insertContact", (req, res) => {
  const { name, company, email, phoneNumber,details } = req.body;
  get.insertContact(name, company, email, phoneNumber, details).then((x) => {
      res.send(x);
    });
});

app.get('/getPartnerin/:id',(req,res)=>{
  const PartnerId=req.params.id;
   get.getPartnerById(PartnerId).then(x=>{
     return res.json(x);
   })
   console.log(PartnerId);
 });

app.put('/updatePartners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company, email, coursecategory} = req.body;
    console.log(name+' '+company+' '+email+' '+coursecategory+" "+id);
    const result = await get.updatePartner(id, name, company, email,coursecategory);
  } catch (err) {
    console.log(err);
  }
});



app.delete("/deletePartners/:id", async (req, res) => {
  const { id } = req.params;
  get.deletePartner(id).then((x) => {
    res.send(x);
  });
});


//filteri

app.get('/filterkategorite', async (req, res) => {
  const query = 'SELECT DISTINCT kategori FROM kurset';

  try {
    const { category, language, level, availability } = req.query;
    const conn = await sql.connect(config);

    let conditions = [];
    let params = [];

    if (category) {
      conditions.push("Kategori = @category");
      params.push({ name: 'Kategori', type: sql.NVarChar, value: category });
    }

    if (language) {
      conditions.push("Language = @language");
      params.push({ name: 'language', type: sql.NVarChar, value: language });
    }

    if (level) {
      conditions.push("Level = @level");
      params.push({ name: 'level', type: sql.NVarChar, value: level });
    }

    // if (availability) {
    //   conditions.push("Availability = @availability");
    //   params.push({ name: 'availability', type: sql.NVarChar, value: availability });
    // }

    let query = "SELECT * FROM Kurse";
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    const request = conn.request();
    params.forEach(param => {
      request.input(param.name, param.type, param.value);
    });

    const result = await request.query(query);
    res.send(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send('Gabim gjatë kërkesës së filtrimit');
  }
});

// app.get('/courses', async (req, res) => {
//   const { category } = req.query;

//   try {
//     let courses;

//     if (category) {
//       // Query the database to retrieve courses with the matching category
//       courses = await db.query('SELECT * FROM Kurse WHERE Kategori = ?', [category]);
//     } else {
//       // No category provided, retrieve all courses
//       courses = await db.query('SELECT * FROM Kurse');
//     }

//     res.json(courses);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/emri/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await sql.query`SELECT Emri FROM Kursi WHERE KursiId = ${id}`;
//     res.json({ emri: result.recordset[0].Emri });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Gabim në marrjen e të dhënave' });
//   }
// });

// app.get('/kategori/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await sql.query`SELECT Kategori FROM Kursi WHERE KursiId = ${id}`;
//     res.json({ kategori: result.recordset[0].Kategori });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Gabim në marrjen e të dhënave' });
//   }
// });

// app.get('/pershkrimi/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await sql.query`SELECT Pershkrimi FROM Kursi WHERE KursiId = ${id}`;
//     res.json({ pershkrimi: result.recordset[0].Pershkrimi });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Gabim në marrjen e të dhënave' });
//   }
// });

// app.get('/materialet', async (req, res) => {
//   const { kursiId, profesorId } = req.query;
//   try {
//     const result = await sql.query`SELECT Material FROM Kurs_Prof WHERE KursiId = ${kursiId} AND ProfesorId = ${profesorId}`;
//     res.json(result.recordset);
//   } catch (error) {
//     console.error('Gabim gjatë marrjes së kategorive:', error);
//     res.status(500).json({ error: 'Gabim gjatë marrjes së kategorive' });
//   }
// });



app.post('/filtro-kurset', async (req, res) => {
  const { kategori, gjuhe, nivel,} = req.body;

  const query = 'SELECT * FROM kurset WHERE kategori = @kategori AND gjuhe = @gjuhe AND nivel = @nivel';

  const params = {
    kategori,
    gjuhe,
    nivel
  };

  try {
    const result = await sql.query(query)
      .input('kategori', params.kategori)
      .input('gjuhe',params.gjuhe)
      .input('nivel',params.nivel)
      .execute();

    res.json(result.recordset);
  } catch (error) {
    console.error('Gabim gjatë filtrimit të kurseve:', error);
    res.status(500).json({ error: 'Gabim gjatë filtrimit të kurseve' });
  }
});






app.listen(3001,()=>{
    console.log('app is listening on port 3001');
})