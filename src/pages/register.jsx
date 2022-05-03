import CustomInput from "../components/CustomInput";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { register } from "../Api";
export default function Example() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
  });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(register, {
    onSuccess: () => {
      toast.success("Successfully registered");
      navigate("/login");
    },
    onError: () => {
      toast.error("Wrong credentials, please check your details and try again");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handleSubmit = async (e) => {
    toast.dismiss();
    e.preventDefault();
    mutate(userDetails);
  };
  return (
    <>
      <div className="h-full  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-md">
          <img className="mx-auto h-32 w-32" src="" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-700">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-left font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <CustomInput
                    id="Email"
                    name="Email"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    autoComplete="Email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <CustomInput
                    id="username"
                    name="username"
                    value={userDetails.username}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        username: e.target.value,
                      })
                    }
                    type="username"
                    autoComplete="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                    value={userDetails.password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isLoading ? (
                    <LoadingSpinner height={"6"} width={"5"} />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
