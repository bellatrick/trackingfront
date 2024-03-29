const CustomInput = (props) => {
  return (
    <div className="w-full">
      <label
        htmlFor={props.type}
        className="block text-sm text-left font-medium mb-4 text-gray-500"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          type={props.type}
          data-testid={props.data_testid}
          value={props.value}
          autoComplete={props.autoComplete}
          placeholder={props.placeholder ? props.placeholder : ""}
          required={props.required}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default CustomInput;
