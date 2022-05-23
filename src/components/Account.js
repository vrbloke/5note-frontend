import React from "react";
import { Image } from "react-native";
import Button from "./Button";

const Account = (props) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "50px",
        marginLeft: "20%",
        marginTop: "8%",
        height: "200px",
        borderRadius: "12px",
        color: "lightgray",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "block", width: "50%" }}>
          <Image
            source={require("../sample.jpg")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              marginLeft: 40,
            }}
          />
        </div>
        <div style={{ display: "block", marginLeft: "100px" }}>
          <h2>Login</h2>
          <input
            style={{
              fontSize: "20px",
              height: "37px",
              marginLeft: "1px",
              marginBottom: "10px",
              width: "150px",
              textAlign: "center",
            }}
            id="nickInput"
            type="text"
            defaultValue={"nick"}
            disabled={true}
          ></input>
          <Button
            margines={"0 auto"}
            text={"Zmień nick"}
            fun={() => {
              document.getElementById("nickInput").disabled =
                document.getElementById("nickInput").disabled ? false : true;
            }}
            color={"white"}
          />
        </div>
      </div>
      <div style={{ display: "flex", margin: "20px" }}>
        <div style={{ display: "block", margin: "5px", marginRight: "85px" }}>
          <Button
            margines={"0 auto"}
            text={"Zmień hasło"}
            fun={() => {
              props.changeBoardState("passwordChange");
            }}
            color={"white"}
          />
        </div>
        <div style={{ display: "block", margin: "5px" }}>
          <Button
            margines={"0 auto"}
            text={"Wyloguj"}
            fun={() => {
              props.changeBoardState("logout");
            }}
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
