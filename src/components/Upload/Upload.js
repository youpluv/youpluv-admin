import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ProgressBar from "../ProgressBar";
import { useForm } from "react-final-form";
import useUpload from "../../hooks/useUpload";
import { Typography } from "@material-ui/core";
import config from "../../config/constants";

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

  const { progress, startUpload, status, urlUploaded } = useUpload();

  const _form = useForm();

  useEffect(() => {
    if (file) fileUpload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handleSetFileId = useCallback(
    fileId => {
      _form.change(source, fileId);
    },
    [_form, source]
  );

  const classes = useStyles();

  useEffect(() => {
    console.log("DONE :: ", urlUploaded);

    _form.change(source, urlUploaded);
  }, [source, urlUploaded]);

  function fileUpload() {
    if (
      ![
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png",
        "image/svg+xml"
      ].includes(file.type)
    ) {
      console.log("Only images are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      console.log("File must be less than 5MB.");
      return;
    }

    let formData = new FormData();
    formData.append("type", "news");
    formData.append("image", file);

    startUpload(config.BASE_URL + "images", formData);
  }

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
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
                {status === "loading" ? `${progress}%` : "UPLOAD"}
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
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
