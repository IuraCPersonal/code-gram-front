import React from "react";

import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

import ProfileCard from "../UI/ProfileCard";
import FormInputs from "../UI/FormInputs";
import UserCard from "../UI/UserCard";
import Button from "../UI/CustomButton";
import Modal from "../UI/Modal";

import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <Modal onCloseProfile={props.onCloseProfile}>
      <div className={classes.total}>
        <div className="content">
          <Container fluid>
            <Row>
              <Col md={8}>
                <ProfileCard
                  title="Edit Profile"
                  content={
                    <form>
                      <FormInputs
                        ncols={["col-md-5", "col-md-3", "col-md-4"]}
                        properties={[
                          {
                            label: "Company (disabled)",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Company",
                            defaultValue: "Creative Code Inc.",
                            disabled: true,
                          },
                          {
                            label: "Username",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Username",
                            defaultValue: "michael23",
                          },
                          {
                            label: "Email address",
                            type: "email",
                            bsClass: "form-control",
                            placeholder: "Email",
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        properties={[
                          {
                            label: "First name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "First name",
                            defaultValue: "Mike",
                          },
                          {
                            label: "Last name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Last name",
                            defaultValue: "Andrew",
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Adress",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Home Adress",
                            defaultValue:
                              "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                        properties={[
                          {
                            label: "City",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "City",
                            defaultValue: "Mike",
                          },
                          {
                            label: "Country",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Country",
                            defaultValue: "Andrew",
                          },
                          {
                            label: "Postal Code",
                            type: "number",
                            bsClass: "form-control",
                            placeholder: "ZIP Code",
                          },
                        ]}
                      />

                      <Row>
                        <Col md={12}>
                          <FormGroup controlId="formControlsTextarea">
                            <FormLabel>About Me</FormLabel>
                            <FormControl
                              rows="5"
                              componentClass="textarea"
                              bsClass="form-control"
                              placeholder="Here can be your description"
                              defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button pullRight fill type="submit">
                        Update Profile
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
              <Col md={4}>
                <UserCard
                  bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                  // avatar={avatar}
                  name="Mike Andrew"
                  userName="michael24"
                  description={
                    <span>
                      "Lamborghini Mercy
                      <br />
                      Your chick she so thirsty
                      <br />
                      I'm in that two seat Lambo"
                    </span>
                  }
                  socials={
                    <div>
                      <Button simple>
                        <i className="fa fa-facebook-square" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-google-plus-square" />
                      </Button>
                    </div>
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Modal>
  );
};

export default Profile;