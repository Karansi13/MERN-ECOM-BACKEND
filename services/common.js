const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}

exports.cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt'];
  }
  // temporary   
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGEzYTdjZDM5M2IxYmU5ODdlYzU0NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4ODAwOTUxfQ.vD_7bWzyEgRckHpQh5VAheluPVyEmfyAroWJADSx1oI";
  return token;
};
