const qs = require("querystring");
class UriBuilder {
  constructor(uri) {
    const [base, query] = uri.split("?");
    this.base = base;
    this.params = qs.parse(query);
  }
  build() {
    return `${this.base}?${qs.stringify(this.params)}`;
  }
}
const uri = new UriBuilder("http://fivic.ir/zin?a=1");
