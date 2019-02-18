const user = require('./user/index');
const admin = require('./admin/index');

// export required as object
module.exports = { 'userRoute': user, 'adminRoute': admin};
