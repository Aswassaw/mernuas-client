import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { authUser } from "../../redux/actions/auth";
import { API_URL } from "../../utils/constant";
import { createToast } from "../../utils/createToast";
import { normalizeError } from "../../utils/normalizeError";
import useAuthStore from "../../hooks/auth/useAuthStore";

export default function ActivateAccount() {
  const [isPending, setIsPending] = useState(false);
  const { user } = useAuthStore();
  const { token } = useParams();
  const dispatch = useDispatch();

  const activateAccount = async () => {
    setIsPending(true);

    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ token });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/account-activation",
        body,
        config
      );

      createToast(res.data.msg, "success");
      setIsPending(false);
      dispatch(authUser());
    } catch (error) {
      console.error(error);

      if (error.response) {
        createToast(normalizeError(error.response.data).other, "error");
      } else {
        createToast(error.message, "error");
      }
      setIsPending(false);
    }
  };

  // jika akun telah terverfikasi maka redirect ke home
  if (user.verified) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="container-md my-4">
      <h1 className="text-center">Your account is ready to activate</h1>
      <div className="d-flex justify-content-center mt-3">
        {!isPending && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={activateAccount}
          >
            Activate Now
          </button>
        )}

        {isPending && (
          <button type="button" className="btn btn-primary" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>{" "}
            Activating Account
          </button>
        )}
      </div>
    </div>
  );
}
