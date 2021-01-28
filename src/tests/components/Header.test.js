import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
