const dns = require('dns');
const {promisify} = require('util');

let resolvePromise = promisify(dns.resolve4);

async function domainToIpAddress(hostname="") {
    try {
        const ipAddresses = await resolvePromise(hostname);
        ipAddresses.forEach((add) => console.log(add));
    } catch (error) {
        console.log("Error");
    }
}

domainToIpAddress("www.mum.edu");
domainToIpAddress("www.amazon.com");
domainToIpAddress("www.microsoft.com");
domainToIpAddress("www.google.com");
domainToIpAddress("www.apple.com");
domainToIpAddress("www.tesla.com");
domainToIpAddress();