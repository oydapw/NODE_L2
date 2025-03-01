require('dotenv').config();
const OS = require('os');
function Inf()
{
    if(check())
    {
    console.log(OS.platform());
    console.log(OS.freemem());
    console.log(OS.homedir());
    console.log(OS.hostname());
    console.log(OS.networkInterfaces());
    }
}
function four()
{
 if(OS.freemem()/1024/1024>4000)
 {
    return true;
 }
 else
 {
    return false;
 }
}
function check() {
    return process.env.MODE === 'admin' || 'user';
}
Inf()