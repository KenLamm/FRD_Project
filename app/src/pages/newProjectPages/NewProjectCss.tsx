/* .button-creator {
  position: relative;
}

.add-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.custom-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
} */
/* ------------------------------------------------------------ */
/* .buttonCreator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addButton {
  background-color: #f2f2f2;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-top: 10px;
}

.buttonList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  font-size: 40px;
}

.customButton {
  margin: 10px;
  padding: 10px 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  width: 70%;
  height: 60px;
  font-size: 40px;
}

.buttonWrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.mantine-19pz3dh {
  height: 0;
}

#mantine-u5ocpcx76-body {
  margin-top: 0px;
}
.mantine-Modal-header mantine-19pz3dh {
  height: 0;
}

.mantine-Paper-root mantine-Modal-content mantine-Modal-content mantine-3cevnw {
  width: 80%;
} */
/* ------------------------------------------------------------------ */

import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  buttonCreator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#f2f2f2",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    marginTop: "10px",
  },
  buttonList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "60%",
    fontSize: "40px",
  },
  customButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#f2f2f2",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
    width: "70%",
    height: "60px",
    fontSize: "40px",
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  alertTittle: {
    height: "20px",
  },
  alertInput: {
    marginTop: "3%",
    marginBottom: "3%",
  },
}));

export default useStyles;
