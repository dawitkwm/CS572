const dns = require('dns');

let domainToIpAddress = function (hostname = "") {
        dns.resolve4(hostname, (err, addresses) => {
                err ? console.log("Error") : addresses.forEach((add) => console.log(add));
        });
};

domainToIpAddress("www.mum.edu");
domainToIpAddress("www.amazon.com");
domainToIpAddress("www.microsoft.com");
domainToIpAddress("www.google.com");
domainToIpAddress("www.apple.com");
domainToIpAddress("www.tesla.com");
domainToIpAddress();