import React, { useState } from 'react';
import "./CodeEditor.css"
import { Controlled as ControlledEditor } from 'react-codemirror2';
import '../../../node_modules/codemirror/lib/codemirror.css';
import '../../../node_modules/codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

export default function CodeEditor(props){

  const {language, displayName, value, onChange, readOnly } = props;

  function handleChange(editor, data, value){
    onChange(value)
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="codemirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
          readOnly: readOnly,
        }}
      />
    </div>
  );
};