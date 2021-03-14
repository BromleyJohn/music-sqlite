exports.addMuso = () => {
   return `INSERT INTO tblMusos (id_muso,last_name,other_names,id_band) VALUES(6,'Richards','Keith','ROL')` 
}

exports.getMusos = () => {
   return 'SELECT * FROM tblMusos ORDER BY last_name'
}

exports.deleteMuso = () => {
   return 'DELETE FROM tblMusos WHERE id_muso = 6' 
}

exports.updateMuso = (_otherName,_id) => {
  return  'UPDATE tblMusos SET other_names = "' + _otherName + '" WHERE id_muso = ' + _id
}




