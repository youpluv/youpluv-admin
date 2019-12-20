import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import config from "../../config/constants";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.highlight,
    marginBottom: "20px",
    boxShadow: "none"
  }
}));

export default props => {
  // useEffect(() => {
  //   console.log("UPLOAD :: ", file);
  //   if (file) {
  //     API.get(config.APIS.MYLASH, "upload").then(response => {
  //       fileUpload({ ...response.fields, url: response.url });
  //     });
  //   }
  // }, [file]);
  const [form, setForm] = useState({});
  const [file, setFile] = useState({});

  useEffect(() => {
    console.log("FORM :: ", form);
    if (form.url) fileUpload(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.url]);

  const classes = useStyles();

  async function getUrl() {
    const response = await API.get(
      config.APIS.BOLAOABBR_ADMIN,
      "intranet/upload"
    );
    console.log("response :: ", response);
    setForm({ ...response.fields, url: response.url });
  }

  function fileUpload(form) {
    let formData = new FormData();
    formData.append("key", form.key);
    formData.append("AWSAccessKeyId", form.AWSAccessKeyId);
    formData.append("policy", form.policy);
    formData.append("signature", form.signature);
    formData.append("x-amz-security-token", form["x-amz-security-token"]);
    formData.append("file", file);
    const config = {
      method: "POST",
      body: formData,
      enctype: "multipart/form-data"
    };
    console.log(formData);
    fetch(form.url, config);
  }

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
    getUrl();
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div
              style={{
                position: "relative",
                width: "109px",
                height: "37px",
                overflow: "hidden"
              }}
            >
              <input
                type="file"
                name="file"
                onChange={handleChangeFile}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: 300,
                  opacity: 0
                }}
              />
              <Button variant="contained" color="primary">
                IMPORTAR
              </Button>
            </div>
            <input onChange={handleChangeFile} />
          </Paper>
        </Grid>

        {/* <button onClick={() => getUrl()}>GetLink</button> */}
        {/* <button onClick={() => fileUpload(state)}>Upload</button> */}
      </Grid>
    </div>
  );
};
