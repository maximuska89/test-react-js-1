import React from 'react';
import App from './App';
import {shallow} from "enzyme";

// 1. Test suite
describe("[UNIT] Testing the App component", () => {
  let wrapper;

  // 2. A Jest setup helper function
  beforeEach(() => {
    // 3. Enzyme's shallow rendering
    wrapper = shallow(<App/>)
  });

  describe("Component validation", () => {
    // 4. Our unit test, checking if the initial value is 0
    it('displays 0 as a default value', () => {
      expect(wrapper.find("h1").text()).toContain("0")
    });

    it("should increase counter when the button is clicked", () => {
      wrapper.find("button").simulate("click");

      expect(wrapper.find("h1").text()).toContain("1")
    });
  })
});
