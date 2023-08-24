const config=require('./ConfigDb');
const sql=require('mssql');
const bcrypt=require('bcryptjs');


// CRUD FOR PARTNER //

// const getPartneret = async () => {
//   try {
//     const conn = await sql.connect(config);
//     const query = await conn.request().query("SELECT * FROM Partneret");
//     return query;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// const deletePartner = async (PartnerId) => {
//   try {
//     const conn = await sql.connect(config);
//     const query = await conn.request().query(`DELETE FROM Partneret WHERE PartnerId=${PartnerId}`);
//     return query;
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// CRUD FOR KURSET // 
const getKurset= async()=> {
    try{
        let pool =await sql.connect(config);
        let kurset = pool.request().query('Select * from Kurse')
        console.log(kurset);
        return kurset;

    }catch(error){
        console.log(error);
    }
}

const createKurs = async (Kategori, Emri, Pershkrimi, Foto) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Kurse VALUES ('${Kategori}','${Emri}','${Pershkrimi}','${Foto}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteKurs = async (id) => {
    try {
      let pool = await sql.connect(config);
      let kurset = pool.request()
        .query(`DELETE FROM Kurse WHERE KursiId = ${id}`);
      console.log(kurset);
      return (await kurset).recordset;
    } catch (error) {
      console.log(error);
    }
  };
  const getKursin= async(KursiId)=> {
    try{
        
        let pool =await sql.connect(config);
        let kurset = pool.request().query(`Select * from Kurse where KursiId=${KursiId}`);

        return (await kurset).recordset[0];
  
    }catch(error){
        console.log(error);
    }
  }
  const getPopKurset = async () => {
    try {
      let pool = await sql.connect(config);
      let kurset = await pool.request().query('SELECT TOP 3 * FROM Kurse');
      // console.log(kurset);
      return kurset;
    } catch (error) {
      console.log(error);
    }
  };


  const countKurse = async () => {
    try {
      const conn = await sql.connect(config);
      const query = await conn
        .request()
        .query("SELECT COUNT(*) AS totalKurse FROM Kurse");
      return query;
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const updateKurs = async (KursiId, Kategori, Emri, Pershkrimi, Foto) => {
    try {
      console.log(Kategori + ' ' + Emri + ' ' + Pershkrimi + ' ' + Foto+" "+KursiId);
      let pool = await sql.connect(config);
      let kurset = await pool
        .request()
        .query(
          `UPDATE Kurse SET Kategori = '${Kategori}', Emri = '${Emri}', Pershkrimi = '${Pershkrimi}', Foto = '${Foto}' WHERE KursiId = ${KursiId}`
        );
        console.log(Kategori + ' ' + Emri + ' ' + Pershkrimi + ' ' + Foto);
        
      console.log(kurset);
      return kurset;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      let pool = await sql.connect(config);
      let result = await pool.request().query('SELECT DISTINCT Kategori FROM Kurse');
      let categories = result.recordset.map((row) => row.category);
      console.log(categories);
      return categories;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const insertNdertesa = async (Pershkrimi58281) => {
    try {
      const conn = await sql.connect(config);
      const query = await conn
        .request()
        .query(
          `INSERT INTO Ndertesa58281 VALUES ('${Pershkrimi58281}')`
        );
      console.log("Inserted successfully");
      return query;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getNdertesa= async()=> {
    try{
        let pool =await sql.connect(config);
        let ndertesa = pool.request().query('Select * from Ndertesa58281')
        console.log(ndertesa);
        return ndertesa;

    }catch(error){
        console.log(error);
    }
}

const deleteNdertesa = async (id) => {
  try {
    let pool = await sql.connect(config);
    let ndertesa = pool.request()
      .query(`DELETE FROM Ndertesa58281 WHERE NdertesaID = ${id}`);
    console.log(ndertesa);
    return (await ndertesa).recordset;
  } catch (error) {
    console.log(error);
  }
};

const getNdertesen= async(NdertesaID)=> {
  try{
      
      let pool =await sql.connect(config);
      let ndertesat = pool.request().query(`Select * from Ndertesa58281 where NdertesaID=${NdertesaID}`);
      return (await ndertesat).recordset[0];

  }catch(error){
      console.log(error);
  }
}
const updateNdertesa = async (NdertesaID, Pershkrimi58281) => {
  try {
    console.log(Pershkrimi58281 + ' '+ NdertesaID);
    let pool = await sql.connect(config);
    let ndertesat = await pool
      .request()
      .query(
        `UPDATE Ndertesa58281 SET Pershkrimi58281 = '${Pershkrimi58281}' WHERE NdertesaID = ${NdertesaID}`
      );
      console.log(Pershkrimi58281);
      
    console.log(ndertesat);
    return ndertesat;
  } catch (error) {
    console.log(error);
  }
};
const insertApartament = async (Pershkrimi58281,NdertesaID) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Apartamenti58281 VALUES ('${Pershkrimi58281}', ${NdertesaID})`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};
const getApartament= async()=> {
  try{
      let pool =await sql.connect(config);
      let apartament = pool.request().query('Select * from Apartamenti58281')
      console.log(apartament);
      return apartament;

  }catch(error){
      console.log(error);
  }
}
const deleteApartament = async (id) => {
  try {
    let pool = await sql.connect(config);
    let apartamentet = pool.request()
      .query(`DELETE FROM Apartamenti58281 WHERE ApartamentiID = ${id}`);
    console.log(apartamentet);
    return (await apartamentet).recordset;
  } catch (error) {
    console.log(error);
  }
};
const getApartamentin= async(ApartamentiID)=> {
  try{
      
      let pool =await sql.connect(config);
      let apartamentet = pool.request().query(`Select * from Apartamenti58281 where ApartamentiID=${ApartamentiID}`);
      return (await apartamentet).recordset[0];

  }catch(error){
      console.log(error);
  }
}
const updateApartament = async (ApartamentiID,Pershkrimi58281,NdertesaID) => {
  try {
    console.log(Pershkrimi58281 + ' '+ NdertesaID + '' + ApartamentiID);
    let pool = await sql.connect(config);
    let apartamentet = await pool
      .request()
      .query(
        `UPDATE Apartamenti58281 SET Pershkrimi58281 = '${Pershkrimi58281}', NdertesaID = ${NdertesaID} WHERE ApartamentiID = ${ApartamentiID}`
      );
    console.log(Pershkrimi58281 + ' ' + NdertesaID);
    return apartamentet;
  } catch (error) {
    console.log(error);
  }
};






 
// CRUD FOR STUDENT //
  const insertStudent = async (Emri, Mbiemri, Email, Passwordi, Roli) => {
    try {
      const conn = await sql.connect(config);
      const query = await conn
        .request()
        .query(
          `INSERT INTO Student VALUES ('${Emri}','${Mbiemri}','${Email}','${Passwordi}','${Roli}')`
        );
      console.log("Inserted successfully");
      return query;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getStudent= async()=> {
    try{
        let pool =await sql.connect(config);
        let student = pool.request().query('Select * from Student')
        console.log(student);
        return student;

    }catch(error){
        console.log(error);
    }
}

const countStudent = async () => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query("SELECT COUNT(*) AS total FROM Student");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteStudent = async (id) => {
  try {
    let pool = await sql.connect(config);
    let student = pool.request()
      .query(`DELETE FROM Student WHERE StudentId = ${id}`);
    console.log(student);
    return (await student).recordset;
  } catch (error) {
    console.log(error);
  }
};

const getStudentin= async(StudentId)=> {
  try{
      
      let pool =await sql.connect(config);
      let kurset = pool.request().query(`Select * from Student where StudentId=${StudentId}`);
      return (await kurset).recordset[0];

  }catch(error){
      console.log(error);
  }
}
const updateStudent = async (StudentId, Emri, Mbiemri, Email, Passwordi) => {
  try {
    console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi+" "+StudentId);
    let pool = await sql.connect(config);
    let studentet = await pool
      .request()
      .query(
        `UPDATE Student SET Emri = '${Emri}', Mbiemri = '${Mbiemri}', Email = '${Email}', Passwordi = '${Passwordi}' WHERE StudentId = ${StudentId}`
      );
      console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi);
      
    console.log(studentet);
    return studentet;
  } catch (error) {
    console.log(error);
  }
};

const getEmriStudent= async()=> {
  try{
      let pool =await sql.connect(config);
      let student = pool.request().query('select Emri from Student')
      console.log(student);
      return student;

  }catch(error){
      console.log(error);
  }
}



// CRUD FOR PROFFESOR


const insertProfesori = async (Emri, Mbiemri, Email, Passwordi, Subject, Roli) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Profesori VALUES ('${Emri}','${Mbiemri}','${Email}','${Passwordi}','${Subject}','${Roli}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};

const getProfesori= async()=> {
  try{
      let pool =await sql.connect(config);
      let prof = pool.request().query('Select * from Profesori')
      console.log(prof);
      return prof;

  }catch(error){
      console.log(error);
  }
}

const getProfesorin = async(ProfesoriId)=> {
  try{
      
      let pool =await sql.connect(config);
      let proff = pool.request().query(`Select * from Profesori where ProfesoriId=${ProfesoriId}`);
      return (await proff).recordset[0];

  }catch(error){
      console.log(error);
  }
}


const getProfesorById = async (id) => {
  try {
    let pool = await sql.connect(config);
    let professor = pool
      .request()
      .input('idParam', sql.Int, id)
      .query('SELECT * FROM Profesori WHERE ProfesoriId = @idParam');
    console.log(professor);
    return (await professor).recordset[0];
  } catch (error) {
    console.log(error);
  }
};

const updateProff = async (ProfesoriId, Emri, Mbiemri, Email, Passwordi, Subject) => {
  try {
    console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi+' '+Subject+" "+ProfesoriId);
    let pool = await sql.connect(config);
    let proff = await pool
      .request()
      .query(
        `UPDATE Profesori SET Emri = '${Emri}', Mbiemri = '${Mbiemri}', Email = '${Email}', Passwordi = '${Passwordi}', Subject = '${Subject}' WHERE ProfesoriId = '${ProfesoriId}'`
      );
      console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi+ ' ' + Subject);
      
    console.log(proff);
    return proff;
  } catch (error) {
    console.log(error);
  }
};

const deleteProfesori = async (id) => {
  try {
    let pool = await sql.connect(config);
    let prof = pool.request()
      .query(`DELETE FROM Profesori WHERE ProfesoriId = ${id}`);
    console.log(prof);
    return (await prof).recordset;
  } catch (error) {
    console.log(error);
  }
};

const insertProfesor = async (Emri, Mbiemri, Email, Passwordi) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Profesori VALUES ('${Emri}','${Mbiemri}','${Email}','${Passwordi}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};


// loginnn


const insertEnrollment = async (studentId, courseId) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input("studentId", sql.Int, studentId);
    request.input("courseId", sql.Int, courseId);
    await request.query(`
      INSERT INTO Enrollment (StudentId, CourseId)
      VALUES (@studentId, @courseId)
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const getCourseById = async (courseId) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('courseId', sql.Int, courseId);
    let result = await request.query(`
      SELECT KursiId
      FROM Kurse
      WHERE KursiId = @courseId
    `);

    if (result.recordset.length === 0) {
      return null;
    }

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};








const getStudentIdByEmail = async (email) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('emailParam', sql.VarChar, email);
    let result = await request.query(`
      SELECT StudentId
      FROM Student
      WHERE Email = @emailParam
    `);

    if (result.recordset.length === 0) {
      return null; // Student not found
    }

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const getUserin = async (email, password) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('emailParam', sql.VarChar, email);
    let result = await request.query(`

    SELECT p.Email, p.Passwordi, p.Roli 
    FROM Profesori p 
    WHERE p.Email = @emailParam 
    UNION 
    SELECT p.Email, p.Passwordi, p.Roli 
    FROM Student p 
    WHERE p.Email = @emailParam 
    UNION 
    SELECT p.Email, p.Passwordi, p.AdminRoli 
    FROM Admini p 
    WHERE Email = @emailParam
     
    `);

    if (result.recordset.length === 0) {
      throw new Error('User not found');
    }

    const user = result.recordset[0];
    const isPasswordValid = bcrypt.compare(password, user.Passwordi);

    if (isPasswordValid) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};



//BUSINESS FORM CRUD
const createApplication = async (FirstName, LastName, Email, LevelOfStudy, PlaceOfStudy, SubjectCategory) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Applications VALUES ('${FirstName}','${LastName}','${Email}','${LevelOfStudy}','${PlaceOfStudy}','${SubjectCategory}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};


const getAllApplications= async()=> {
  try{
      let pool =await sql.connect(config);
      let Applications = pool.request().query('Select * from Applications')
      console.log(Applications);
      return Applications;

  }catch(error){
      console.log(error);
  }
}


const getApplicationById = async (ApplicationId) => {
  try {
    let pool = await sql.connect(config);
    let applications = pool.request().query(`Select * from Applications where ID=${ApplicationId}`);
    return (await applications).recordset[0];
  }catch(error){
    console.log(error);
}
};

const updateApplication = async (id,firstName,lastName,email,levelOfStudy,placeOfStudy,languageProficiency) => {
  try {
    console.log(firstName + ' ' + lastName + ' ' + email + ' ' + levelOfStudy+" "+placeOfStudy+" "+languageProficiency);
    let pool = await sql.connect(config);
    let application = await pool
      .request()
      .query(
        `UPDATE Applications SET FirstName = '${firstName}', LastName = '${lastName}', Email = '${email}', LevelOfStudy = '${levelOfStudy}', PlaceOfStudy = '${placeOfStudy}', LanguageProficiency = '${languageProficiency}' WHERE ID = ${id}`
      );
      console.log(firstName + ' ' + lastName + ' ' + email + ' ' + levelOfStudy+ ' ' + placeOfStudy+ ' ' + languageProficiency);
      
    console.log(application);
    return application;
  } catch (error) {
    console.log(error);
  }
};

const deleteApplication = async (id) => {
  try {
    let pool = await sql.connect(config);
    let applications = pool.request()
      .query(`DELETE FROM Applications WHERE ID = ${id}`);
    console.log(applications);
    return (await applications).recordset;
  } catch (error) {
    console.log(error);
  }
};


//CONTACT US CRUD
const createContact = async (Name, Company, Email, PhoneNumber, Message) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO ContactUs VALUES ('${Name}','${Company}','${Email}','${PhoneNumber}','${Message}')`
      );

    console.log('Inserted successfully');
    return query;
  } catch (err) {
    console.log(err.message);
  }
};



const getContacts= async()=> {
  try{
      let pool =await sql.connect(config);
      let contact = pool.request().query('Select * from ContactUs')
      console.log(contact);
      return contact;

  }catch(error){
      console.log(error);
  }
}



const getContactById = async (contactID) => {
  try {
    let pool = await sql.connect(config);
    let contacts = pool.request().query(`Select * from ContactUs where contactID=${contactID}`);

    return (await contacts).recordset[0];
  }catch(error){
    console.log(error);
}
};



const updateContact = async (contactID, name, company, email, phoneNumber, details ) => {
  try {
    console.log(name + ' ' + company + ' ' + email + ' ' + phoneNumber+" "+details);
    let pool = await sql.connect(config);
    let contacts = await pool
    .request()
    .query(
      `UPDATE ContactUs SET name = '${name}', company = '${company}', email = '${email}', phoneNumber = '${phoneNumber}', details = '${details}' WHERE contactID = ${contactID}`
    );
    console.log(name + ' ' + company + ' ' + email + ' ' + phoneNumber+ ' ' + details);
    
  console.log(contacts);
  return contacts;
} catch (error) {
  console.log(error);
}
};


const deleteContact = async (id) => {
  try {
    let pool = await sql.connect(config);
    let contact = pool.request()
      .query(`DELETE FROM ContactUs WHERE contactID = ${id}`);
    console.log(contact);
    return (await contact).recordset;
  } catch (error) {
    console.log(error);
  }
};


const getStudentNameByEmail = async (email) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('emailParam', sql.VarChar, email);
    let result = await request.query(`
      SELECT Emri
      FROM Student
      WHERE Email = @emailParam
    `);

    if (result.recordset.length === 0) {
      return null; // Student not found
    }

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudentLastNameByEmail = async (email) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('emailParam', sql.VarChar, email);
    let result = await request.query(`
      SELECT Mbiemri
      FROM Student
      WHERE Email = @emailParam
    `);

    if (result.recordset.length === 0) {
      return null; // Student not found
    }

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudentId = async (email) => {
  try {
    let pool = await sql.connect(config);
    let request = pool.request();
    request.input('emailParam', sql.VarChar, email);
    let result = await request.query(`
      SELECT StudentId
      FROM Student
      WHERE Email = @emailParam
    `);

    if (result.recordset.length === 0) {
      return null; // Student not found
    }

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};








//PARTNERS CRUD
const insertPartner = async (name, company, email, coursecategory) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO Partneret VALUES ('${name}','${company}','${email}','${coursecategory}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};

const insertContact = async (name, company, email, phoneNumber, details) => {
  try {
    const conn = await sql.connect(config);
    const query = await conn
      .request()
      .query(
        `INSERT INTO ContactUs (name, company, email, phoneNumber, details) VALUES ('${name}','${company}','${email}','${phoneNumber}','${details}')`
      );
    console.log("Inserted successfully");
    return query;
  } catch (err) {
    console.log(err.message);
  }
};

const getPartners= async()=> {
  try{
      let pool =await sql.connect(config);
      let partners = pool.request().query('Select * from Partneret')
      console.log(partners);
      return partners;

  }catch(error){
      console.log(error);
  }
}

const getPartnerById= async(PartnerId)=> {
  try{
      
      let pool =await sql.connect(config);
      let partnerat = pool.request().query(`Select * from Partneret where PartnerId=${PartnerId}`);
      return (await partnerat).recordset[0];

  }catch(error){
      console.log(error);
  }
}

const updatePartner = async (PartnerId, name, company, email, coursecategory) => {
  try {
    console.log(name + ' ' + company + ' ' + email + ' ' + coursecategory+" "+PartnerId);
    let pool = await sql.connect(config);
    let partnerat = await pool
      .request()
      .query(
        `UPDATE Partneret SET name = '${name}', company = '${company}', email = '${email}', coursecategory = '${coursecategory}' WHERE PartnerId = ${PartnerId}`
      );
      console.log(name + ' ' + company + ' ' + email + ' ' + coursecategory);
      
    console.log(partnerat);
    return partnerat;
  } catch (error) {
    console.log(error);
  }
};

// const updateStudent = async (StudentId, Emri, Mbiemri, Email, Passwordi) => {
//   try {
//     console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi+" "+StudentId);
//     let pool = await sql.connect(config);
//     let studentet = await pool
//       .request()
//       .query(
//         `UPDATE Student SET Emri = '${Emri}', Mbiemri = '${Mbiemri}', Email = '${Email}', Passwordi = '${Passwordi}' WHERE StudentId = ${StudentId}`
//       );
//       console.log(Emri + ' ' + Mbiemri + ' ' + Email + ' ' + Passwordi);
      
//     console.log(studentet);
//     return studentet;
//   } catch (error) {
//     console.log(error);
//   }
// };

const deletePartner = async (id) => {
  try {
    let pool = await sql.connect(config);
    let partners = pool.request()
      .query(`DELETE FROM Partneret WHERE PartnerId = ${id}`);
    console.log(partners);
    return (await partners).recordset;
  } catch (error) {
    console.log(error);
  }
};

// const getKategorite = async (req, res) => {
//   try {
//     const conn = await sql.connect(config);
//     const query = 'SELECT DISTINCT Kategori FROM Kurse'; 
//     const result = await conn.query(query);
//     res.send(result.recordset.map(item => item.Kategori));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Gabim gjatë marrjes së kategorive');
//   }
// };




module.exports={
    getKurset, createKurs,deleteKurs, updateKurs, insertStudent, getStudent, deleteStudent, getKursin,
    countKurse,getPopKurset, updateKurs,getStudentin,updateStudent, countStudent,getCategories,
    insertProfesori, getProfesori, getProfesorById, updateProff, deleteProfesori, insertProfesor,
    getEmriStudent, getUserin,createApplication, getAllApplications,getApplicationById, updateApplication,deleteApplication,
    createContact, getContacts,getContactById,updateContact,deleteContact,getStudentLastNameByEmail,getStudentId,
    insertPartner,getPartners,getPartnerById,updatePartner,deletePartner, getStudentIdByEmail, insertContact,getStudentNameByEmail,getProfesorin,insertEnrollment,getCourseById
    ,insertNdertesa,getNdertesa,deleteNdertesa,getNdertesen,updateNdertesa,insertApartament,getApartament
    ,deleteApartament,getApartamentin,updateApartament
}