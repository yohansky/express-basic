const portfolio = require("../db/models/portfolio");
const { portfolios } = require("./data");

class FakeDB {
  async clean() {
    await portfolio.deleteMany({});
  }
  async addData() {
    await portfolio.create(portfolios);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();
