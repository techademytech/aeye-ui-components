import React from "react";
import AppComponent from "./App";
import { shallow } from "enzyme";

describe("renders learn react link", () => {
  const enzymeWrapper = shallow(<AppComponent />);

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Render app component without crashing", () => {
    const app = enzymeWrapper.find("div");
    expect(app.length).toBe(30);
  });
});
