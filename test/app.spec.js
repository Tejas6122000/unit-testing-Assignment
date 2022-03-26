var chaiHttp = require("chai-http");
var chai = require("chai");
const app = require("../index");
const { expect } = require("chai");
chai.use(chaiHttp);

describe("Testing", () => {

//Testing on Public Api

  it("Public Api with correct username & password", (done) => {
    chai
      .request(app)
      .get("/public")
      .auth("test", "tester1234")
      .end((err, res) => {
        done();
      });
  });

  it("Public Api with invalid username & password", (done) => {
    chai
      .request(app)
      .get("/public")
      .auth("test", "tester1234")
      .end((err, res) => {
        done();
      });
  });

  it("Public Api with no Auth Header", (done) => {
    chai
      .request(app)
      .get("/public")
      .end((err, res) => {
        done();
      });
  });


//Testing on Private Api

  it("Priavte Api with correct username & password ", () => {
    chai
      .request(app)
      .get("/private")
      .auth("test", "tester1234")
      .end((err, res) => {
        expect(res);
      });
  });

  it("Private Api with invalid username & password", () => {
    const expected = { status: 401, message: "Unauthorized" };
    chai
      .request(app)
      .get("/private")
      .auth("tejas", "tj22")
      .end((err, res) => {
        expect(res.body).to.eql(expected);
      });
  });



  it("Private Api with no Auth header", () => {
    const expected = { status: 401, message: "Unauthorized" };
    chai
      .request(app)
      .get("/private")
      .end((err, res) => {
        expect(res.body).to.eql(expected);
      });
  });

  
});
