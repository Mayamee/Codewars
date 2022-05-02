function UriBuilder(uri) {
  this.params = {};
  uri = uri.replace(/\?.*$/g, "");
  this.uri = uri;
}
UriBuilder.prototype.build = function () {
  const some = Array.from(Object.entries(this.params));
  const query = !Object.keys(this.params).length
    ? "a=1"
    : some
        .map((e) => {
          let [key, val] = e;
          val = val.toString().replace(/ /g, "%20");
          return `${key}=${val}`;
        })
        .reduce((acc, cur) => {
          acc += cur + "&";
          return acc;
        }, "")
        .replace(/&$/, "");
  return query.length ? this.uri + "?" + query : this.uri;
};

const uriBuilder = new UriBuilder("http://anegukid.na/ufso");
uriBuilder.params.a = "1";
uriBuilder.params.b = "2";
uriBuilder.params.c = "je mokjoa";
delete uriBuilder.params.a;
delete uriBuilder.params.b;
delete uriBuilder.params.c;
// console.log(uriBuilder.build());
console.log(uriBuilder.build());
