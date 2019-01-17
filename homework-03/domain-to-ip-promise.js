const dns = require('dns');
const {promisify} = require('util');

let resolvePromise = promisify(dns.resolve4);

let domainToIpAddress  = function(hostname="") {
    resolvePromise(hostname)
        .then(((addresses) => addresses.forEach((add) => console.log(add))))
        .catch((err) => console.log("Error"));
};

domainToIpAddress("www.mum.edu");
domainToIpAddress("www.amazon.com");
domainToIpAddress("www.microsoft.com");
domainToIpAddress("www.google.com");
domainToIpAddress("www.apple.com");
domainToIpAddress("www.tesla.com");
domainToIpAddress();