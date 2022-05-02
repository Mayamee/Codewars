function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}
const t1 = "http://github.com/carbonfive/raygun";
const t2 = "http://www.zombie-bites.com";
const t3 = "https://www.cnet.com";
const t4 = "http://google.co.jp";
console.log(domainName(t1));
console.log(domainName(t2));
console.log(domainName(t3));
console.log(domainName(t4));
