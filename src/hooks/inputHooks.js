function CustomHooksUsingArraysForm(initialState) {
   //  this becomes a defacto "factory of functions" for each input to use
   /* 
   Just note that you return the whole array with all functions.
   Note that if one of the inputs wont use a given function, you still need to account for it.
   Simply input a empty space to skip it!
  */
   const [value, setValue] = useState(initialState);

   function onChange(e) {
      setValue(e.target.value)
   };

   function clearInput() {
      setValue("");
   }

   return [value, onChange, clearInput];
};

export default CustomHooksUsingArraysForm;

