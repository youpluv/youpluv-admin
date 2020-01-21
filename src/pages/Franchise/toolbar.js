import React, { useCallback } from "react";
import {
  SaveButton,
  Toolbar,
  useCreate,
  useUpdate,
  useRedirect,
  useNotify
} from "react-admin";
import { useFormState } from "react-final-form";

const SaveWithNoteButton = props => {
  const [create] = useCreate("franchise");
  const [update] = useUpdate("franchise");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath, redirect } = props;

  const formState = useFormState();
  const handleClick = useCallback(() => {
    if (!formState.valid) {
      return;
    }
    console.log(redirect);

    const { image_url, id, ...formData } = formState.values;

    if (props.id) {
      update(
        {
          payload: { data: { ...formData, id } }
        },
        {
          onSuccess: ({ data: newRecord }) => {
            notify("ra.notification.updated", "info", {
              smart_count: 1
            });
            redirectTo(redirect, basePath, newRecord.id, newRecord);
          }
        }
      );
    } else {
      create(
        {
          payload: { data: formData }
        },
        {
          onSuccess: ({ data: newRecord }) => {
            notify("ra.notification.created", "info", {
              smart_count: 1
            });
            redirectTo(redirect, basePath, newRecord.id, newRecord);
          }
        }
      );
    }
  }, [
    props.id,
    formState.valid,
    formState.values,
    create,
    update,
    notify,
    redirectTo,
    redirect,
    basePath
  ]);

  return <SaveButton {...props} handleSubmitWithRedirect={handleClick} />;
};

export function CustomToolbar(props) {
  return (
    <Toolbar {...props}>
      <SaveWithNoteButton {...props} />
    </Toolbar>
  );
}
