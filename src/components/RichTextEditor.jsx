import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {
  align,
  font,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  lineHeight,
  list,
  paragraphStyle,
  table,
  template,
  textStyle,
  image,
  link
} from 'suneditor/src/plugins';
import parser from 'html-react-parser';

const RichTextEditor = ({ 
  richTextEditorHtml = '', 
  onRichTextEditorChange, 
  displayMode = 'EDIT' 
}) => {
  const [richTextEditor, setRichTextEditor] = useState(
    localStorage.getItem('richText') || richTextEditorHtml || ''
  );

  const handleChange = (content) => {
    console.log('OnChange: ', content);
    setRichTextEditor(content);
    
    // Save to localStorage
    localStorage.setItem('richText', content);
    
    // Call the change handler if provided
    if (onRichTextEditorChange) {
      onRichTextEditorChange(content);
    }
  };

  // Render edit mode
  if (displayMode === 'EDIT') {
    return (
      <div>
        <SunEditor
          autoFocus={true}
          lang="en"
          setOptions={{
            showPathLabel: false,
            height: 300,
            placeholder: 'Enter your text here!!!',
            plugins: [
              align, font, fontColor, fontSize, formatBlock, 
              hiliteColor, horizontalRule, lineHeight, list, 
              paragraphStyle, table, template, textStyle, image, link
            ],
            buttonList: [
              ['undo', 'redo'],
              ['font', 'fontSize', 'formatBlock'],
              ['paragraphStyle'],
              ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
              ['fontColor', 'hiliteColor'],
              ['removeFormat'],
              '/', // Line break
              ['outdent', 'indent'],
              ['align', 'horizontalRule', 'list', 'lineHeight'],
              ['table', 'link', 'image']
            ],
            formats: ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            font: [
              'Arial', 'Calibri', 'Comic Sans', 'Courier', 'Garamond', 
              'Georgia', 'Impact', 'Lucida Console', 'Palatino Linotype', 
              'Segoe UI', 'Tahoma', 'Times New Roman', 'Trebuchet MS'
            ]
          }}
          defaultValue={richTextEditorHtml}
          onChange={handleChange}
        />
      </div>
    );
  }

  // Render view mode
  return (
    <div>
      {richTextEditor && (
        <div>
          <div className="sun-editor">
            <div className="sun-editor-editable">
              {parser(richTextEditor)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;