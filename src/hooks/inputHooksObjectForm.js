import { useState } from "react";

function CustomHooksUsingObjectFormat(initialState) {
   const [value, setValue] = useState(initialState);

   function onChange(e) {
      setValue(e.target.value);
   };

   function clearInput() {
      setValue("");
   }

   return {value, onChange, clearInput}
};

export default CustomHooksUsingObjectFormat;