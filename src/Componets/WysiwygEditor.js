import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

const WysiwygEditor = () => {

    const [editorState, setEditorState] = React.useState(
      MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
      setEditorState(newState)
    }
    return <MUIEditor editorState={editorState} onChange={onChange} />
  }

export default WysiwygEditor;