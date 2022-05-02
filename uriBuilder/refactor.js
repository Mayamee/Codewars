class UriBuilder {
  constructor(uri) {
    const [base, query] = uri.split(/\?/);
    this.base = base;
    this.params = query
      ? [...query.split(/&/g).map((e) => e.split(/=/))].reduce(
          (obj, [key, val]) => {
            obj[key] = val;
            return obj;
          },
          {}
        )
      : {};
  }
  build() {
    const paramsArr = Array.from(Object.entries(this.params));
    const query = paramsArr
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
    return `${this.base}?${query}`;
  }
}
const uri = new UriBuilder("http://keehuwof.ne/vam?a=10&b=20&c=30");
uri.params.a = 15;
console.log(uri.build());
