import LoadingSpinner from "./LoadingSpinner";

const Button = (props) => {
  return (
    <div className="w-full">
      <div>
        <button
          type={`${props.normal ? "button" : "submit"}`}
          disabled={props.spin}
          data-testid={props.data_testid}
          className={`w-full flex justify-center py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed border border-transparent rounded-md shadow-sm text-sm font-medium ${
            props.text_color
              ? `${props.text_color} border-purple-500`
              : "text-white"
          } ${props.color ? `${props.color}` : "bg-primary"} ${
            props.colorHover ? `hover:bg-purple-700 hover:text-white` : "hover:bg-primarylight"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary`}
        >
          {props.spin ? (
            <LoadingSpinner
              spin_color={props.spin_color}
              data-testid="spinner"
              height={"6"}
              width={"5"}
            />
          ) : (
            props.text
          )}
        </button>
      </div>
    </div>
  );
};

export default Button;
