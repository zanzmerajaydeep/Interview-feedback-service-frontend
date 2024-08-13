import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Navbar,
} from "reactstrap";

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/main" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>
                <NavItem>
                  <Link to="/SearchOnSkill"
                  style={{ color: "gray", textDecoration: "none" }}
                  >SearchOnSkill</Link>
                </NavItem>
              </DropdownItem>
              <DropdownItem>
              <NavItem>
                  <Link to="/ShowAllByDateRange"
                  style={{ color: "gray", textDecoration: "none" }}
                  >ShowAllByDateRange</Link>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <Link to="#"
                  style={{ color: "gray", textDecoration: "none" }}
                  >option</Link>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink>
            <Link to="/AllFeedback"
            style={{ color: "gray", textDecoration: "none" }}
            >AllFeedback</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {" "}
              <Link to="/ShowFeedbackMonthWise"
              style={{ color: "gray", textDecoration: "none" }}
              >FeedbackBarChart</Link>
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink>
              <Link to="/HiringDecisionChart"
              style={{ color: "gray", textDecoration: "none" }}
              >HiringDecisionChart</Link>
            </NavLink>
          </NavItem>

        
        </Nav>
      </div>
    </div>
  );
};
