import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice";
import { updateUserPassword } from "../api/auth";
import toast from "react-hot-toast";

export const useUpdateUserPassword = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserPassword,
    onSuccess: (data) => {
      console.log("Password updated successfully:", data);
      dispatch(setCredentials({
        user: data.data.user,
      }));
      queryClient.invalidateQueries(['user']);
      toast.success("Password updated!");
    },
    onError: (err) => {
      if (err.response) {
        console.error("Update error response:", err.response);
        toast.error("Update failed: " + (err.response.data?.message || "An error occurred"));
      } else if (err.request) {
        console.error("No response received:", err.request);
        toast.error("Update failed: No response from the server");
      } else {
        console.error("Error:", err.message);
        toast.error("Update failed: " + err.message);
      }
    },
  });
};
