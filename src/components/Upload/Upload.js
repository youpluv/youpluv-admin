import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ProgressBar from "../ProgressBar";
import { useForm } from "react-final-form";
import useUpload from "../../hooks/useUpload";
import { Typography } from "@material-ui/core";

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
  const { source = "url", getUrl = () => {} } = props;
  const [form, setForm] = useState({});
  const [file, setFile] = useState({});
  // const [progress, setProgress] = useState(0);

  const { progress, startUpload, status } = useUpload();

  const formReactAdmin = useForm();

  useEffect(() => {
    if (form.url) fileUpload(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleSetFileId = useCallback(
    fileId => {
      formReactAdmin.change(source, fileId);
    },
    [formReactAdmin, source]
  );

  const classes = useStyles();

  async function getUrlUpload() {
    const response = await getUrl();
    handleSetFileId(response.fields.key);
    setForm({ ...response.fields, url: response.url });
  }

  function fileUpload(form) {
    // check file type
    // if (
    //   !["image/jpeg", "image/gif", "image/png", "image/svg+xml"].includes(
    //     file.type
    //   )
    // ) {
    //   console.log("Only images are allowed.");
    //   return;
    // }

    // check file size (< 2MB)
    if (file.size > 5 * 1024 * 1024) {
      console.log("File must be less than 5MB.");
      return;
    }

    let formData = new FormData();
    formData.append("key", form.key);
    formData.append("AWSAccessKeyId", form.AWSAccessKeyId);
    formData.append("policy", form.policy);
    formData.append("signature", form.signature);
    formData.append("x-amz-security-token", form["x-amz-security-token"]);
    formData.append("file", file);
    startUpload(form.url, formData);
  }

  function handleChangeFile(e) {
    const file = e.target.files[0] || {};
    formReactAdmin.change("file_name", file.name);
    setFile(file);
    getUrlUpload();
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
                id="file"
                type="file"
                name="file"
                onChange={handleChangeFile}
                style={{
                  position: "absolute",
                  zIndex: -1,
                  opacity: 0
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={status === "loading"}
                onClick={() => document.querySelector("#file").click()}
              >
                {status === "loading" ? `${progress}%` : "IMPORTAR"}
              </Button>
            </div>
          </Grid>
          <Grid container item xs={6} alignItems={"center"} justify={"center"}>
            <Typography>{file.name || "Nenhum arquivo selecionado"}</Typography>
          </Grid>
          <Grid item xs={12}>
            <ProgressBar progress={progress} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
