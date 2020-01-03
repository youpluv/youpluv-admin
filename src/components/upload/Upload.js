import React, { useState, useEffect, useCallback } from "react";
import { API } from "aws-amplify";
import config from "../../config/constants";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ProgressBar from "../ProgressBar";
import { useForm } from "react-final-form";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.highlight,
    marginBottom: "20px",
    boxShadow: "none",
    width: "300px"
  }
}));

export default function Upload(props) {
  const [form, setForm] = useState({});
  const [file, setFile] = useState({});

  const _form = useForm();

  useEffect(() => {
    if (form.url) fileUpload(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.url]);

  const handleSetFileId = useCallback(
    fileId => {
      _form.change("url", fileId);
      _form.change("id", fileId);
      console.log("FORM :: ", _form.getState());
    },
    [_form]
  );

  const classes = useStyles();

  async function getUrl() {
    const response = await API.get(
      config.APIS.BOLAOABBR_ADMIN,
      "intranet/upload"
    );
    handleSetFileId(response.fields.key);
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
    fetch(form.url, config);
  }

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
    getUrl();
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <span>Nenhum arquivo selecionado</span>
          </Grid>
          <Grid item xs={12}>
            <ProgressBar progress={30} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
