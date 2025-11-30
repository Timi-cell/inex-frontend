import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Verify Email
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData
    );

    if (response.status === 201) {
      // 201 = Created
      toast.success("Registration Successful!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    return response.data;
  } catch (error) {
    // Detailed error handling
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";

    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });

    console.error("Register User Error:", error); // for debugging
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );
    if (response.status === 200) {
      toast.success("Login Successful!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Logout User
export const logOutUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/logout`);
    if (response.status === 200) {
      toast.success("Logout Successful!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Get User
export const getUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData
    );
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_LEFT,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Reset Password
export const resetPassword = async (resetToken, userData) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Change Password
export const changePassword = async (data) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/changepass`,
      data
    );
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_LEFT,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Get User Report
export const getUserReport = async (data) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/report`, data);
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_LEFT,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Update User
export const updateUser = async (data) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/updateuser`,
      data
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Delete User
export const deleteUser = async () => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/users/deleteuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};
