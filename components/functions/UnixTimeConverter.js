var date = new Date();
//parse to unix
var unixDate = Date.parse(date);
//parse to string
var unix = unixDate.toString();
//trim to 10 letters
var subUnix = unix.substring(0, 10);

export default subUnix;


